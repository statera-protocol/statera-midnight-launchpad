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

export enum SaleStatus {
  live,
  completed,
  closed,
}

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
  fixed_sales: FixedSaleData[];
  user_pk: string;
};

export type FixedSaleData = {
  key_uint: Uint8Array;
  key: string;
  organizer: string;
  total_amount_for_sale: number;
  total_amount_sold: number;
  total_amount_left: number;
  token_sale_ratio: string;
  hard_cap: number;
  acceptable_exchange_token: Uint8Array;
  status: string;
  participants: string;
  start_time: string;
  duration: string;
  token_symbol: string;
  acceptable_token_symbol: string;
  min: number;
  max: number;
  sale_type: string;
  isWithdrawn: boolean;
  time_up: boolean;
};

export type YourOriginalType = {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    organizer: Uint8Array;
    total_amount_for_sale: bigint;
    total_amount_sold: bigint;
    total_amount_left: bigint;
    token_sale_ratio: bigint;
    hard_cap: bigint;
    acceptable_exchange_token: Uint8Array;
    status: number;
    participant: bigint;
    start_time: bigint;
    duration: bigint;
    token_symbol: string;
    acceptable_token_symbol: string;
    min: bigint;
    max: bigint;
    withdrawn: boolean;
    time_up: boolean;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        organizer: Uint8Array;
        total_amount_for_sale: bigint;
        total_amount_sold: bigint;
        total_amount_left: bigint;
        token_sale_ratio: bigint;
        hard_cap: bigint;
        acceptable_exchange_token: Uint8Array;
        status: number;
        participant: bigint;
        start_time: bigint;
        duration: bigint;
        token_symbol: string;
        acceptable_token_symbol: string;
        min: bigint;
        max: bigint;
        withdrawn: boolean;
        time_up: boolean;
      },
    ]
  >;
};

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
