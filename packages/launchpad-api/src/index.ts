import {
  createLaunchPadPrivateState,
  LaunchPadPrivateState,
  Contract,
  ledger,
  Ledger,
  pureCircuits,
  CoinInfo,
} from "@repo/launchpad-contract";
import { witnesses } from "@repo/launchpad-contract";
import {
  DeployedLaunchpadContract,
  derivedState,
  LaunchPadContract,
  LaunchPadContractProvider,
  LaunchPadPrivateStateKey,
} from "./common-types.js";
import {
  ContractAddress,
  QualifiedCoinInfo,
} from "@midnight-ntwrk/compact-runtime";
import { combineLatest, from, map, Observable } from "rxjs";
import {
  deployContract,
  findDeployedContract,
} from "@midnight-ntwrk/midnight-js-contracts";
import {
  get_fixed_sale_bank,
  get_fixed_sales_received_bank,
  get_open_fixed_token_sales,
  randomNonceBytes,
  stringTo32ByteArray,
} from "./utils.js";
import { encodeTokenType, nativeToken } from "@midnight-ntwrk/ledger";

const LaunchPadContractInstance: LaunchPadContract = new Contract(witnesses);

export class LaunchPadAPI {
  public readonly deployedContractAddress: ContractAddress;
  readonly state$: Observable<derivedState>;

  private constructor(
    public readonly deployedContract: DeployedLaunchpadContract,
    private providers: LaunchPadContractProvider
  ) {
    this.deployedContractAddress =
      deployedContract.deployTxData.public.contractAddress;
    this.state$ = combineLatest(
      [
        // Combine public (ledger) state with...
        providers.publicDataProvider
          .contractStateObservable(this.deployedContractAddress, {
            type: "all",
          })
          .pipe(map((contractState) => ledger(contractState.data))),
        from(
          providers.privateStateProvider.get(
            LaunchPadPrivateStateKey
          ) as Promise<LaunchPadPrivateState>
        ),
      ],
      // ...and combine them to produce the required derived state.
      (ledgerState, privateState) => {
        pureCircuits.public_key(privateState.secretKey);
        return {
          receival_bank: get_fixed_sales_received_bank(
            ledgerState.fixed_sales_received_bank
          ),
          sale_bank: get_fixed_sale_bank(ledgerState.fixed_sales_bank),
          fixed_sales: get_open_fixed_token_sales(
            ledgerState.open_fixed_token_sales
          ),
        };
      }
    );
  }

  static joinOrDeployLaunchPadContract = async (
    providers: LaunchPadContractProvider,
    contractAddress?: ContractAddress
  ): Promise<LaunchPadAPI | undefined> => {
    let deployedLaunchPadContract;
    if (!contractAddress) {
      try {
        console.log("deploying a new contract...");

        deployedLaunchPadContract = await deployContract<LaunchPadContract>(
          providers,
          {
            contract: LaunchPadContractInstance,
            initialPrivateState: await LaunchPadAPI.getPrivateState(providers),
            privateStateId: LaunchPadPrivateStateKey,
            args: [randomNonceBytes(32)],
          }
        );
        console.log("Contract deployed succesfully!");
        return new LaunchPadAPI(deployedLaunchPadContract, providers);
      } catch (error) {
        console.log(`error at deploying contracting: ${error}`);
      }
    } else {
      try {
        console.log("Joining a new contract...");

        deployedLaunchPadContract =
          await findDeployedContract<LaunchPadContract>(providers, {
            contractAddress,
            contract: LaunchPadContractInstance,
            privateStateId: LaunchPadPrivateStateKey,
            initialPrivateState: await this.getPrivateState(providers),
          });
        console.log("Contract found successfully");
        console.log("Contract joined succesfully!");
        return new this(deployedLaunchPadContract, providers);
      } catch (error) {
        console.error("Error at joining contract:", error);
        throw error;
      }
    }
  };

  private static async getPrivateState(
    providers: LaunchPadContractProvider
  ): Promise<LaunchPadPrivateState> {
    const existingPrivateState = await providers.privateStateProvider.get(
      LaunchPadPrivateStateKey
    );
    return (
      existingPrivateState ?? createLaunchPadPrivateState(randomNonceBytes(32))
    );
  }

  static getLaunchPadLedgerState = (
    providers: LaunchPadContractProvider,
    contractAddress: ContractAddress
  ): Promise<Ledger | null> =>
    providers.publicDataProvider
      .queryContractState(contractAddress)
      .then((contractState) =>
        contractState != null ? ledger(contractState.data) : null
      );

  static createToken = async (
    deployedContract: DeployedLaunchpadContract,
    name: Uint8Array,
    amount: bigint,
    ticker: string,
    icon: string
  ) => {
    try {
      console.log("creating token...");
      await deployedContract.callTx.create_token(name, amount, ticker, icon);
      console.log("Token created succesfully");
    } catch (error) {
      console.log(`error occured while creating token ${error}`);
    }
  };

  static open_fixed_sale = async (
    amount: bigint,
    color: string,
    acceptable_color: string,
    deployedContract: DeployedLaunchpadContract
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: encodeTokenType(color),
      value: amount,
    };
    try {
      const data = await deployedContract.callTx.open_a_fixed_price_token_sale(
        coin,
        BigInt(1),
        encodeTokenType(acceptable_color)
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  static buy_fixed_token = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: string
  ) => {
    const sale_id = new Uint8Array([
      5, 7, 9, 7, 3, 0, 0, 0, 0, 1, 2, 1, 4, 9, 5, 4, 0, 9, 0, 0, 0, 7, 0, 0, 6,
      7, 9, 7, 5, 0, 0, 0,
    ]);

    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: encodeTokenType(color),
      value: amount,
    };
    try {
      await deployedContract.callTx.buy_token_at_fixed_price(
        coin,
        sale_id,
        amount
      );
    } catch (error) {
      console.log(error);
    }
  };
}

/**
 * LOGICS TO TRANSFER TO THE CONTRACT ADDRESS
 */

export * from "./common-types.js";
export * from "./utils.js";
