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

export type derivedState = {
  tokens: tokenListArray;
  bank: tokenBankArray;
};

export type tokenListArray = Array<
  [
    string,
    {
      minter: string;
      amount: number;
      domainSepName: string;
      ticker: string;
    },
  ]
>;

export type tokenBankArray = Array<{
  nonce: Uint8Array;
  color: Uint8Array;
  value: number;
  mt_index: number;
}>;
