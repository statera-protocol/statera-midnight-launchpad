import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  generate_sale_id(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  calculate_amount_to_buy(context: __compactRuntime.WitnessContext<Ledger, T>,
                          received_amount_0: bigint,
                          sale_ratio_0: bigint): [T, bigint];
  calculate_time(context: __compactRuntime.WitnessContext<Ledger, T>,
                 start_time_0: Uint8Array,
                 duration_0: bigint): [T, boolean];
}

export type ImpureCircuits<T> = {
  create_token(context: __compactRuntime.CircuitContext<T>,
               token_name_0: Uint8Array,
               total_amount_0: bigint,
               token_ticker_0: string,
               token_icon_0: string): __compactRuntime.CircuitResults<T, []>;
  open_a_fixed_price_token_sale(context: __compactRuntime.CircuitContext<T>,
                                coin_0: CoinInfo,
                                sale_ratio_0: bigint,
                                acceptable_exchange_token_0: Uint8Array,
                                time_0: Uint8Array,
                                duration_0: bigint,
                                title_0: string,
                                desc_0: string,
                                logo_0: string,
                                banner_0: string,
                                token_name_0: string,
                                symbol_0: string,
                                min_0: bigint,
                                max_0: bigint): __compactRuntime.CircuitResults<T, []>;
  buy_token_at_fixed_price(context: __compactRuntime.CircuitContext<T>,
                           coin_0: CoinInfo,
                           sale_id_0: Uint8Array,
                           sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  closeSale(context: __compactRuntime.CircuitContext<T>, sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  public_key(sk_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  create_token(context: __compactRuntime.CircuitContext<T>,
               token_name_0: Uint8Array,
               total_amount_0: bigint,
               token_ticker_0: string,
               token_icon_0: string): __compactRuntime.CircuitResults<T, []>;
  open_a_fixed_price_token_sale(context: __compactRuntime.CircuitContext<T>,
                                coin_0: CoinInfo,
                                sale_ratio_0: bigint,
                                acceptable_exchange_token_0: Uint8Array,
                                time_0: Uint8Array,
                                duration_0: bigint,
                                title_0: string,
                                desc_0: string,
                                logo_0: string,
                                banner_0: string,
                                token_name_0: string,
                                symbol_0: string,
                                min_0: bigint,
                                max_0: bigint): __compactRuntime.CircuitResults<T, []>;
  buy_token_at_fixed_price(context: __compactRuntime.CircuitContext<T>,
                           coin_0: CoinInfo,
                           sale_id_0: Uint8Array,
                           sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  closeSale(context: __compactRuntime.CircuitContext<T>, sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  public_key(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly unique_index: bigint;
  readonly nonce: Uint8Array;
  open_fixed_token_sales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { organizer: Uint8Array,
                                 total_amount_for_sale: bigint,
                                 total_amount_sold: bigint,
                                 total_amount_left: bigint,
                                 token_sale_ratio: bigint,
                                 acceptable_exchange_token: Uint8Array,
                                 status: number,
                                 participant: bigint,
                                 start_time: Uint8Array,
                                 duration: bigint,
                                 time_up: boolean,
                                 title: string,
                                 desc: string,
                                 project_logo: string,
                                 project_banner: string,
                                 token_name: string,
                                 token_symbol: string,
                                 min: bigint,
                                 max: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { organizer: Uint8Array,
  total_amount_for_sale: bigint,
  total_amount_sold: bigint,
  total_amount_left: bigint,
  token_sale_ratio: bigint,
  acceptable_exchange_token: Uint8Array,
  status: number,
  participant: bigint,
  start_time: Uint8Array,
  duration: bigint,
  time_up: boolean,
  title: string,
  desc: string,
  project_logo: string,
  project_banner: string,
  token_name: string,
  token_symbol: string,
  min: bigint,
  max: bigint
}]>
  };
  fixed_sales_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { nonce: Uint8Array,
                                 color: Uint8Array,
                                 value: bigint,
                                 mt_index: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { nonce: Uint8Array, color: Uint8Array, value: bigint, mt_index: bigint }]>
  };
  fixed_sales_received_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { nonce: Uint8Array,
                                 color: Uint8Array,
                                 value: bigint,
                                 mt_index: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { nonce: Uint8Array, color: Uint8Array, value: bigint, mt_index: bigint }]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               initialNonce_0: Uint8Array): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
