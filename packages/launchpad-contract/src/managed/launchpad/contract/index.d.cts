import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  generate_sale_id(context: __compactRuntime.WitnessContext<Ledger, T>): [T, bigint];
  calculate_amount_to_buy(context: __compactRuntime.WitnessContext<Ledger, T>,
                          received_amount_0: bigint,
                          sale_ratio_0: bigint): [T, bigint];
}

export type ImpureCircuits<T> = {
  create_token(context: __compactRuntime.CircuitContext<T>,
               token_name_0: Uint8Array,
               total_amount_0: bigint,
               token_ticker_0: string,
               token_icon_0: string): __compactRuntime.CircuitResults<T, []>;
  open_a_fixed_price_token_sale(context: __compactRuntime.CircuitContext<T>,
                                coin_0: { nonce: Uint8Array,
                                          color: Uint8Array,
                                          value: bigint
                                        },
                                sale_ratio_0: bigint,
                                acceptable_exchange_token_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  buy_token_at_fixed_price(context: __compactRuntime.CircuitContext<T>,
                           coin_0: { nonce: Uint8Array,
                                     color: Uint8Array,
                                     value: bigint
                                   },
                           sale_id_0: bigint,
                           sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
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
                                coin_0: { nonce: Uint8Array,
                                          color: Uint8Array,
                                          value: bigint
                                        },
                                sale_ratio_0: bigint,
                                acceptable_exchange_token_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  buy_token_at_fixed_price(context: __compactRuntime.CircuitContext<T>,
                           coin_0: { nonce: Uint8Array,
                                     color: Uint8Array,
                                     value: bigint
                                   },
                           sale_id_0: bigint,
                           sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  public_key(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly unique_index: bigint;
  readonly nonce: Uint8Array;
  open_fixed_token_sales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { organizer: Uint8Array,
                             total_amount_for_sale: bigint,
                             total_amount_sold: bigint,
                             total_amount_left: bigint,
                             token_sale_ratio: bigint,
                             acceptable_exchange_token: Uint8Array
                           };
    [Symbol.iterator](): Iterator<[bigint, { organizer: Uint8Array,
  total_amount_for_sale: bigint,
  total_amount_sold: bigint,
  total_amount_left: bigint,
  token_sale_ratio: bigint,
  acceptable_exchange_token: Uint8Array
}]>
  };
  fixed_sales_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { nonce: Uint8Array,
                             color: Uint8Array,
                             value: bigint,
                             mt_index: bigint
                           };
    [Symbol.iterator](): Iterator<[bigint, { nonce: Uint8Array, color: Uint8Array, value: bigint, mt_index: bigint }]>
  };
  fixed_sales_received_bank: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { nonce: Uint8Array,
                             color: Uint8Array,
                             value: bigint,
                             mt_index: bigint
                           };
    [Symbol.iterator](): Iterator<[bigint, { nonce: Uint8Array, color: Uint8Array, value: bigint, mt_index: bigint }]>
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
