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
  getBatchSales,
  getFixedSales,
  getOverflowSales,
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

        const fixed_sales = getFixedSales(ledgerState.openFixedTokenSales);
        const batch_sales = getBatchSales(ledgerState.openBatchTokenSales);
        const overflow_sales = getOverflowSales(
          ledgerState.openOverflowTokenSales
        );

        return {
          fixed_sales,
          batch_sales,
          overflow_sales,
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
        throw new Error(`${error}`);
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

  static openFixedSale = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: string,
    acceptable_color: string,
    ratio: bigint,
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
      await deployedContract.callTx.openFixedSale(
        coin,
        ratio,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        min,
        max
      );
    } catch (error: any) {
      throw error;
    }
  };

  static openBatchSale = async (
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
      await deployedContract.callTx.openBatchSale(
        coin,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        min,
        max
      );
      console.log("Batch Sale createdd Successfully");
    } catch (error) {
      throw error;
    }
  };

  static openOverflowSale = async (
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
      await deployedContract.callTx.openOverflowSale(
        coin,
        encodeTokenType(acceptable_color),
        BigInt(Date.now()),
        duration,
        target,
        min,
        max
      );
    } catch (error) {
      throw error;
    }
  };

  static contributeToSale = async (
    deployedContract: DeployedLaunchpadContract,
    amount: bigint,
    color: Uint8Array,
    sale_id: Uint8Array,
    sale_type: string
  ) => {
    const coin: CoinInfo = {
      nonce: randomNonceBytes(32),
      color: color,
      value: amount,
    };
    try {
      if (sale_type === "fixed") {
        await deployedContract.callTx.buyFromFixedSale(coin, sale_id, amount);
      } else if (sale_type === "batch") {
        console.log({ coin });
        console.log("Got here");
        await deployedContract.callTx.buyFromBatchSale(coin, sale_id, amount);
      } else if (sale_type === "overflow") {
        await deployedContract.callTx.buyFromOverflowSale(
          coin,
          sale_id,
          amount
        );
      }
    } catch (error) {
      throw error;
    }
  };

  static closeSale = async (
    deployedContract: DeployedLaunchpadContract,
    sale_id: Uint8Array,
    sale_type: string
  ) => {
    try {
      console.log("closing sale...");

      if (sale_type === "fixed") {
        console.log("closing fixed sale");
        await deployedContract.callTx.closeFixedSale(sale_id);
      } else if (sale_type === "batch") {
        console.log("closing batch sale");
        await deployedContract.callTx.closeBatchSale(sale_id);
      } else if (sale_type === "overflow") {
        console.log("closing overflow sale");
        await deployedContract.callTx.closeOverflowSale(sale_id);
      }
      console.log("Sale closed successfully!");
    } catch (error: any) {
      throw error;
    }
  };

  static withdrawFromSale = async (
    deployedContract: DeployedLaunchpadContract,
    sale_type: string,
    sale_id: Uint8Array,
    amount: bigint
  ) => {
    try {
      if (sale_type === "batch") {
        await deployedContract.callTx.withdrawalFromBatchSale(
          sale_id,
          BigInt(amount)
        );
      } else {
        await deployedContract.callTx.withdrawFromOverflowSale(sale_id, amount);
      }
    } catch (error: any) {
      throw error;
    }
  };

  static organizerWithdrawal = async (
    deployedContract: DeployedLaunchpadContract,
    sale_type: string,
    sale_id: Uint8Array
  ) => {
    try {
      if (sale_type === "fixed") {
        await deployedContract.callTx.organizerWIthdrawalFromFixedSale(sale_id);
      } else if (sale_type === "batch") {
        await deployedContract.callTx.organizerWIthdrawalFromBatchSale(sale_id);
      } else {
        await deployedContract.callTx.organizerWIthdrawalFromOverflowSale(
          sale_id
        );
      }
    } catch (error: any) {
      throw error;
    }
  };
}

/**
 * LOGICS TO TRANSFER TO THE CONTRACT ADDRESS
 */

export * from "./common-types.js";
export * from "./utils.js";
