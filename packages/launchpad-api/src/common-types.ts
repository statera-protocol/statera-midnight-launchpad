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

export type DerivedState = {
  fixed_sales: FixedSaleData[];
  batch_sales: BatchSaleData[];
  overflow_sales: OverflowSaleData[];
  user_pk: string;
};

export type FixedSaleData = {
  keyUint: Uint8Array;
  key: string;
  organizer: string;
  totalAmountForSale: number;
  totalAmountSold: number;
  totalAmountLeft: number;
  tokenSaleRatio: string;
  acceptableExchangeToken: Uint8Array;
  status: string;
  participants: string;
  startTime: string;
  duration: string;
  min: number;
  max: number;
  saleType: string;
  isWithdrawn: boolean;
  timeUp: boolean;
};

export type BatchSaleData = {
  keyUint: Uint8Array;
  key: string;
  organizer: string;
  totalAmountForSale: number;
  contribution: number;
  acceptableExchangeToken: Uint8Array;
  status: string;
  participants: string;
  startTime: string;
  duration: string;
  min: number;
  max: number;
  saleType: string;
  isWithdrawn: boolean;
  timeUp: boolean;
};

export type OverflowSaleData = {
  keyUint: Uint8Array;
  key: string;
  organizer: string;
  totalAmountForSale: number;
  contribution: number;
  acceptableExchangeToken: Uint8Array;
  target: number;
  status: string;
  participants: string;
  startTime: string;
  duration: string;
  min: number;
  max: number;
  saleType: string;
  isWithdrawn: boolean;
  timeUp: boolean;
};

export type FixedTokenSaleType = {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    organizer: Uint8Array;
    totalAmountForSale: bigint;
    totalAmountSold: bigint;
    totalAmountLeft: bigint;
    tokenSaleRatio: bigint;
    acceptableExchangeToken: Uint8Array;
    status: number;
    participant: bigint;
    startTime: bigint;
    duration: bigint;
    min: bigint;
    max: bigint;
    withdrawn: boolean;
    timeUp: boolean;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        organizer: Uint8Array;
        totalAmountForSale: bigint;
        totalAmountSold: bigint;
        totalAmountLeft: bigint;
        tokenSaleRatio: bigint;
        acceptableExchangeToken: Uint8Array;
        status: number;
        participant: bigint;
        startTime: bigint;
        duration: bigint;
        min: bigint;
        max: bigint;
        withdrawn: boolean;
        timeUp: boolean;
      },
    ]
  >;
};

export type BatchTokenSaleType = {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    organizer: Uint8Array;
    totalAmountForSale: bigint;
    contribution: bigint;
    acceptableExchangeToken: Uint8Array;
    status: number;
    participant: bigint;
    startTime: bigint;
    duration: bigint;
    withdrawn: boolean;
    timeUp: boolean;
    min: bigint;
    max: bigint;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        organizer: Uint8Array;
        totalAmountForSale: bigint;
        contribution: bigint;
        acceptableExchangeToken: Uint8Array;
        status: number;
        participant: bigint;
        startTime: bigint;
        duration: bigint;
        withdrawn: boolean;
        timeUp: boolean;
        min: bigint;
        max: bigint;
      },
    ]
  >;
};

export type OverflowTokenSaleType = {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    organizer: Uint8Array;
    totalAmountForSale: bigint;
    contribution: bigint;
    acceptableExchangeToken: Uint8Array;
    target: bigint;
    status: number;
    participant: bigint;
    startTime: bigint;
    duration: bigint;
    withdrawn: boolean;
    timeUp: boolean;
    min: bigint;
    max: bigint;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        organizer: Uint8Array;
        totalAmountForSale: bigint;
        contribution: bigint;
        acceptableExchangeToken: Uint8Array;
        target: bigint;
        status: number;
        participant: bigint;
        startTime: bigint;
        duration: bigint;
        withdrawn: boolean;
        timeUp: boolean;
        min: bigint;
        max: bigint;
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
