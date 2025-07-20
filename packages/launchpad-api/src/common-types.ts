import { Contract, LaunchPadPrivateState } from "@repo/launchpad-contract";
import {
  type ImpureCircuitId,
  MidnightProviders,
} from "@midnight-ntwrk/midnight-js-types";
import {
  DeployedContract,
  FoundContract,
} from "@midnight-ntwrk/midnight-js-contracts";

export const LaunchPadPrivateStateKey: string = "LaunchpadPrivateState";

export type LaunchPadContract = Contract<LaunchPadPrivateState>;

export type LaunchPadCircuits = ImpureCircuitId<
  Contract<LaunchPadPrivateState>
>;

export declare const toHex: (bytes: Uint8Array) => string;

export type LaunchPadCircuitKeys = Exclude<
  keyof LaunchPadContract["impureCircuits"],
  number | symbol
>;

export type LaunchPadContractProvider = MidnightProviders<
  LaunchPadCircuits,
  typeof LaunchPadPrivateStateKey,
  LaunchPadPrivateState
>;

type tokenType = {
  minter: Uint8Array<ArrayBufferLike>;
  amount: bigint;
  domainSepName: Uint8Array;
  ticker: string;
};

type tokensType = [
  Uint8Array<ArrayBufferLike>,
  {
    minter: Uint8Array;
    amount: bigint;
    domainSepName: Uint8Array;
    ticker: string;
  },
][];

export type DeployedLaunchpadContract =
  | DeployedContract<LaunchPadContract>
  | FoundContract<LaunchPadContract>;

export type derivedLedgerState = {
  mintedTokenAmount: number;
  isMember: (sep: Uint8Array) => boolean;
  getToken: (tokenSep: Uint8Array) => tokenType | string;
  getTokens: () => tokensType;
};
