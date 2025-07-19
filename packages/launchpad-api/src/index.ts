import {
  createLaunchPadPrivateState,
  LaunchPadPrivateState,
  witnesses,
} from "@repo/launchpad-contract";
import {
  Contract,
  ledger,
  Ledger,
  pureCircuits,
} from "@repo/launchpad-contract";
import {
  DeployedLaunchpadContract,
  derivedLedgerState,
  LaunchPadContract,
  LaunchPadContractProvider,
  LaunchPadPrivateStateKey,
} from "./common-types.js";
import { ContractAddress } from "@midnight-ntwrk/compact-runtime";
import { combineLatest, from, map, Observable } from "rxjs";
import {
  deployContract,
  findDeployedContract,
} from "@midnight-ntwrk/midnight-js-contracts";
import { generateRandomBytes32, refinedStates } from "./utils.js";

const LaunchPadContractInstance: LaunchPadContract = new Contract(witnesses);

export class LaunchPadAPI {
  public readonly deployedContractAddress: ContractAddress;
  readonly state$: Observable<derivedLedgerState>;

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
        const hashedPublicKey = pureCircuits.public_key(privateState.secretKey);
        return {
          mintedTokenAmount: refinedStates(ledgerState.tokens)
            .mintedTokenAmount,
          isMember: refinedStates(ledgerState.tokens).isMember,
          getToken: refinedStates(ledgerState.tokens).getToken,
          getTokens: refinedStates(ledgerState.tokens).getTokens,
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
            initialPrivateState: await LaunchPadAPI.getPrivateState(providers),
          });
        console.log("Contract found successfully");
        console.log("Contract joined succesfully!");
        return new LaunchPadAPI(deployedLaunchPadContract, providers);
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
      existingPrivateState ??
      createLaunchPadPrivateState(generateRandomBytes32())
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

  static createToken = (
    deployedContract: DeployedLaunchpadContract,
    name: string,
    amount: number,
    ticker: string
  ) => {
    try {
      console.log("creating token...");
      deployedContract.callTx.mintYourToken(name, BigInt(amount), ticker);
      console.log("Token created succesfully");
    } catch (error) {
      console.log(`error occured while creating token ${error}`);
    }
  };
}

/**
 * LOGICS TO TRANSFER TO THE CONTRACT ADDRESS
 */

export * from "./common-types.js";
export * from "./utils.js";
