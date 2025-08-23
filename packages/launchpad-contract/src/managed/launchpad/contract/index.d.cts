import type * as __compactRuntime from "@midnight-ntwrk/compact-runtime";

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type Witnesses<T> = {
  local_secret_key(
    context: __compactRuntime.WitnessContext<Ledger, T>
  ): [T, Uint8Array];
  generate_sale_id(
    context: __compactRuntime.WitnessContext<Ledger, T>
  ): [T, Uint8Array];
  calculate_amount_to_buy(
    context: __compactRuntime.WitnessContext<Ledger, T>,
    received_amount_0: bigint,
    sale_ratio_0: bigint
  ): [T, bigint];
  calculate_time(
    context: __compactRuntime.WitnessContext<Ledger, T>,
    start_time_0: bigint,
    duration_0: bigint
  ): [T, boolean];
  encodeBuyerHash(
    context: __compactRuntime.WitnessContext<Ledger, T>,
    pk_0: Uint8Array,
    withdrawal_state_0: boolean,
    amount_0: bigint
  ): [T, Uint8Array];
  decodeBuyerHash(
    context: __compactRuntime.WitnessContext<Ledger, T>,
    encrypt_0: Uint8Array,
    totalReceived_0: bigint,
    totalForSale_0: bigint
  ): [T, bigint];
  decodeBuyerHashOverflow(
    context: __compactRuntime.WitnessContext<Ledger, T>,
    encrypt_0: Uint8Array,
    totalReceived_0: bigint,
    totalForSale_0: bigint,
    targetAmount_0: bigint,
    returnType_0: Uint8Array
  ): [T, bigint];
};

export type ImpureCircuits<T> = {
  create_token(
    context: __compactRuntime.CircuitContext<T>,
    token_name_0: Uint8Array,
    total_amount_0: bigint,
    token_ticker_0: string,
    token_icon_0: string
  ): __compactRuntime.CircuitResults<T, []>;
  open_fixed_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_ratio_0: bigint,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    min_0: bigint,
    max_0: bigint,
    token_hard_cap_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_fixed_price(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array,
    sale_amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  open_batch_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    min_0: bigint,
    max_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_batch_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  open_overflow_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    target_0: bigint,
    min_0: bigint,
    max_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_overflow_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array
  ): __compactRuntime.CircuitResults<T, []>;
  withdrawal_from_batch(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  withdraw_from_overflow(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  closeSale(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    sale_type_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  organizers_withdrawal(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array
  ): __compactRuntime.CircuitResults<T, []>;
};

export type PureCircuits = {
  public_key(sk_0: Uint8Array): Uint8Array;
};

export type Circuits<T> = {
  create_token(
    context: __compactRuntime.CircuitContext<T>,
    token_name_0: Uint8Array,
    total_amount_0: bigint,
    token_ticker_0: string,
    token_icon_0: string
  ): __compactRuntime.CircuitResults<T, []>;
  open_fixed_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_ratio_0: bigint,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    min_0: bigint,
    max_0: bigint,
    token_hard_cap_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_fixed_price(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array,
    sale_amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  open_batch_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    min_0: bigint,
    max_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_batch_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  open_overflow_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    acceptable_exchange_token_0: Uint8Array,
    creation_time_0: bigint,
    sale_duration_0: bigint,
    target_0: bigint,
    min_0: bigint,
    max_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  buy_from_overflow_sale(
    context: __compactRuntime.CircuitContext<T>,
    coin_0: CoinInfo,
    sale_id_0: Uint8Array
  ): __compactRuntime.CircuitResults<T, []>;
  withdrawal_from_batch(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  withdraw_from_overflow(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    amount_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  closeSale(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array,
    sale_type_0: bigint
  ): __compactRuntime.CircuitResults<T, []>;
  organizers_withdrawal(
    context: __compactRuntime.CircuitContext<T>,
    sale_id_0: Uint8Array
  ): __compactRuntime.CircuitResults<T, []>;
  public_key(
    context: __compactRuntime.CircuitContext<T>,
    sk_0: Uint8Array
  ): __compactRuntime.CircuitResults<T, Uint8Array>;
};

export type Ledger = {
  readonly unique_index: bigint;
  readonly nonce: Uint8Array;
  sales_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      nonce: Uint8Array;
      color: Uint8Array;
      value: bigint;
      mt_index: bigint;
    };
    [Symbol.iterator](): Iterator<
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
  };
  received_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      nonce: Uint8Array;
      color: Uint8Array;
      value: bigint;
      mt_index: bigint;
    };
    [Symbol.iterator](): Iterator<
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
  };
  open_fixed_token_sales: {
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
          min: bigint;
          max: bigint;
          withdrawn: boolean;
          time_up: boolean;
        },
      ]
    >;
  };
  open_batch_token_sales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      organizer: Uint8Array;
      total_amount_for_sale: bigint;
      contribution: bigint;
      acceptable_exchange_token: Uint8Array;
      status: number;
      participant: bigint;
      start_time: bigint;
      duration: bigint;
      withdrawn: boolean;
      time_up: boolean;
      min: bigint;
      max: bigint;
    };
    [Symbol.iterator](): Iterator<
      [
        Uint8Array,
        {
          organizer: Uint8Array;
          total_amount_for_sale: bigint;
          contribution: bigint;
          acceptable_exchange_token: Uint8Array;
          status: number;
          participant: bigint;
          start_time: bigint;
          duration: bigint;
          withdrawn: boolean;
          time_up: boolean;
          min: bigint;
          max: bigint;
        },
      ]
    >;
  };
  open_overflow_token_sales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      organizer: Uint8Array;
      total_amount_for_sale: bigint;
      contribution: bigint;
      acceptable_exchange_token: Uint8Array;
      target: bigint;
      status: number;
      participant: bigint;
      start_time: bigint;
      duration: bigint;
      withdrawn: boolean;
      time_up: boolean;
      min: bigint;
      max: bigint;
    };
    [Symbol.iterator](): Iterator<
      [
        Uint8Array,
        {
          organizer: Uint8Array;
          total_amount_for_sale: bigint;
          contribution: bigint;
          acceptable_exchange_token: Uint8Array;
          target: bigint;
          status: number;
          participant: bigint;
          start_time: bigint;
          duration: bigint;
          withdrawn: boolean;
          time_up: boolean;
          min: bigint;
          max: bigint;
        },
      ]
    >;
  };
  batch_contributors: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      isEmpty(): boolean;
      size(): bigint;
      member(elem_0: Uint8Array): boolean;
      [Symbol.iterator](): Iterator<Uint8Array>;
    };
  };
  overflow_contributors: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): {
      isEmpty(): boolean;
      size(): bigint;
      member(elem_0: Uint8Array): boolean;
      [Symbol.iterator](): Iterator<Uint8Array>;
    };
  };
};

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations: ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(
    context: __compactRuntime.ConstructorContext<T>,
    initialNonce_0: Uint8Array
  ): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
