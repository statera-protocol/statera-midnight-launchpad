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
  DerivedState,
  LaunchPadContract,
  LaunchPadContractProvider,
  LaunchPadPrivateStateKey,
} from "./common-types.js";
import { toHex } from "@midnight-ntwrk/midnight-js-utils";
import { ContractAddress } from "@midnight-ntwrk/compact-runtime";
import { combineLatest, from, map, Observable } from "rxjs";
import {
  deployContract,
  findDeployedContract,
} from "@midnight-ntwrk/midnight-js-contracts";
import {
  get_sales_bank,
  get_received_bank,
  get_fixed_sales,
  get_batch_sales,
  get_overflow_sales,
  randomNonceBytes,
} from "./utils.js";
import { encodeTokenType } from "@midnight-ntwrk/ledger";

const LaunchPadContractInstance: LaunchPadContract = new Contract(witnesses);

export class LaunchPadAPI {
  public readonly deployedContractAddress: ContractAddress;
  readonly state$: Observable<DerivedState>;

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
        const user_pk = pureCircuits.public_key(privateState.secretKey);

        return {
          receival_bank: get_received_bank(ledgerState.received_bank),
          sale_bank: get_sales_bank(ledgerState.sales_bank),
          fixed_sales: get_fixed_sales(ledgerState.open_fixed_token_sales),
          batch_sales: get_batch_sales(ledgerState.open_batch_token_sales),
          overflow_sales: get_overflow_sales(
            ledgerState.open_overflow_token_sales
          ),
          user_pk: toHex(user_pk),
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
        throw new Error(`error at deploying contracting: ${error}`);
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
      } catch (error: any) {
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
    } catch (error: any) {
      throw error;
    }
  };

  static open_fixed_sale = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: string,
    acceptable_color: string,
    ratio: bigint,
    duration: bigint,
    min: bigint,
    max: bigint,
    hardCap: bigint
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: encodeTokenType(color),
      value: amount,
    };
    try {
      await deployedContract.callTx.open_fixed_sale(
        coin,
        ratio,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        min,
        max,
        hardCap
      );
    } catch (error: any) {
      throw error;
    }
  };

  static open_batch_sale = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: string,
    acceptable_color: string,
    duration: bigint,
    min: bigint,
    max: bigint
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: encodeTokenType(color),
      value: amount,
    };
    try {
      deployedContract.callTx.open_batch_sale(
        coin,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        min,
        max
      );
    } catch (error) {}
  };

  static open_overflow_sale = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: string,
    acceptable_color: string,
    duration: bigint,
    min: bigint,
    max: bigint,
    target: bigint
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: encodeTokenType(color),
      value: amount,
    };
    try {
      deployedContract.callTx.open_overflow_sale(
        coin,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        target,
        min,
        max
      );
    } catch (error) {}
  };

  static buy_fixed_token = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: Uint8Array,
    sale_id: Uint8Array
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: color,
      value: amount,
    };

    console.log(coin);

    try {
      await deployedContract.callTx.buy_from_fixed_price(coin, sale_id, amount);
    } catch (error: any) {
      throw error;
    }
  };

  static buy_token = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: Uint8Array,
    sale_id: Uint8Array,
    sale_type: string
  ) => {
    try {
      const coin: CoinInfo = {
        nonce: randomNonceBytes(32),
        color: color,
        value: amount,
      };

      if (sale_type === "fixed") {
        await deployedContract.callTx.buy_from_fixed_price(
          coin,
          sale_id,
          amount
        );
      } else if (sale_type === "batch") {
        await deployedContract.callTx.buy_from_batch_sale(
          coin,
          sale_id,
          amount
        );
      } else if (sale_type === "overflow") {
        await deployedContract.callTx.buy_from_overflow_sale(coin, sale_id);
      }
    } catch (error) {
      throw error;
    }
  };

  // static close_fixed_sale = async (
  //   deployedContract: DeployedLaunchpadContract,
  //   sale_id: Uint8Array
  // ) => {
  //   try {
  //     console.log("closing sale...");
  //     await deployedContract.callTx.closeSale(sale_id, 1n);
  //     console.log("Sale closed successfully!");
  //   } catch (error: any) {
  //     throw error;
  //   }
  // };

  // static withdraw_funds = async (
  //   deployedContract: DeployedLaunchpadContract,
  //   sale_id: Uint8Array
  // ) => {
  //   try {
  //     await deployedContract.callTx.withdraw_token(sale_id);
  //   } catch (error: any) {
  //     throw error;
  //   }
  // };
}

/**
 * LOGICS TO TRANSFER TO THE CONTRACT ADDRESS
 */

export * from "./common-types.js";
export * from "./utils.js";
