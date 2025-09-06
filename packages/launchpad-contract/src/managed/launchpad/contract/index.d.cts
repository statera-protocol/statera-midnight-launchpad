import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type OracleKycToken = { tokenData: KYCTokenData;
                               oracleSignature: Uint8Array
                             };

export type ValidityRange = { duration: bigint; creationDate: bigint };

export type KYCTokenData = { did: Uint8Array;
                             userPk: Uint8Array;
                             oraclePk: Uint8Array;
                             validityRange: ValidityRange
                           };

export type Witnesses<T> = {
  local_secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  generate_sale_id(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  calculate_amount_to_buy(context: __compactRuntime.WitnessContext<Ledger, T>,
                          received_amount_0: bigint,
                          sale_ratio_0: bigint): [T, bigint];
  calculate_time(context: __compactRuntime.WitnessContext<Ledger, T>,
                 startTime_0: bigint,
                 duration_0: bigint): [T, boolean];
  confirmContribution(context: __compactRuntime.WitnessContext<Ledger, T>,
                      buyerCommitment_0: Uint8Array): [T, { leaf: Uint8Array,
                                                            path: { sibling: { field: bigint
                                                                             },
                                                                    goes_left: boolean
                                                                  }[]
                                                          }];
  calcAmountToWtihdrawFromBatch(context: __compactRuntime.WitnessContext<Ledger, T>,
                                amountContributed_0: bigint,
                                totalReceived_0: bigint,
                                totalForSale_0: bigint): [T, bigint];
  calcAmountToWtihdrawFromOverflow(context: __compactRuntime.WitnessContext<Ledger, T>,
                                   amount_0: bigint,
                                   totalReceived_0: bigint,
                                   totalForSale_0: bigint,
                                   targetAmount_0: bigint): [T, bigint];
  calcAmountToRefundFromOverflow(context: __compactRuntime.WitnessContext<Ledger, T>,
                                 amount_0: bigint,
                                 totalReceived_0: bigint,
                                 totalForSale_0: bigint,
                                 targetAmount_0: bigint): [T, bigint];
  calculateLeftover(context: __compactRuntime.WitnessContext<Ledger, T>,
                    totalReceived_0: bigint,
                    totalForSale_0: bigint,
                    targetAmount_0: bigint): [T, bigint];
}

export type ImpureCircuits<T> = {
  create_token(context: __compactRuntime.CircuitContext<T>,
               token_name_0: Uint8Array,
               total_amount_0: bigint,
               token_ticker_0: string,
               token_icon_0: string,
               kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  openFixedSale(context: __compactRuntime.CircuitContext<T>,
                coin_0: CoinInfo,
                sale_ratio_0: bigint,
                acceptableExchangeToken_0: Uint8Array,
                creation_time_0: bigint,
                sale_duration_0: bigint,
                min_0: bigint,
                max_0: bigint,
                project_name_0: string,
                token_symbol_0: string,
                acceptable_token_symbol_0: string,
                kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromFixedSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   sale_id_0: Uint8Array,
                   sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  openBatchSale(context: __compactRuntime.CircuitContext<T>,
                coin_0: CoinInfo,
                acceptableExchangeToken_0: Uint8Array,
                creation_time_0: bigint,
                sale_duration_0: bigint,
                min_0: bigint,
                max_0: bigint,
                project_name_0: string,
                token_symbol_0: string,
                acceptable_token_symbol_0: string,
                kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   sale_id_0: Uint8Array,
                   amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  openOverflowSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   acceptableExchangeToken_0: Uint8Array,
                   creation_time_0: bigint,
                   sale_duration_0: bigint,
                   target_0: bigint,
                   min_0: bigint,
                   max_0: bigint,
                   project_name_0: string,
                   token_symbol_0: string,
                   acceptable_token_symbol_0: string,
                   kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                      coin_0: CoinInfo,
                      sale_id_0: Uint8Array,
                      amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  withdrawalFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                          sale_id_0: Uint8Array,
                          amountContributed_0: bigint): __compactRuntime.CircuitResults<T, []>;
  withdrawFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                           sale_id_0: Uint8Array,
                           amountContributed_0: bigint): __compactRuntime.CircuitResults<T, []>;
  closeFixedSale(context: __compactRuntime.CircuitContext<T>,
                 sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  closeBatchSale(context: __compactRuntime.CircuitContext<T>,
                 sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  closeOverflowSale(context: __compactRuntime.CircuitContext<T>,
                    sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromFixedSale(context: __compactRuntime.CircuitContext<T>,
                                   sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                                   sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                                      sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  addNewKycedMember(context: __compactRuntime.CircuitContext<T>,
                    oracle_public_key_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  removeNewKycedMember(context: __compactRuntime.CircuitContext<T>,
                       oracle_public_key_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  public_key(sk_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  create_token(context: __compactRuntime.CircuitContext<T>,
               token_name_0: Uint8Array,
               total_amount_0: bigint,
               token_ticker_0: string,
               token_icon_0: string,
               kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  openFixedSale(context: __compactRuntime.CircuitContext<T>,
                coin_0: CoinInfo,
                sale_ratio_0: bigint,
                acceptableExchangeToken_0: Uint8Array,
                creation_time_0: bigint,
                sale_duration_0: bigint,
                min_0: bigint,
                max_0: bigint,
                project_name_0: string,
                token_symbol_0: string,
                acceptable_token_symbol_0: string,
                kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromFixedSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   sale_id_0: Uint8Array,
                   sale_amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  openBatchSale(context: __compactRuntime.CircuitContext<T>,
                coin_0: CoinInfo,
                acceptableExchangeToken_0: Uint8Array,
                creation_time_0: bigint,
                sale_duration_0: bigint,
                min_0: bigint,
                max_0: bigint,
                project_name_0: string,
                token_symbol_0: string,
                acceptable_token_symbol_0: string,
                kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   sale_id_0: Uint8Array,
                   amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  openOverflowSale(context: __compactRuntime.CircuitContext<T>,
                   coin_0: CoinInfo,
                   acceptableExchangeToken_0: Uint8Array,
                   creation_time_0: bigint,
                   sale_duration_0: bigint,
                   target_0: bigint,
                   min_0: bigint,
                   max_0: bigint,
                   project_name_0: string,
                   token_symbol_0: string,
                   acceptable_token_symbol_0: string,
                   kyc_token_0: OracleKycToken): __compactRuntime.CircuitResults<T, []>;
  buyFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                      coin_0: CoinInfo,
                      sale_id_0: Uint8Array,
                      amount_0: bigint): __compactRuntime.CircuitResults<T, []>;
  withdrawalFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                          sale_id_0: Uint8Array,
                          amountContributed_0: bigint): __compactRuntime.CircuitResults<T, []>;
  withdrawFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                           sale_id_0: Uint8Array,
                           amountContributed_0: bigint): __compactRuntime.CircuitResults<T, []>;
  closeFixedSale(context: __compactRuntime.CircuitContext<T>,
                 sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  closeBatchSale(context: __compactRuntime.CircuitContext<T>,
                 sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  closeOverflowSale(context: __compactRuntime.CircuitContext<T>,
                    sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromFixedSale(context: __compactRuntime.CircuitContext<T>,
                                   sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromBatchSale(context: __compactRuntime.CircuitContext<T>,
                                   sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  organizerWIthdrawalFromOverflowSale(context: __compactRuntime.CircuitContext<T>,
                                      sale_id_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  addNewKycedMember(context: __compactRuntime.CircuitContext<T>,
                    oracle_public_key_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  removeNewKycedMember(context: __compactRuntime.CircuitContext<T>,
                       oracle_public_key_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  public_key(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly unique_index: bigint;
  readonly nonce: Uint8Array;
  saleBank: {
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
  receivedBank: {
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
  openFixedTokenSales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { projectName: string,
                                 tokenSymbol: string,
                                 acceptableTokenSymbol: string,
                                 organizer: Uint8Array,
                                 totalAmountForSale: bigint,
                                 totalAmountSold: bigint,
                                 totalAmountLeft: bigint,
                                 tokenSaleRatio: bigint,
                                 acceptableExchangeToken: Uint8Array,
                                 status: number,
                                 participant: bigint,
                                 startTime: bigint,
                                 duration: bigint,
                                 min: bigint,
                                 max: bigint,
                                 withdrawn: boolean,
                                 timeUp: boolean
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { projectName: string,
  tokenSymbol: string,
  acceptableTokenSymbol: string,
  organizer: Uint8Array,
  totalAmountForSale: bigint,
  totalAmountSold: bigint,
  totalAmountLeft: bigint,
  tokenSaleRatio: bigint,
  acceptableExchangeToken: Uint8Array,
  status: number,
  participant: bigint,
  startTime: bigint,
  duration: bigint,
  min: bigint,
  max: bigint,
  withdrawn: boolean,
  timeUp: boolean
}]>
  };
  openBatchTokenSales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { projectName: string,
                                 tokenSymbol: string,
                                 acceptableTokenSymbol: string,
                                 organizer: Uint8Array,
                                 totalAmountForSale: bigint,
                                 contribution: bigint,
                                 acceptableExchangeToken: Uint8Array,
                                 status: number,
                                 participant: bigint,
                                 startTime: bigint,
                                 duration: bigint,
                                 withdrawn: boolean,
                                 timeUp: boolean,
                                 min: bigint,
                                 max: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { projectName: string,
  tokenSymbol: string,
  acceptableTokenSymbol: string,
  organizer: Uint8Array,
  totalAmountForSale: bigint,
  contribution: bigint,
  acceptableExchangeToken: Uint8Array,
  status: number,
  participant: bigint,
  startTime: bigint,
  duration: bigint,
  withdrawn: boolean,
  timeUp: boolean,
  min: bigint,
  max: bigint
}]>
  };
  openOverflowTokenSales: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): { projectName: string,
                                 tokenSymbol: string,
                                 acceptableTokenSymbol: string,
                                 organizer: Uint8Array,
                                 totalAmountForSale: bigint,
                                 contribution: bigint,
                                 acceptableExchangeToken: Uint8Array,
                                 target: bigint,
                                 status: number,
                                 participant: bigint,
                                 startTime: bigint,
                                 duration: bigint,
                                 withdrawn: boolean,
                                 timeUp: boolean,
                                 min: bigint,
                                 max: bigint
                               };
    [Symbol.iterator](): Iterator<[Uint8Array, { projectName: string,
  tokenSymbol: string,
  acceptableTokenSymbol: string,
  organizer: Uint8Array,
  totalAmountForSale: bigint,
  contribution: bigint,
  acceptableExchangeToken: Uint8Array,
  target: bigint,
  status: number,
  participant: bigint,
  startTime: bigint,
  duration: bigint,
  withdrawn: boolean,
  timeUp: boolean,
  min: bigint,
  max: bigint
}]>
  };
  contributors: {
    isFull(): boolean;
    checkRoot(rt_0: { field: bigint }): boolean;
    root(): __compactRuntime.MerkleTreeDigest;
    firstFree(): bigint;
    pathForLeaf(index_0: bigint, leaf_0: Uint8Array): __compactRuntime.MerkleTreePath<Uint8Array>;
    findPathForLeaf(leaf_0: Uint8Array): __compactRuntime.MerkleTreePath<Uint8Array> | undefined
  };
  KYCedMembers: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
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
