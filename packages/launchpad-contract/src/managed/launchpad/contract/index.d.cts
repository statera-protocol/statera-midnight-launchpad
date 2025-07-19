import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  convertOpaqueToBytes(context: __compactRuntime.WitnessContext<Ledger, T>,
                       name_0: string): [T, Uint8Array];
}

export type ImpureCircuits<T> = {
  mintYourToken(context: __compactRuntime.CircuitContext<T>,
                _name_0: string,
                _amount_0: bigint,
                _ticker_0: string): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  public_key(sk_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  mintYourToken(context: __compactRuntime.CircuitContext<T>,
                _name_0: string,
                _amount_0: bigint,
                _ticker_0: string): __compactRuntime.CircuitResults<T, []>;
  public_key(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly uniqueIndex: bigint;
  readonly prevNonce: Uint8Array;
  tokens: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { minter: Uint8Array,
                                 amount: bigint,
                                 domainSepName: Uint8Array,
                                 ticker: string
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { minter: Uint8Array, amount: bigint, domainSepName: Uint8Array, ticker: string
}]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
