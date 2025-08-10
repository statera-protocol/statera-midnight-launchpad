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

export type DeployedLaunchpadContract =
  | DeployedContract<LaunchPadContract>
  | FoundContract<LaunchPadContract>;

export type derivedState = {
  receival_bank: sale_bank_type;
  sale_bank: sale_bank_type;
  fixed_sales: open_sales_type;
};

export type open_sales_type = Array<[Uint8Array, (BigInt | Uint8Array)[]]>;

export type sale_bank_type = Array<
  [
    Uint8Array,
    {
      nonce: Uint8Array;
      color: Uint8Array;
      value: bigint;
      mt_index: bigint;
    },
  ]
>;
