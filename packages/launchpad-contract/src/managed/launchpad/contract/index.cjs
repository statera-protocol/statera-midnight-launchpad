'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_2 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_4 = new __compactRuntime.CompactTypeEnum(2, 1);

const _descriptor_5 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_7 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class _BatchSalesData_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_0.alignment().concat(_descriptor_4.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment()))))))))))))));
  }
  fromValue(value_0) {
    return {
      projectName: _descriptor_2.fromValue(value_0),
      tokenSymbol: _descriptor_2.fromValue(value_0),
      acceptableTokenSymbol: _descriptor_2.fromValue(value_0),
      organizer: _descriptor_0.fromValue(value_0),
      totalAmountForSale: _descriptor_3.fromValue(value_0),
      contribution: _descriptor_3.fromValue(value_0),
      acceptableExchangeToken: _descriptor_0.fromValue(value_0),
      status: _descriptor_4.fromValue(value_0),
      participant: _descriptor_5.fromValue(value_0),
      startTime: _descriptor_6.fromValue(value_0),
      duration: _descriptor_7.fromValue(value_0),
      withdrawn: _descriptor_1.fromValue(value_0),
      timeUp: _descriptor_1.fromValue(value_0),
      min: _descriptor_6.fromValue(value_0),
      max: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.projectName).concat(_descriptor_2.toValue(value_0.tokenSymbol).concat(_descriptor_2.toValue(value_0.acceptableTokenSymbol).concat(_descriptor_0.toValue(value_0.organizer).concat(_descriptor_3.toValue(value_0.totalAmountForSale).concat(_descriptor_3.toValue(value_0.contribution).concat(_descriptor_0.toValue(value_0.acceptableExchangeToken).concat(_descriptor_4.toValue(value_0.status).concat(_descriptor_5.toValue(value_0.participant).concat(_descriptor_6.toValue(value_0.startTime).concat(_descriptor_7.toValue(value_0.duration).concat(_descriptor_1.toValue(value_0.withdrawn).concat(_descriptor_1.toValue(value_0.timeUp).concat(_descriptor_6.toValue(value_0.min).concat(_descriptor_6.toValue(value_0.max)))))))))))))));
  }
}

const _descriptor_8 = new _BatchSalesData_0();

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_6.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0),
      mt_index: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_3.toValue(value_0.value).concat(_descriptor_6.toValue(value_0.mt_index))));
  }
}

const _descriptor_9 = new _QualifiedCoinInfo_0();

class _OverflowSalesData_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment())))))))))))))));
  }
  fromValue(value_0) {
    return {
      projectName: _descriptor_2.fromValue(value_0),
      tokenSymbol: _descriptor_2.fromValue(value_0),
      acceptableTokenSymbol: _descriptor_2.fromValue(value_0),
      organizer: _descriptor_0.fromValue(value_0),
      totalAmountForSale: _descriptor_3.fromValue(value_0),
      contribution: _descriptor_3.fromValue(value_0),
      acceptableExchangeToken: _descriptor_0.fromValue(value_0),
      target: _descriptor_3.fromValue(value_0),
      status: _descriptor_4.fromValue(value_0),
      participant: _descriptor_5.fromValue(value_0),
      startTime: _descriptor_6.fromValue(value_0),
      duration: _descriptor_7.fromValue(value_0),
      withdrawn: _descriptor_1.fromValue(value_0),
      timeUp: _descriptor_1.fromValue(value_0),
      min: _descriptor_6.fromValue(value_0),
      max: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.projectName).concat(_descriptor_2.toValue(value_0.tokenSymbol).concat(_descriptor_2.toValue(value_0.acceptableTokenSymbol).concat(_descriptor_0.toValue(value_0.organizer).concat(_descriptor_3.toValue(value_0.totalAmountForSale).concat(_descriptor_3.toValue(value_0.contribution).concat(_descriptor_0.toValue(value_0.acceptableExchangeToken).concat(_descriptor_3.toValue(value_0.target).concat(_descriptor_4.toValue(value_0.status).concat(_descriptor_5.toValue(value_0.participant).concat(_descriptor_6.toValue(value_0.startTime).concat(_descriptor_7.toValue(value_0.duration).concat(_descriptor_1.toValue(value_0.withdrawn).concat(_descriptor_1.toValue(value_0.timeUp).concat(_descriptor_6.toValue(value_0.min).concat(_descriptor_6.toValue(value_0.max))))))))))))))));
  }
}

const _descriptor_10 = new _OverflowSalesData_0();

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_3.toValue(value_0.value)));
  }
}

const _descriptor_11 = new _CoinInfo_0();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_12 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_13 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_12.alignment().concat(_descriptor_13.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_1.fromValue(value_0),
      left: _descriptor_12.fromValue(value_0),
      right: _descriptor_13.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.is_left).concat(_descriptor_12.toValue(value_0.left).concat(_descriptor_13.toValue(value_0.right)));
  }
}

const _descriptor_14 = new _Either_0();

class _FixedSalesData_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_3.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_4.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()))))))))))))))));
  }
  fromValue(value_0) {
    return {
      projectName: _descriptor_2.fromValue(value_0),
      tokenSymbol: _descriptor_2.fromValue(value_0),
      acceptableTokenSymbol: _descriptor_2.fromValue(value_0),
      organizer: _descriptor_0.fromValue(value_0),
      totalAmountForSale: _descriptor_3.fromValue(value_0),
      totalAmountSold: _descriptor_3.fromValue(value_0),
      totalAmountLeft: _descriptor_3.fromValue(value_0),
      tokenSaleRatio: _descriptor_6.fromValue(value_0),
      acceptableExchangeToken: _descriptor_0.fromValue(value_0),
      status: _descriptor_4.fromValue(value_0),
      participant: _descriptor_5.fromValue(value_0),
      startTime: _descriptor_6.fromValue(value_0),
      duration: _descriptor_7.fromValue(value_0),
      min: _descriptor_6.fromValue(value_0),
      max: _descriptor_6.fromValue(value_0),
      withdrawn: _descriptor_1.fromValue(value_0),
      timeUp: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.projectName).concat(_descriptor_2.toValue(value_0.tokenSymbol).concat(_descriptor_2.toValue(value_0.acceptableTokenSymbol).concat(_descriptor_0.toValue(value_0.organizer).concat(_descriptor_3.toValue(value_0.totalAmountForSale).concat(_descriptor_3.toValue(value_0.totalAmountSold).concat(_descriptor_3.toValue(value_0.totalAmountLeft).concat(_descriptor_6.toValue(value_0.tokenSaleRatio).concat(_descriptor_0.toValue(value_0.acceptableExchangeToken).concat(_descriptor_4.toValue(value_0.status).concat(_descriptor_5.toValue(value_0.participant).concat(_descriptor_6.toValue(value_0.startTime).concat(_descriptor_7.toValue(value_0.duration).concat(_descriptor_6.toValue(value_0.min).concat(_descriptor_6.toValue(value_0.max).concat(_descriptor_1.toValue(value_0.withdrawn).concat(_descriptor_1.toValue(value_0.timeUp)))))))))))))))));
  }
}

const _descriptor_15 = new _FixedSalesData_0();

const _descriptor_16 = new __compactRuntime.CompactTypeField();

class _MerkleTreeDigest_0 {
  alignment() {
    return _descriptor_16.alignment();
  }
  fromValue(value_0) {
    return {
      field: _descriptor_16.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_16.toValue(value_0.field);
  }
}

const _descriptor_17 = new _MerkleTreeDigest_0();

class _ValidityRange_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return {
      duration: _descriptor_6.fromValue(value_0),
      creationDate: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.duration).concat(_descriptor_6.toValue(value_0.creationDate));
  }
}

const _descriptor_18 = new _ValidityRange_0();

class _KYCTokenData_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_18.alignment())));
  }
  fromValue(value_0) {
    return {
      did: _descriptor_0.fromValue(value_0),
      userPk: _descriptor_0.fromValue(value_0),
      oraclePk: _descriptor_0.fromValue(value_0),
      validityRange: _descriptor_18.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.did).concat(_descriptor_0.toValue(value_0.userPk).concat(_descriptor_0.toValue(value_0.oraclePk).concat(_descriptor_18.toValue(value_0.validityRange))));
  }
}

const _descriptor_19 = new _KYCTokenData_0();

class _OracleKycToken_0 {
  alignment() {
    return _descriptor_19.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return {
      tokenData: _descriptor_19.fromValue(value_0),
      oracleSignature: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_19.toValue(value_0.tokenData).concat(_descriptor_0.toValue(value_0.oracleSignature));
  }
}

const _descriptor_20 = new _OracleKycToken_0();

class _BuyerData_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return {
      id: _descriptor_0.fromValue(value_0),
      amount: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.id).concat(_descriptor_6.toValue(value_0.amount));
  }
}

const _descriptor_21 = new _BuyerData_0();

class _MerkleTreePathEntry_0 {
  alignment() {
    return _descriptor_17.alignment().concat(_descriptor_1.alignment());
  }
  fromValue(value_0) {
    return {
      sibling: _descriptor_17.fromValue(value_0),
      goes_left: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_17.toValue(value_0.sibling).concat(_descriptor_1.toValue(value_0.goes_left));
  }
}

const _descriptor_22 = new _MerkleTreePathEntry_0();

const _descriptor_23 = new __compactRuntime.CompactTypeVector(100, _descriptor_22);

class _MerkleTreePath_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_23.alignment());
  }
  fromValue(value_0) {
    return {
      leaf: _descriptor_0.fromValue(value_0),
      path: _descriptor_23.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.leaf).concat(_descriptor_23.toValue(value_0.path));
  }
}

const _descriptor_24 = new _MerkleTreePath_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_11.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_1.fromValue(value_0),
      value: _descriptor_11.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.is_some).concat(_descriptor_11.toValue(value_0.value));
  }
}

const _descriptor_25 = new _Maybe_0();

class _SendResult_0 {
  alignment() {
    return _descriptor_25.alignment().concat(_descriptor_11.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_25.fromValue(value_0),
      sent: _descriptor_11.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_25.toValue(value_0.change).concat(_descriptor_11.toValue(value_0.sent));
  }
}

const _descriptor_26 = new _SendResult_0();

const _descriptor_27 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_28 = new __compactRuntime.CompactTypeBytes(6);

class _LeafPreimage_0 {
  alignment() {
    return _descriptor_28.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return {
      domain_sep: _descriptor_28.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_28.toValue(value_0.domain_sep).concat(_descriptor_0.toValue(value_0.data));
  }
}

const _descriptor_29 = new _LeafPreimage_0();

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_11.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_28.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_11.fromValue(value_0),
      dataType: _descriptor_1.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_28.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_11.toValue(value_0.info).concat(_descriptor_1.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_28.toValue(value_0.domain_sep))));
  }
}

const _descriptor_30 = new _CoinPreimage_0();

const _descriptor_31 = new __compactRuntime.CompactTypeVector(3, _descriptor_16);

const _descriptor_32 = new __compactRuntime.CompactTypeVector(2, _descriptor_16);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    if (typeof(witnesses_0.local_secret_key) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named local_secret_key');
    if (typeof(witnesses_0.generate_sale_id) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named generate_sale_id');
    if (typeof(witnesses_0.calculate_amount_to_buy) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calculate_amount_to_buy');
    if (typeof(witnesses_0.calculate_time) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calculate_time');
    if (typeof(witnesses_0.confirmContribution) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named confirmContribution');
    if (typeof(witnesses_0.calcAmountToWtihdrawFromBatch) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calcAmountToWtihdrawFromBatch');
    if (typeof(witnesses_0.calcAmountToWtihdrawFromOverflow) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calcAmountToWtihdrawFromOverflow');
    if (typeof(witnesses_0.calcAmountToRefundFromOverflow) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calcAmountToRefundFromOverflow');
    if (typeof(witnesses_0.calculateLeftover) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named calculateLeftover');
    this.witnesses = witnesses_0;
    this.circuits = {
      create_token: (...args_1) => {
        if (args_1.length !== 6)
          throw new __compactRuntime.CompactError(`create_token: expected 6 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token_name_0 = args_1[1];
        const total_amount_0 = args_1[2];
        const token_ticker_0 = args_1[3];
        const token_icon_0 = args_1[4];
        const kyc_token_0 = args_1[5];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('create_token',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 116 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(token_name_0.buffer instanceof ArrayBuffer && token_name_0.BYTES_PER_ELEMENT === 1 && token_name_0.length === 32))
          __compactRuntime.type_error('create_token',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 116 char 1',
                                      'Bytes<32>',
                                      token_name_0)
        if (!(typeof(total_amount_0) === 'bigint' && total_amount_0 >= 0 && total_amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_token',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 116 char 1',
                                      'Uint<0..18446744073709551615>',
                                      total_amount_0)
        if (!(typeof(kyc_token_0) === 'object' && typeof(kyc_token_0.tokenData) === 'object' && kyc_token_0.tokenData.did.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.did.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.did.length === 32 && kyc_token_0.tokenData.userPk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.userPk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.userPk.length === 32 && kyc_token_0.tokenData.oraclePk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.oraclePk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.oraclePk.length === 32 && typeof(kyc_token_0.tokenData.validityRange) === 'object' && typeof(kyc_token_0.tokenData.validityRange.duration) === 'bigint' && kyc_token_0.tokenData.validityRange.duration >= 0 && kyc_token_0.tokenData.validityRange.duration <= 18446744073709551615n && typeof(kyc_token_0.tokenData.validityRange.creationDate) === 'bigint' && kyc_token_0.tokenData.validityRange.creationDate >= 0 && kyc_token_0.tokenData.validityRange.creationDate <= 18446744073709551615n && kyc_token_0.oracleSignature.buffer instanceof ArrayBuffer && kyc_token_0.oracleSignature.BYTES_PER_ELEMENT === 1 && kyc_token_0.oracleSignature.length === 32))
          __compactRuntime.type_error('create_token',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 116 char 1',
                                      'struct OracleKycToken<tokenData: struct KYCTokenData<did: Bytes<32>, userPk: Bytes<32>, oraclePk: Bytes<32>, validityRange: struct ValidityRange<duration: Uint<0..18446744073709551615>, creationDate: Uint<0..18446744073709551615>>>, oracleSignature: Bytes<32>>',
                                      kyc_token_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(token_name_0).concat(_descriptor_6.toValue(total_amount_0).concat(_descriptor_2.toValue(token_ticker_0).concat(_descriptor_2.toValue(token_icon_0).concat(_descriptor_20.toValue(kyc_token_0))))),
            alignment: _descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_20.alignment()))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_create_token_0(context,
                                               partialProofData,
                                               token_name_0,
                                               total_amount_0,
                                               token_ticker_0,
                                               token_icon_0,
                                               kyc_token_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      openFixedSale: (...args_1) => {
        if (args_1.length !== 12)
          throw new __compactRuntime.CompactError(`openFixedSale: expected 12 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_ratio_0 = args_1[2];
        const acceptableExchangeToken_0 = args_1[3];
        const creation_time_0 = args_1[4];
        const sale_duration_0 = args_1[5];
        const min_0 = args_1[6];
        const max_0 = args_1[7];
        const project_name_0 = args_1[8];
        const token_symbol_0 = args_1[9];
        const acceptable_token_symbol_0 = args_1[10];
        const kyc_token_0 = args_1[11];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(typeof(sale_ratio_0) === 'bigint' && sale_ratio_0 >= 0 && sale_ratio_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Uint<0..18446744073709551615>',
                                      sale_ratio_0)
        if (!(acceptableExchangeToken_0.buffer instanceof ArrayBuffer && acceptableExchangeToken_0.BYTES_PER_ELEMENT === 1 && acceptableExchangeToken_0.length === 32))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Bytes<32>',
                                      acceptableExchangeToken_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        if (!(typeof(kyc_token_0) === 'object' && typeof(kyc_token_0.tokenData) === 'object' && kyc_token_0.tokenData.did.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.did.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.did.length === 32 && kyc_token_0.tokenData.userPk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.userPk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.userPk.length === 32 && kyc_token_0.tokenData.oraclePk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.oraclePk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.oraclePk.length === 32 && typeof(kyc_token_0.tokenData.validityRange) === 'object' && typeof(kyc_token_0.tokenData.validityRange.duration) === 'bigint' && kyc_token_0.tokenData.validityRange.duration >= 0 && kyc_token_0.tokenData.validityRange.duration <= 18446744073709551615n && typeof(kyc_token_0.tokenData.validityRange.creationDate) === 'bigint' && kyc_token_0.tokenData.validityRange.creationDate >= 0 && kyc_token_0.tokenData.validityRange.creationDate <= 18446744073709551615n && kyc_token_0.oracleSignature.buffer instanceof ArrayBuffer && kyc_token_0.oracleSignature.BYTES_PER_ELEMENT === 1 && kyc_token_0.oracleSignature.length === 32))
          __compactRuntime.type_error('openFixedSale',
                                      'argument 11 (argument 12 as invoked from Typescript)',
                                      'launchpad.compact line 140 char 1',
                                      'struct OracleKycToken<tokenData: struct KYCTokenData<did: Bytes<32>, userPk: Bytes<32>, oraclePk: Bytes<32>, validityRange: struct ValidityRange<duration: Uint<0..18446744073709551615>, creationDate: Uint<0..18446744073709551615>>>, oracleSignature: Bytes<32>>',
                                      kyc_token_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_6.toValue(sale_ratio_0).concat(_descriptor_0.toValue(acceptableExchangeToken_0).concat(_descriptor_6.toValue(creation_time_0).concat(_descriptor_7.toValue(sale_duration_0).concat(_descriptor_6.toValue(min_0).concat(_descriptor_6.toValue(max_0).concat(_descriptor_2.toValue(project_name_0).concat(_descriptor_2.toValue(token_symbol_0).concat(_descriptor_2.toValue(acceptable_token_symbol_0).concat(_descriptor_20.toValue(kyc_token_0))))))))))),
            alignment: _descriptor_11.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_20.alignment()))))))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_openFixedSale_0(context,
                                                partialProofData,
                                                coin_0,
                                                sale_ratio_0,
                                                acceptableExchangeToken_0,
                                                creation_time_0,
                                                sale_duration_0,
                                                min_0,
                                                max_0,
                                                project_name_0,
                                                token_symbol_0,
                                                acceptable_token_symbol_0,
                                                kyc_token_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buyFromFixedSale: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`buyFromFixedSale: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        const sale_amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buyFromFixedSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 186 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buyFromFixedSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 186 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buyFromFixedSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 186 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(sale_amount_0) === 'bigint' && sale_amount_0 >= 0 && sale_amount_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buyFromFixedSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 186 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      sale_amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0).concat(_descriptor_3.toValue(sale_amount_0))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buyFromFixedSale_0(context,
                                                   partialProofData,
                                                   coin_0,
                                                   sale_id_0,
                                                   sale_amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      openBatchSale: (...args_1) => {
        if (args_1.length !== 11)
          throw new __compactRuntime.CompactError(`openBatchSale: expected 11 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const acceptableExchangeToken_0 = args_1[2];
        const creation_time_0 = args_1[3];
        const sale_duration_0 = args_1[4];
        const min_0 = args_1[5];
        const max_0 = args_1[6];
        const project_name_0 = args_1[7];
        const token_symbol_0 = args_1[8];
        const acceptable_token_symbol_0 = args_1[9];
        const kyc_token_0 = args_1[10];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(acceptableExchangeToken_0.buffer instanceof ArrayBuffer && acceptableExchangeToken_0.BYTES_PER_ELEMENT === 1 && acceptableExchangeToken_0.length === 32))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'Bytes<32>',
                                      acceptableExchangeToken_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        if (!(typeof(kyc_token_0) === 'object' && typeof(kyc_token_0.tokenData) === 'object' && kyc_token_0.tokenData.did.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.did.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.did.length === 32 && kyc_token_0.tokenData.userPk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.userPk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.userPk.length === 32 && kyc_token_0.tokenData.oraclePk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.oraclePk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.oraclePk.length === 32 && typeof(kyc_token_0.tokenData.validityRange) === 'object' && typeof(kyc_token_0.tokenData.validityRange.duration) === 'bigint' && kyc_token_0.tokenData.validityRange.duration >= 0 && kyc_token_0.tokenData.validityRange.duration <= 18446744073709551615n && typeof(kyc_token_0.tokenData.validityRange.creationDate) === 'bigint' && kyc_token_0.tokenData.validityRange.creationDate >= 0 && kyc_token_0.tokenData.validityRange.creationDate <= 18446744073709551615n && kyc_token_0.oracleSignature.buffer instanceof ArrayBuffer && kyc_token_0.oracleSignature.BYTES_PER_ELEMENT === 1 && kyc_token_0.oracleSignature.length === 32))
          __compactRuntime.type_error('openBatchSale',
                                      'argument 10 (argument 11 as invoked from Typescript)',
                                      'launchpad.compact line 232 char 1',
                                      'struct OracleKycToken<tokenData: struct KYCTokenData<did: Bytes<32>, userPk: Bytes<32>, oraclePk: Bytes<32>, validityRange: struct ValidityRange<duration: Uint<0..18446744073709551615>, creationDate: Uint<0..18446744073709551615>>>, oracleSignature: Bytes<32>>',
                                      kyc_token_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_0.toValue(acceptableExchangeToken_0).concat(_descriptor_6.toValue(creation_time_0).concat(_descriptor_7.toValue(sale_duration_0).concat(_descriptor_6.toValue(min_0).concat(_descriptor_6.toValue(max_0).concat(_descriptor_2.toValue(project_name_0).concat(_descriptor_2.toValue(token_symbol_0).concat(_descriptor_2.toValue(acceptable_token_symbol_0).concat(_descriptor_20.toValue(kyc_token_0)))))))))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_20.alignment())))))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_openBatchSale_0(context,
                                                partialProofData,
                                                coin_0,
                                                acceptableExchangeToken_0,
                                                creation_time_0,
                                                sale_duration_0,
                                                min_0,
                                                max_0,
                                                project_name_0,
                                                token_symbol_0,
                                                acceptable_token_symbol_0,
                                                kyc_token_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buyFromBatchSale: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`buyFromBatchSale: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        const amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buyFromBatchSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 274 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buyFromBatchSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 274 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buyFromBatchSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 274 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('buyFromBatchSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 274 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0).concat(_descriptor_6.toValue(amount_0))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buyFromBatchSale_0(context,
                                                   partialProofData,
                                                   coin_0,
                                                   sale_id_0,
                                                   amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      openOverflowSale: (...args_1) => {
        if (args_1.length !== 12)
          throw new __compactRuntime.CompactError(`openOverflowSale: expected 12 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const acceptableExchangeToken_0 = args_1[2];
        const creation_time_0 = args_1[3];
        const sale_duration_0 = args_1[4];
        const target_0 = args_1[5];
        const min_0 = args_1[6];
        const max_0 = args_1[7];
        const project_name_0 = args_1[8];
        const token_symbol_0 = args_1[9];
        const acceptable_token_symbol_0 = args_1[10];
        const kyc_token_0 = args_1[11];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(acceptableExchangeToken_0.buffer instanceof ArrayBuffer && acceptableExchangeToken_0.BYTES_PER_ELEMENT === 1 && acceptableExchangeToken_0.length === 32))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Bytes<32>',
                                      acceptableExchangeToken_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(target_0) === 'bigint' && target_0 >= 0 && target_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      target_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        if (!(typeof(kyc_token_0) === 'object' && typeof(kyc_token_0.tokenData) === 'object' && kyc_token_0.tokenData.did.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.did.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.did.length === 32 && kyc_token_0.tokenData.userPk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.userPk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.userPk.length === 32 && kyc_token_0.tokenData.oraclePk.buffer instanceof ArrayBuffer && kyc_token_0.tokenData.oraclePk.BYTES_PER_ELEMENT === 1 && kyc_token_0.tokenData.oraclePk.length === 32 && typeof(kyc_token_0.tokenData.validityRange) === 'object' && typeof(kyc_token_0.tokenData.validityRange.duration) === 'bigint' && kyc_token_0.tokenData.validityRange.duration >= 0 && kyc_token_0.tokenData.validityRange.duration <= 18446744073709551615n && typeof(kyc_token_0.tokenData.validityRange.creationDate) === 'bigint' && kyc_token_0.tokenData.validityRange.creationDate >= 0 && kyc_token_0.tokenData.validityRange.creationDate <= 18446744073709551615n && kyc_token_0.oracleSignature.buffer instanceof ArrayBuffer && kyc_token_0.oracleSignature.BYTES_PER_ELEMENT === 1 && kyc_token_0.oracleSignature.length === 32))
          __compactRuntime.type_error('openOverflowSale',
                                      'argument 11 (argument 12 as invoked from Typescript)',
                                      'launchpad.compact line 319 char 1',
                                      'struct OracleKycToken<tokenData: struct KYCTokenData<did: Bytes<32>, userPk: Bytes<32>, oraclePk: Bytes<32>, validityRange: struct ValidityRange<duration: Uint<0..18446744073709551615>, creationDate: Uint<0..18446744073709551615>>>, oracleSignature: Bytes<32>>',
                                      kyc_token_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_0.toValue(acceptableExchangeToken_0).concat(_descriptor_6.toValue(creation_time_0).concat(_descriptor_7.toValue(sale_duration_0).concat(_descriptor_3.toValue(target_0).concat(_descriptor_6.toValue(min_0).concat(_descriptor_6.toValue(max_0).concat(_descriptor_2.toValue(project_name_0).concat(_descriptor_2.toValue(token_symbol_0).concat(_descriptor_2.toValue(acceptable_token_symbol_0).concat(_descriptor_20.toValue(kyc_token_0))))))))))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment().concat(_descriptor_7.alignment().concat(_descriptor_3.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_20.alignment()))))))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_openOverflowSale_0(context,
                                                   partialProofData,
                                                   coin_0,
                                                   acceptableExchangeToken_0,
                                                   creation_time_0,
                                                   sale_duration_0,
                                                   target_0,
                                                   min_0,
                                                   max_0,
                                                   project_name_0,
                                                   token_symbol_0,
                                                   acceptable_token_symbol_0,
                                                   kyc_token_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buyFromOverflowSale: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`buyFromOverflowSale: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        const amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buyFromOverflowSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 362 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buyFromOverflowSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 362 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buyFromOverflowSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 362 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('buyFromOverflowSale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 362 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_11.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0).concat(_descriptor_6.toValue(amount_0))),
            alignment: _descriptor_11.alignment().concat(_descriptor_0.alignment().concat(_descriptor_6.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buyFromOverflowSale_0(context,
                                                      partialProofData,
                                                      coin_0,
                                                      sale_id_0,
                                                      amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdrawalFromBatchSale: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`withdrawalFromBatchSale: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const amountContributed_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdrawalFromBatchSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 401 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('withdrawalFromBatchSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 401 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amountContributed_0) === 'bigint' && amountContributed_0 >= 0 && amountContributed_0 <= 18446744073709551615n))
          __compactRuntime.type_error('withdrawalFromBatchSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 401 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amountContributed_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_6.toValue(amountContributed_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_6.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdrawalFromBatchSale_0(context,
                                                          partialProofData,
                                                          sale_id_0,
                                                          amountContributed_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdrawFromOverflowSale: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`withdrawFromOverflowSale: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const amountContributed_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdrawFromOverflowSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 435 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('withdrawFromOverflowSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 435 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amountContributed_0) === 'bigint' && amountContributed_0 >= 0 && amountContributed_0 <= 18446744073709551615n))
          __compactRuntime.type_error('withdrawFromOverflowSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 435 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amountContributed_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_6.toValue(amountContributed_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_6.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdrawFromOverflowSale_0(context,
                                                           partialProofData,
                                                           sale_id_0,
                                                           amountContributed_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      closeFixedSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`closeFixedSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('closeFixedSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 485 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('closeFixedSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 485 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_closeFixedSale_0(context,
                                                 partialProofData,
                                                 sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      closeBatchSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`closeBatchSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('closeBatchSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 498 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('closeBatchSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 498 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_closeBatchSale_0(context,
                                                 partialProofData,
                                                 sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      closeOverflowSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`closeOverflowSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('closeOverflowSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 511 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('closeOverflowSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 511 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_closeOverflowSale_0(context,
                                                    partialProofData,
                                                    sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      organizerWIthdrawalFromFixedSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`organizerWIthdrawalFromFixedSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('organizerWIthdrawalFromFixedSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 525 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('organizerWIthdrawalFromFixedSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 525 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_organizerWIthdrawalFromFixedSale_0(context,
                                                                   partialProofData,
                                                                   sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      organizerWIthdrawalFromBatchSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`organizerWIthdrawalFromBatchSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('organizerWIthdrawalFromBatchSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 546 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('organizerWIthdrawalFromBatchSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 546 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_organizerWIthdrawalFromBatchSale_0(context,
                                                                   partialProofData,
                                                                   sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      organizerWIthdrawalFromOverflowSale: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`organizerWIthdrawalFromOverflowSale: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('organizerWIthdrawalFromOverflowSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 567 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('organizerWIthdrawalFromOverflowSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 567 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_organizerWIthdrawalFromOverflowSale_0(context,
                                                                      partialProofData,
                                                                      sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      addNewKycedMember: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`addNewKycedMember: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const oracle_public_key_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('addNewKycedMember',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 609 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(oracle_public_key_0.buffer instanceof ArrayBuffer && oracle_public_key_0.BYTES_PER_ELEMENT === 1 && oracle_public_key_0.length === 32))
          __compactRuntime.type_error('addNewKycedMember',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 609 char 1',
                                      'Bytes<32>',
                                      oracle_public_key_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(oracle_public_key_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_addNewKycedMember_0(context,
                                                    partialProofData,
                                                    oracle_public_key_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      removeNewKycedMember: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`removeNewKycedMember: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const oracle_public_key_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('removeNewKycedMember',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 615 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(oracle_public_key_0.buffer instanceof ArrayBuffer && oracle_public_key_0.BYTES_PER_ELEMENT === 1 && oracle_public_key_0.length === 32))
          __compactRuntime.type_error('removeNewKycedMember',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 615 char 1',
                                      'Bytes<32>',
                                      oracle_public_key_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(oracle_public_key_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_removeNewKycedMember_0(context,
                                                       partialProofData,
                                                       oracle_public_key_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      public_key: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`public_key: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sk_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('public_key',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 621 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32))
          __compactRuntime.type_error('public_key',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 621 char 1',
                                      'Bytes<32>',
                                      sk_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sk_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_public_key_0(context, partialProofData, sk_0);
        partialProofData.output = { value: _descriptor_0.toValue(result_0), alignment: _descriptor_0.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      create_token: this.circuits.create_token,
      openFixedSale: this.circuits.openFixedSale,
      buyFromFixedSale: this.circuits.buyFromFixedSale,
      openBatchSale: this.circuits.openBatchSale,
      buyFromBatchSale: this.circuits.buyFromBatchSale,
      openOverflowSale: this.circuits.openOverflowSale,
      buyFromOverflowSale: this.circuits.buyFromOverflowSale,
      withdrawalFromBatchSale: this.circuits.withdrawalFromBatchSale,
      withdrawFromOverflowSale: this.circuits.withdrawFromOverflowSale,
      closeFixedSale: this.circuits.closeFixedSale,
      closeBatchSale: this.circuits.closeBatchSale,
      closeOverflowSale: this.circuits.closeOverflowSale,
      organizerWIthdrawalFromFixedSale: this.circuits.organizerWIthdrawalFromFixedSale,
      organizerWIthdrawalFromBatchSale: this.circuits.organizerWIthdrawalFromBatchSale,
      organizerWIthdrawalFromOverflowSale: this.circuits.organizerWIthdrawalFromOverflowSale,
      addNewKycedMember: this.circuits.addNewKycedMember,
      removeNewKycedMember: this.circuits.removeNewKycedMember
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 2)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    const initialNonce_0 = args_0[1];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(initialNonce_0.buffer instanceof ArrayBuffer && initialNonce_0.BYTES_PER_ELEMENT === 1 && initialNonce_0.length === 32))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'launchpad.compact line 99 char 1',
                                  'Bytes<32>',
                                  initialNonce_0)
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('create_token', new __compactRuntime.ContractOperation());
    state_0.setOperation('openFixedSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buyFromFixedSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('openBatchSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buyFromBatchSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('openOverflowSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buyFromOverflowSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdrawalFromBatchSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdrawFromOverflowSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('closeFixedSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('closeBatchSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('closeOverflowSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('organizerWIthdrawalFromFixedSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('organizerWIthdrawalFromBatchSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('organizerWIthdrawalFromOverflowSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('addNewKycedMember', new __compactRuntime.ContractOperation());
    state_0.setOperation('removeNewKycedMember', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(1n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(2n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(3n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(4n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(5n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(6n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(7n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newArray()
                                        .arrayPush(__compactRuntime.StateValue.newBoundedMerkleTree(
                                                     new __compactRuntime.StateBoundedMerkleTree(100)
                                                   )).arrayPush(__compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                      alignment: _descriptor_6.alignment() }))
                                        .encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(8n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(1n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(initialNonce_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_5.toValue(tmp_0),
                                              alignment: _descriptor_5.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_some_0(context, partialProofData, value_0) {
    return { is_some: true, value: value_0 };
  }
  #_none_0(context, partialProofData) {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_right_0(context, partialProofData, value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  #_transientHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_31, value_0);
    return result_0;
  }
  #_transientHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_32, value_0);
    return result_0;
  }
  #_persistentHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_29, value_0);
    return result_0;
  }
  #_persistentHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_30, value_0);
    return result_0;
  }
  #_persistentHash_2(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_27, value_0);
    return result_0;
  }
  #_persistentCommit_0(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_27,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  #_persistentCommit_1(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_21,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  #_degradeToTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_upgradeFromTransient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  #_merkleTreePathRoot_0(context, partialProofData, path_0) {
    return { field:
               this.#_folder_0(context,
                               partialProofData,
                               (...args_0) =>
                                 this.#_merkleTreePathEntryRoot_0(...args_0),
                               this.#_degradeToTransient_0(context,
                                                           partialProofData,
                                                           this.#_persistentHash_0(context,
                                                                                   partialProofData,
                                                                                   { domain_sep:
                                                                                       new Uint8Array([109, 100, 110, 58, 108, 104]),
                                                                                     data:
                                                                                       path_0.leaf })),
                               path_0.path) };
  }
  #_merkleTreePathEntryRoot_0(context,
                              partialProofData,
                              recursiveDigest_0,
                              entry_0)
  {
    const left_0 = entry_0.goes_left ? recursiveDigest_0 : entry_0.sibling.field;
    const right_0 = entry_0.goes_left ?
                    entry_0.sibling.field :
                    recursiveDigest_0;
    return this.#_transientHash_1(context, partialProofData, [left_0, right_0]);
  }
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_12.toValue(result_0),
      alignment: _descriptor_12.alignment()
    });
    return result_0;
  }
  #_createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_tokenType_0(context, partialProofData, domain_sep_0, contractAddress_0) {
    return this.#_persistentCommit_0(context,
                                     partialProofData,
                                     [domain_sep_0, contractAddress_0.bytes],
                                     new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  #_mintToken_0(context,
                partialProofData,
                domain_sep_0,
                value_0,
                nonce_0,
                recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this.#_tokenType_0(context,
                                          partialProofData,
                                          domain_sep_0,
                                          _descriptor_13.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 2 } },
                                                                                    { idx: { cached: true,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() } }] } },
                                                                                    { popeq: { cached: true,
                                                                                               result: undefined } }]).value)),
                     value: value_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(value_0),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     'neg',
                     { branch: { skip: 4 } },
                     { dup: { n: 2 } },
                     { dup: { n: 2 } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [ { tag: 'stack' }] } },
                     'add',
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this.#_coinCommitment_0(context,
                                         partialProofData,
                                         coin_0,
                                         recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  #_evolveNonce_0(context, partialProofData, index_0, nonce_0) {
    return this.#_upgradeFromTransient_0(context,
                                         partialProofData,
                                         this.#_transientHash_0(context,
                                                                partialProofData,
                                                                [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                               new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                 index_0,
                                                                 this.#_degradeToTransient_0(context,
                                                                                             partialProofData,
                                                                                             nonce_0)]));
  }
  #_receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this.#_right_0(context,
                                       partialProofData,
                                       _descriptor_13.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 2 } },
                                                                                 { idx: { cached: true,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_7.toValue(0n),
                                                                                                            alignment: _descriptor_7.alignment() } }] } },
                                                                                 { popeq: { cached: true,
                                                                                            result: undefined } }]).value));
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          coin_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  #_send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_13.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_7.toValue(0n),
                                                                                            alignment: _descriptor_7.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this.#_createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this.#_coinNullifier_0(context,
                                         partialProofData,
                                         this.#_downcastQualifiedCoin_0(context,
                                                                        partialProofData,
                                                                        input_0),
                                         selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this.#_upgradeFromTransient_0(context,
                                                       partialProofData,
                                                       this.#_transientHash_1(context,
                                                                              partialProofData,
                                                                              [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                             new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                               this.#_degradeToTransient_0(context,
                                                                                                           partialProofData,
                                                                                                           input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this.#_createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this.#_coinCommitment_0(context,
                                          partialProofData,
                                          output_0,
                                          recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this.#_equal_0(change_0, 0n)) {
      return { change: this.#_none_0(context, partialProofData), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this.#_upgradeFromTransient_0(context,
                                                             partialProofData,
                                                             this.#_transientHash_1(context,
                                                                                    partialProofData,
                                                                                    [__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                   new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                     this.#_degradeToTransient_0(context,
                                                                                                                 partialProofData,
                                                                                                                 input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this.#_createZswapOutput_0(context,
                                 partialProofData,
                                 changeCoin_0,
                                 this.#_right_0(context,
                                                partialProofData,
                                                selfAddr_0));
      const cm_0 = this.#_coinCommitment_0(context,
                                           partialProofData,
                                           changeCoin_0,
                                           this.#_right_0(context,
                                                          partialProofData,
                                                          selfAddr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this.#_some_0(context, partialProofData, changeCoin_0),
               sent: output_0 };
    }
  }
  #_mergeCoin_0(context, partialProofData, a_0, b_0) {
    const selfAddr_0 = _descriptor_13.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_7.toValue(0n),
                                                                                            alignment: _descriptor_7.alignment() } }] } },
                                                                 { popeq: { cached: true,
                                                                            result: undefined } }]).value);
    this.#_createZswapInput_0(context, partialProofData, a_0);
    const tmp_0 = this.#_coinNullifier_0(context,
                                         partialProofData,
                                         this.#_downcastQualifiedCoin_0(context,
                                                                        partialProofData,
                                                                        a_0),
                                         selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_createZswapInput_0(context, partialProofData, b_0);
    const tmp_1 = this.#_coinNullifier_0(context,
                                         partialProofData,
                                         this.#_downcastQualifiedCoin_0(context,
                                                                        partialProofData,
                                                                        b_0),
                                         selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    __compactRuntime.assert(this.#_equal_1(a_0.color, b_0.color),
                            'Can only merge coins of the same color');
    const newCoin_0 = { nonce:
                          this.#_upgradeFromTransient_0(context,
                                                        partialProofData,
                                                        this.#_transientHash_1(context,
                                                                               partialProofData,
                                                                               [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                              new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                                this.#_degradeToTransient_0(context,
                                                                                                            partialProofData,
                                                                                                            a_0.nonce)])),
                        color: a_0.color,
                        value:
                          ((t1) => {
                            if (t1 > 340282366920938463463374607431768211455n)
                              throw new __compactRuntime.CompactError('<standard library>: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                            return t1;
                          })(a_0.value + b_0.value) };
    this.#_createZswapOutput_0(context,
                               partialProofData,
                               newCoin_0,
                               this.#_right_0(context,
                                              partialProofData,
                                              selfAddr_0));
    const cm_0 = this.#_coinCommitment_0(context,
                                         partialProofData,
                                         newCoin_0,
                                         this.#_right_0(context,
                                                        partialProofData,
                                                        selfAddr_0));
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return newCoin_0;
  }
  #_mergeCoinImmediate_0(context, partialProofData, a_0, b_0) {
    return this.#_mergeCoin_0(context,
                              partialProofData,
                              a_0,
                              this.#_upcastQualifiedCoin_0(context,
                                                           partialProofData,
                                                           b_0));
  }
  #_downcastQualifiedCoin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  #_upcastQualifiedCoin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce,
             color: coin_0.color,
             value: coin_0.value,
             mt_index: 0n };
  }
  #_coinCommitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: recipient_0.is_left,
                                     data:
                                       recipient_0.is_left ?
                                       recipient_0.left.bytes :
                                       recipient_0.right.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_coinNullifier_0(context, partialProofData, coin_0, addr_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: false,
                                     data: addr_0.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  #_local_secret_key_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.local_secret_key(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32))
      __compactRuntime.type_error('local_secret_key',
                                  'return value',
                                  'launchpad.compact line 105 char 1',
                                  'Bytes<32>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  #_generate_sale_id_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.generate_sale_id(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32))
      __compactRuntime.type_error('generate_sale_id',
                                  'return value',
                                  'launchpad.compact line 106 char 1',
                                  'Bytes<32>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  #_calculate_amount_to_buy_0(context,
                              partialProofData,
                              received_amount_0,
                              sale_ratio_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calculate_amount_to_buy(witnessContext_0,
                                                                                  received_amount_0,
                                                                                  sale_ratio_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('calculate_amount_to_buy',
                                  'return value',
                                  'launchpad.compact line 107 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_3.toValue(result_0),
      alignment: _descriptor_3.alignment()
    });
    return result_0;
  }
  #_calculate_time_0(context, partialProofData, startTime_0, duration_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calculate_time(witnessContext_0,
                                                                         startTime_0,
                                                                         duration_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'boolean'))
      __compactRuntime.type_error('calculate_time',
                                  'return value',
                                  'launchpad.compact line 108 char 1',
                                  'Boolean',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  #_confirmContribution_0(context, partialProofData, buyerCommitment_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.confirmContribution(witnessContext_0,
                                                                              buyerCommitment_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && result_0.leaf.buffer instanceof ArrayBuffer && result_0.leaf.BYTES_PER_ELEMENT === 1 && result_0.leaf.length === 32 && Array.isArray(result_0.path) && result_0.path.length === 100 && result_0.path.every((t) => typeof(t) === 'object' && typeof(t.sibling) === 'object' && typeof(t.sibling.field) === 'bigint' && t.sibling.field >= 0 && t.sibling.field <= __compactRuntime.MAX_FIELD && typeof(t.goes_left) === 'boolean')))
      __compactRuntime.type_error('confirmContribution',
                                  'return value',
                                  'launchpad.compact line 109 char 1',
                                  'struct MerkleTreePath<leaf: Bytes<32>, path: Vector<100, struct MerkleTreePathEntry<sibling: struct MerkleTreeDigest<field: Field>, goes_left: Boolean>>>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_24.toValue(result_0),
      alignment: _descriptor_24.alignment()
    });
    return result_0;
  }
  #_calcAmountToWtihdrawFromBatch_0(context,
                                    partialProofData,
                                    amountContributed_0,
                                    totalReceived_0,
                                    totalForSale_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calcAmountToWtihdrawFromBatch(witnessContext_0,
                                                                                        amountContributed_0,
                                                                                        totalReceived_0,
                                                                                        totalForSale_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('calcAmountToWtihdrawFromBatch',
                                  'return value',
                                  'launchpad.compact line 110 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_calcAmountToWtihdrawFromOverflow_0(context,
                                       partialProofData,
                                       amount_0,
                                       totalReceived_0,
                                       totalForSale_0,
                                       targetAmount_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calcAmountToWtihdrawFromOverflow(witnessContext_0,
                                                                                           amount_0,
                                                                                           totalReceived_0,
                                                                                           totalForSale_0,
                                                                                           targetAmount_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('calcAmountToWtihdrawFromOverflow',
                                  'return value',
                                  'launchpad.compact line 111 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_calcAmountToRefundFromOverflow_0(context,
                                     partialProofData,
                                     amount_0,
                                     totalReceived_0,
                                     totalForSale_0,
                                     targetAmount_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calcAmountToRefundFromOverflow(witnessContext_0,
                                                                                         amount_0,
                                                                                         totalReceived_0,
                                                                                         totalForSale_0,
                                                                                         targetAmount_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('calcAmountToRefundFromOverflow',
                                  'return value',
                                  'launchpad.compact line 112 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_calculateLeftover_0(context,
                        partialProofData,
                        totalReceived_0,
                        totalForSale_0,
                        targetAmount_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calculateLeftover(witnessContext_0,
                                                                            totalReceived_0,
                                                                            totalForSale_0,
                                                                            targetAmount_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('calculateLeftover',
                                  'return value',
                                  'launchpad.compact line 113 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_create_token_0(context,
                   partialProofData,
                   token_name_0,
                   total_amount_0,
                   token_ticker_0,
                   token_icon_0,
                   kyc_token_0)
  {
    const disclosedKycToken_0 = kyc_token_0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = disclosedKycToken_0.tokenData.oraclePk,
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(8n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_0.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'Can not create sale: Unauthorized KYC token');
    __compactRuntime.assert(total_amount_0 >= 10n, 'token must be atleast 10');
    const new_nonce_0 = this.#_evolveNonce_0(context,
                                             partialProofData,
                                             _descriptor_6.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_7.toValue(0n),
                                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                                      { popeq: { cached: true,
                                                                                                 result: undefined } }]).value),
                                             _descriptor_0.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_7.toValue(1n),
                                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                                      { popeq: { cached: false,
                                                                                                 result: undefined } }]).value));
    this.#_mintToken_0(context,
                       partialProofData,
                       token_name_0,
                       total_amount_0,
                       new_nonce_0,
                       this.#_left_0(context,
                                     partialProofData,
                                     this.#_ownPublicKey_0(context,
                                                           partialProofData)));
    const tmp_1 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_5.toValue(tmp_1),
                                              alignment: _descriptor_5.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_openFixedSale_0(context,
                    partialProofData,
                    coin_0,
                    sale_ratio_0,
                    acceptableExchangeToken_0,
                    creation_time_0,
                    sale_duration_0,
                    min_0,
                    max_0,
                    project_name_0,
                    token_symbol_0,
                    acceptable_token_symbol_0,
                    kyc_token_0)
  {
    const disclosedKycToken_0 = kyc_token_0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = disclosedKycToken_0.tokenData.oraclePk,
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(8n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_0.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'Can not create sale: Unauthorized KYC token');
    __compactRuntime.assert(sale_ratio_0 > 0n,
                            'Sale ratio must be greater than 0!');
    __compactRuntime.assert(coin_0.value > 0n,
                            'Sale amount must be greater than 0!');
    this.#_receive_0(context, partialProofData, coin_0);
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    const sale_id_0 = this.#_generate_sale_id_0(context, partialProofData);
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(coin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(coin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_2 = { projectName: project_name_0,
                    tokenSymbol: token_symbol_0,
                    acceptableTokenSymbol: acceptable_token_symbol_0,
                    organizer: organizer_0,
                    totalAmountForSale: coin_0.value,
                    totalAmountSold: 0n,
                    totalAmountLeft: coin_0.value,
                    tokenSaleRatio: sale_ratio_0,
                    acceptableExchangeToken: acceptableExchangeToken_0,
                    status: 0,
                    participant: 0n,
                    startTime: creation_time_0,
                    duration: sale_duration_0,
                    min: min_0,
                    max: max_0,
                    withdrawn: false,
                    timeUp: false };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(tmp_2),
                                                                            alignment: _descriptor_15.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buyFromFixedSale_0(context,
                       partialProofData,
                       coin_0,
                       sale_id_0,
                       sale_amount_0)
  {
    __compactRuntime.assert(sale_amount_0 > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(4n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "There's currently no fixed sale for this token!");
    const sale_token_info_0 = _descriptor_15.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    const amount_to_buy_0 = this.#_calculate_amount_to_buy_0(context,
                                                             partialProofData,
                                                             sale_amount_0,
                                                             sale_token_info_0.tokenSaleRatio);
    __compactRuntime.assert(amount_to_buy_0 <= sale_token_info_0.totalAmountLeft,
                            'Amount is greater than amount left!');
    __compactRuntime.assert(this.#_equal_2(coin_0.color,
                                           sale_token_info_0.acceptableExchangeToken),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.startTime,
                                                sale_token_info_0.duration);
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    totalAmountSold: sale_token_info_0.totalAmountSold,
                    totalAmountLeft: sale_token_info_0.totalAmountLeft,
                    tokenSaleRatio: sale_token_info_0.tokenSaleRatio,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: is_closed_0 && true };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(tmp_0),
                                                                            alignment: _descriptor_15.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!is_closed_0,
                            'This sale has been completed or closed');
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_1.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_7.toValue(3n),
                                                                                          alignment: _descriptor_7.alignment() } }] } },
                                                               { push: { storage: false,
                                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() }).encode() } },
                                                               'member',
                                                               { popeq: { cached: true,
                                                                          result: undefined } }]).value)
                      ?
                      this.#_mergeCoinImmediate_0(context,
                                                  partialProofData,
                                                  _descriptor_9.fromValue(Contract._query(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_7.toValue(3n),
                                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                                           { popeq: { cached: false,
                                                                                                      result: undefined } }]).value),
                                                  coin_0)
                      :
                      coin_0;
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(newCoin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(newCoin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const saleAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_7.toValue(2n),
                                                                                              alignment: _descriptor_7.alignment() } }] } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                              alignment: _descriptor_0.alignment() } }] } },
                                                                   { popeq: { cached: false,
                                                                              result: undefined } }]).value);
    const sendResult_0 = this.#_send_0(context,
                                       partialProofData,
                                       saleAccount_0,
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     this.#_ownPublicKey_0(context,
                                                                           partialProofData)),
                                       amount_to_buy_0);
    if (sendResult_0.change.is_some) {
      const tmp_2 = sendResult_0.change.value;
      const tmp_3 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_2),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_3),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_2),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const new_total_sold_0 = sale_token_info_0.totalAmountSold + amount_to_buy_0;
    let t_0;
    const new_total_left_0 = (t_0 = sale_token_info_0.totalAmountLeft,
                              (__compactRuntime.assert(!(t_0 < amount_to_buy_0),
                                                       'result of subtraction would be negative'),
                               t_0 - amount_to_buy_0));
    const participant_amount_0 = sale_token_info_0.participant + 1n;
    const tmp_4 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    totalAmountSold:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 224 char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(new_total_sold_0),
                    totalAmountLeft: new_total_left_0,
                    tokenSaleRatio: sale_token_info_0.tokenSaleRatio,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status:
                      this.#_equal_3(sale_token_info_0.totalAmountSold,
                                     sale_token_info_0.totalAmountForSale)
                      ?
                      1 :
                      0,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 227 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(participant_amount_0),
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(tmp_4),
                                                                            alignment: _descriptor_15.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_openBatchSale_0(context,
                    partialProofData,
                    coin_0,
                    acceptableExchangeToken_0,
                    creation_time_0,
                    sale_duration_0,
                    min_0,
                    max_0,
                    project_name_0,
                    token_symbol_0,
                    acceptable_token_symbol_0,
                    kyc_token_0)
  {
    const disclosedKycToken_0 = kyc_token_0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = disclosedKycToken_0.tokenData.oraclePk,
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(8n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_0.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'Can not create sale: Unauthorized KYC token');
    this.#_receive_0(context, partialProofData, coin_0);
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    const sale_id_0 = this.#_generate_sale_id_0(context, partialProofData);
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(coin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(coin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_2 = { projectName: project_name_0,
                    tokenSymbol: token_symbol_0,
                    acceptableTokenSymbol: acceptable_token_symbol_0,
                    organizer: organizer_0,
                    totalAmountForSale: coin_0.value,
                    contribution: 0n,
                    acceptableExchangeToken: acceptableExchangeToken_0,
                    status: 0,
                    participant: 0n,
                    startTime: creation_time_0,
                    duration: sale_duration_0,
                    withdrawn: false,
                    timeUp: false,
                    min: min_0,
                    max: max_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(5n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_2),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buyFromBatchSale_0(context, partialProofData, coin_0, sale_id_0, amount_0) {
    __compactRuntime.assert(amount_0 > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(5n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "There's currently no batch sale for this token!");
    const sale_token_info_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(5n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_4(coin_0.color,
                                           sale_token_info_0.acceptableExchangeToken),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.startTime,
                                                sale_token_info_0.duration);
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: is_closed_0 ? 1 : 0,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: is_closed_0,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(5n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!is_closed_0 || sale_token_info_0.status === 2,
                            'This sale has been completed or closed');
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_1.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_7.toValue(3n),
                                                                                          alignment: _descriptor_7.alignment() } }] } },
                                                               { push: { storage: false,
                                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() }).encode() } },
                                                               'member',
                                                               { popeq: { cached: true,
                                                                          result: undefined } }]).value)
                      ?
                      this.#_mergeCoinImmediate_0(context,
                                                  partialProofData,
                                                  _descriptor_9.fromValue(Contract._query(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_7.toValue(3n),
                                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                                           { popeq: { cached: false,
                                                                                                      result: undefined } }]).value),
                                                  coin_0)
                      :
                      coin_0;
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(newCoin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(newCoin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const buyerInfo_0 = { id:
                            this.#_local_secret_key_0(context, partialProofData),
                          amount: amount_0 };
    const userCommit_0 = this.#_generateCommit_0(context,
                                                 partialProofData,
                                                 buyerInfo_0,
                                                 sale_id_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(7n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { dup: { n: 2 } },
                     { idx: { cached: false,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.leafHash(
                                                                            { value: _descriptor_0.toValue(userCommit_0),
                                                                              alignment: _descriptor_0.alignment() }
                                                                          )).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } },
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { addi: { immediate: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    const tmp_2 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 308 char 23: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(sale_token_info_0.contribution + amount_0),
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: sale_token_info_0.status,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 309 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(sale_token_info_0.participant + 1n),
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(5n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_2),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_generateCommit_0(context, partialProofData, value_0, rand_0) {
    return this.#_persistentCommit_1(context, partialProofData, value_0, rand_0);
  }
  #_openOverflowSale_0(context,
                       partialProofData,
                       coin_0,
                       acceptableExchangeToken_0,
                       creation_time_0,
                       sale_duration_0,
                       target_0,
                       min_0,
                       max_0,
                       project_name_0,
                       token_symbol_0,
                       acceptable_token_symbol_0,
                       kyc_token_0)
  {
    const disclosedKycToken_0 = kyc_token_0;
    let tmp_0;
    __compactRuntime.assert((tmp_0 = disclosedKycToken_0.tokenData.oraclePk,
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(8n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_0.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'Can not create sale: Unauthorized KYC token');
    this.#_receive_0(context, partialProofData, coin_0);
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    const sale_id_0 = this.#_generate_sale_id_0(context, partialProofData);
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(2n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(coin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(coin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_2 = { projectName: project_name_0,
                    tokenSymbol: token_symbol_0,
                    acceptableTokenSymbol: acceptable_token_symbol_0,
                    organizer: organizer_0,
                    totalAmountForSale: coin_0.value,
                    contribution: 0n,
                    acceptableExchangeToken: acceptableExchangeToken_0,
                    target: target_0,
                    status: 0,
                    participant: 0n,
                    startTime: creation_time_0,
                    duration: sale_duration_0,
                    withdrawn: false,
                    timeUp: false,
                    min: min_0,
                    max: max_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(6n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_2),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buyFromOverflowSale_0(context, partialProofData, coin_0, sale_id_0, amount_0)
  {
    __compactRuntime.assert(amount_0 > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(6n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale does not exist');
    const sale_token_info_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_5(coin_0.color,
                                           sale_token_info_0.acceptableExchangeToken),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.startTime,
                                                sale_token_info_0.duration);
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    target: sale_token_info_0.target,
                    status: 1,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: is_closed_0,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(6n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!is_closed_0 || sale_token_info_0.status === 2,
                            'This sale has been completed or closed');
    const person_0 = this.#_public_key_0(context,
                                         partialProofData,
                                         this.#_local_secret_key_0(context,
                                                                   partialProofData));
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_1.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_7.toValue(3n),
                                                                                          alignment: _descriptor_7.alignment() } }] } },
                                                               { push: { storage: false,
                                                                         value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() }).encode() } },
                                                               'member',
                                                               { popeq: { cached: true,
                                                                          result: undefined } }]).value)
                      ?
                      this.#_mergeCoinImmediate_0(context,
                                                  partialProofData,
                                                  _descriptor_9.fromValue(Contract._query(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_7.toValue(3n),
                                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                                           { popeq: { cached: false,
                                                                                                      result: undefined } }]).value),
                                                  coin_0)
                      :
                      coin_0;
    const tmp_1 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_13.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_7.toValue(0n),
                                                                                                      alignment: _descriptor_7.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_11.toValue(newCoin_0),
                                                                              alignment: _descriptor_11.alignment() },
                                                                            { value: _descriptor_14.toValue(tmp_1),
                                                                              alignment: _descriptor_14.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(newCoin_0),
                                                                            alignment: _descriptor_11.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const buyerInfo_0 = { id:
                            this.#_local_secret_key_0(context, partialProofData),
                          amount: amount_0 };
    const userCommit_0 = this.#_generateCommit_0(context,
                                                 partialProofData,
                                                 buyerInfo_0,
                                                 sale_id_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(7n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(0n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { dup: { n: 2 } },
                     { idx: { cached: false,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.leafHash(
                                                                            { value: _descriptor_0.toValue(userCommit_0),
                                                                              alignment: _descriptor_0.alignment() }
                                                                          )).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } },
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(1n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { addi: { immediate: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    const tmp_2 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 394 char 23: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(sale_token_info_0.contribution + coin_0.value),
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    target: sale_token_info_0.target,
                    status: sale_token_info_0.status,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 395 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(sale_token_info_0.participant + 1n),
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(6n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_2),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_withdrawalFromBatchSale_0(context,
                              partialProofData,
                              sale_id_0,
                              amountContributed_0)
  {
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(5n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(5n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    __compactRuntime.assert(sale_token_info_0.status === 2
                            ||
                            sale_token_info_0.status === 1,
                            "Sale is still on, can't withdraw from it");
    const buyerInfo_0 = { id:
                            this.#_local_secret_key_0(context, partialProofData),
                          amount: amountContributed_0 };
    const userCommitRegenerate_0 = this.#_generateCommit_0(context,
                                                           partialProofData,
                                                           buyerInfo_0,
                                                           sale_id_0);
    const path_0 = this.#_confirmContribution_0(context,
                                                partialProofData,
                                                userCommitRegenerate_0);
    let tmp_0;
    __compactRuntime.assert((tmp_0 = this.#_merkleTreePathRoot_0(context,
                                                                 partialProofData,
                                                                 path_0),
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(7n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(0n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      'root',
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_17.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_17.alignment() }).encode() } },
                                                                      'eq',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'You did not contribute to this sale');
    const totalReceived_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(3n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value;
    const withdrawalAmount_0 = this.#_calcAmountToWtihdrawFromBatch_0(context,
                                                                      partialProofData,
                                                                      amountContributed_0,
                                                                      ((t1) => {
                                                                        if (t1 > 18446744073709551615n)
                                                                          throw new __compactRuntime.CompactError('launchpad.compact line 420 char 13: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                        return t1;
                                                                      })(totalReceived_0),
                                                                      ((t1) => {
                                                                        if (t1 > 18446744073709551615n)
                                                                          throw new __compactRuntime.CompactError('launchpad.compact line 421 char 13: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                        return t1;
                                                                      })(sale_token_info_0.totalAmountForSale));
    const sendResult_0 = this.#_send_0(context,
                                       partialProofData,
                                       _descriptor_9.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_7.toValue(2n),
                                                                                                           alignment: _descriptor_7.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value),
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     this.#_ownPublicKey_0(context,
                                                                           partialProofData)),
                                       withdrawalAmount_0);
    if (sendResult_0.change.is_some) {
      const tmp_1 = sendResult_0.change.value;
      const tmp_2 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_1),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_2),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_1),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #_withdrawFromOverflowSale_0(context,
                               partialProofData,
                               sale_id_0,
                               amountContributed_0)
  {
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(6n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(sale_token_info_0.status === 2
                            ||
                            sale_token_info_0.status === 1,
                            "Sale is still on, can't withdraw from it");
    const buyerInfo_0 = { id:
                            this.#_local_secret_key_0(context, partialProofData),
                          amount: amountContributed_0 };
    const userCommitRegenerate_0 = this.#_generateCommit_0(context,
                                                           partialProofData,
                                                           buyerInfo_0,
                                                           sale_id_0);
    const path_0 = this.#_confirmContribution_0(context,
                                                partialProofData,
                                                userCommitRegenerate_0);
    let tmp_0;
    __compactRuntime.assert((tmp_0 = this.#_merkleTreePathRoot_0(context,
                                                                 partialProofData,
                                                                 path_0),
                             _descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(7n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(0n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      'root',
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_17.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_17.alignment() }).encode() } },
                                                                      'eq',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'You did not contribute to this sale');
    const totalReceived_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(3n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value;
    const withdrawalAmount_0 = this.#_calcAmountToWtihdrawFromOverflow_0(context,
                                                                         partialProofData,
                                                                         amountContributed_0,
                                                                         ((t1) => {
                                                                           if (t1 > 18446744073709551615n)
                                                                             throw new __compactRuntime.CompactError('launchpad.compact line 453 char 13: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                           return t1;
                                                                         })(totalReceived_0),
                                                                         ((t1) => {
                                                                           if (t1 > 18446744073709551615n)
                                                                             throw new __compactRuntime.CompactError('launchpad.compact line 454 char 13: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                           return t1;
                                                                         })(sale_token_info_0.totalAmountForSale),
                                                                         ((t1) => {
                                                                           if (t1 > 18446744073709551615n)
                                                                             throw new __compactRuntime.CompactError('launchpad.compact line 455 char 13: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                           return t1;
                                                                         })(sale_token_info_0.target));
    const refundAmount_0 = this.#_calcAmountToRefundFromOverflow_0(context,
                                                                   partialProofData,
                                                                   amountContributed_0,
                                                                   ((t1) => {
                                                                     if (t1 > 18446744073709551615n)
                                                                       throw new __compactRuntime.CompactError('launchpad.compact line 461 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                     return t1;
                                                                   })(totalReceived_0),
                                                                   ((t1) => {
                                                                     if (t1 > 18446744073709551615n)
                                                                       throw new __compactRuntime.CompactError('launchpad.compact line 462 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                     return t1;
                                                                   })(sale_token_info_0.totalAmountForSale),
                                                                   ((t1) => {
                                                                     if (t1 > 18446744073709551615n)
                                                                       throw new __compactRuntime.CompactError('launchpad.compact line 463 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                     return t1;
                                                                   })(sale_token_info_0.target));
    const sendResult_0 = this.#_send_0(context,
                                       partialProofData,
                                       _descriptor_9.fromValue(Contract._query(context,
                                                                               partialProofData,
                                                                               [
                                                                                { dup: { n: 0 } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_7.toValue(2n),
                                                                                                           alignment: _descriptor_7.alignment() } }] } },
                                                                                { idx: { cached: false,
                                                                                         pushPath: false,
                                                                                         path: [
                                                                                                { tag: 'value',
                                                                                                  value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                           alignment: _descriptor_0.alignment() } }] } },
                                                                                { popeq: { cached: false,
                                                                                           result: undefined } }]).value),
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     this.#_ownPublicKey_0(context,
                                                                           partialProofData)),
                                       withdrawalAmount_0);
    if (sendResult_0.change.is_some) {
      const tmp_1 = sendResult_0.change.value;
      const tmp_2 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_1),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_2),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_1),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const refundSendResult_0 = this.#_send_0(context,
                                             partialProofData,
                                             _descriptor_9.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_7.toValue(3n),
                                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                                                      { popeq: { cached: false,
                                                                                                 result: undefined } }]).value),
                                             this.#_left_0(context,
                                                           partialProofData,
                                                           this.#_ownPublicKey_0(context,
                                                                                 partialProofData)),
                                             refundAmount_0);
    if (refundSendResult_0.change.is_some) {
      const tmp_3 = sendResult_0.change.value;
      const tmp_4 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_3),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_4),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_3),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #_closeFixedSale_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(4n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Sale with this id does not exist');
    const sale_token_info_0 = _descriptor_15.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_6(sale_token_info_0.organizer,
                                           organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 0,
                            'Sale has ended already');
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    totalAmountSold: sale_token_info_0.totalAmountSold,
                    totalAmountLeft: sale_token_info_0.totalAmountLeft,
                    tokenSaleRatio: sale_token_info_0.tokenSaleRatio,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: 2,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(tmp_0),
                                                                            alignment: _descriptor_15.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_closeBatchSale_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(5n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Sale with this id does not exist');
    const sale_token_info_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(5n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_7(sale_token_info_0.organizer,
                                           organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 0,
                            'Sale has ended already');
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: 2,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(5n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_closeOverflowSale_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(6n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Sale with this id does not exist');
    const sale_token_info_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_8(sale_token_info_0.organizer,
                                           organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 0,
                            'Sale has ended already');
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    target: sale_token_info_0.target,
                    status: 2,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(6n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_organizerWIthdrawalFromFixedSale_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(4n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_15.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_9(sale_token_info_0.organizer,
                                           organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 2
                            ||
                            sale_token_info_0.status === 1,
                            "Sale is still on, can't withdraw from it");
    __compactRuntime.assert(sale_token_info_0.withdrawn === false,
                            'Funds from this sale has already been withdrawn!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(3n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale has not received any funds');
    const receivedAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(3n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    this.#_send_0(context,
                  partialProofData,
                  receivedAccount_0,
                  this.#_left_0(context,
                                partialProofData,
                                this.#_ownPublicKey_0(context, partialProofData)),
                  receivedAccount_0.value);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    totalAmountSold: sale_token_info_0.totalAmountSold,
                    totalAmountLeft: sale_token_info_0.totalAmountLeft,
                    tokenSaleRatio: sale_token_info_0.tokenSaleRatio,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: true,
                    timeUp: sale_token_info_0.timeUp };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(4n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_15.toValue(tmp_0),
                                                                            alignment: _descriptor_15.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_organizerWIthdrawalFromBatchSale_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(5n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_8.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(5n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_10(sale_token_info_0.organizer,
                                            organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 2
                            ||
                            sale_token_info_0.status === 1,
                            "Sale is still on, can't withdraw from it");
    __compactRuntime.assert(sale_token_info_0.withdrawn === false,
                            'Funds from this sale has already been withdrawn!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(3n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale has not received any funds');
    const receivedAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(3n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    this.#_send_0(context,
                  partialProofData,
                  receivedAccount_0,
                  this.#_left_0(context,
                                partialProofData,
                                this.#_ownPublicKey_0(context, partialProofData)),
                  receivedAccount_0.value);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_0 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: true,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(5n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_0),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_organizerWIthdrawalFromOverflowSale_0(context, partialProofData, sale_id_0)
  {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(6n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_11(sale_token_info_0.organizer,
                                            organizer_0),
                            'Unauthorized!. You are not the organizer');
    __compactRuntime.assert(sale_token_info_0.status === 2
                            ||
                            sale_token_info_0.status === 1,
                            "Sale is still on, can't withdraw from it");
    __compactRuntime.assert(sale_token_info_0.withdrawn === false,
                            'Funds from this sale has already been withdrawn!');
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(3n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale has not received any funds');
    const receivedAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_7.toValue(3n),
                                                                                                  alignment: _descriptor_7.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    const saleAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_7.toValue(2n),
                                                                                              alignment: _descriptor_7.alignment() } }] } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                              alignment: _descriptor_0.alignment() } }] } },
                                                                   { popeq: { cached: false,
                                                                              result: undefined } }]).value);
    const leftover_0 = this.#_calculateLeftover_0(context,
                                                  partialProofData,
                                                  ((t1) => {
                                                    if (t1 > 18446744073709551615n)
                                                      throw new __compactRuntime.CompactError('launchpad.compact line 581 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                    return t1;
                                                  })(sale_token_info_0.contribution),
                                                  ((t1) => {
                                                    if (t1 > 18446744073709551615n)
                                                      throw new __compactRuntime.CompactError('launchpad.compact line 582 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                    return t1;
                                                  })(sale_token_info_0.totalAmountForSale),
                                                  ((t1) => {
                                                    if (t1 > 18446744073709551615n)
                                                      throw new __compactRuntime.CompactError('launchpad.compact line 583 char 9: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                    return t1;
                                                  })(sale_token_info_0.target));
    const sendResult_0 = this.#_send_0(context,
                                       partialProofData,
                                       saleAccount_0,
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     this.#_ownPublicKey_0(context,
                                                                           partialProofData)),
                                       leftover_0);
    if (sendResult_0.change.is_some) {
      const tmp_0 = sendResult_0.change.value;
      const tmp_1 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_0),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_1),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_0),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const amountToWithdraw_0 = sale_token_info_0.target
                               >
                               sale_token_info_0.contribution
                               ?
                               sale_token_info_0.contribution :
                               sale_token_info_0.target;
    const withdrawalSendResult_0 = this.#_send_0(context,
                                                 partialProofData,
                                                 receivedAccount_0,
                                                 this.#_left_0(context,
                                                               partialProofData,
                                                               this.#_ownPublicKey_0(context,
                                                                                     partialProofData)),
                                                 amountToWithdraw_0);
    if (withdrawalSendResult_0.change.is_some) {
      const tmp_2 = withdrawalSendResult_0.change.value;
      const tmp_3 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_13.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_7.toValue(0n),
                                                                                                        alignment: _descriptor_7.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(3n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_11.toValue(tmp_2),
                                                                                alignment: _descriptor_11.alignment() },
                                                                              { value: _descriptor_14.toValue(tmp_3),
                                                                                alignment: _descriptor_14.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(1n),
                                                  alignment: _descriptor_7.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_11.toValue(tmp_2),
                                                                              alignment: _descriptor_11.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_7.toValue(2n),
                                                  alignment: _descriptor_7.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(3n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_4 = { projectName: sale_token_info_0.projectName,
                    tokenSymbol: sale_token_info_0.tokenSymbol,
                    acceptableTokenSymbol:
                      sale_token_info_0.acceptableTokenSymbol,
                    organizer: sale_token_info_0.organizer,
                    totalAmountForSale: sale_token_info_0.totalAmountForSale,
                    contribution: sale_token_info_0.contribution,
                    acceptableExchangeToken:
                      sale_token_info_0.acceptableExchangeToken,
                    target: sale_token_info_0.target,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    startTime: sale_token_info_0.startTime,
                    duration: sale_token_info_0.duration,
                    withdrawn: true,
                    timeUp: sale_token_info_0.timeUp,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(6n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_4),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_addNewKycedMember_0(context, partialProofData, oracle_public_key_0) {
    __compactRuntime.assert(!_descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_7.toValue(8n),
                                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(oracle_public_key_0),
                                                                                                                             alignment: _descriptor_0.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value),
                            'Can not add oracle pk: Already exist');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(8n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(oracle_public_key_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_removeNewKycedMember_0(context, partialProofData, oracle_public_key_0) {
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_7.toValue(8n),
                                                                                                alignment: _descriptor_7.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(oracle_public_key_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'Can not add oracle public key: Does not exist');
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_7.toValue(8n),
                                                alignment: _descriptor_7.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(oracle_public_key_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_public_key_0(context, partialProofData, sk_0) {
    return this.#_persistentHash_2(context,
                                   partialProofData,
                                   [new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 45, 108, 112, 58, 117, 115, 101, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    sk_0]);
  }
  #_folder_0(context, partialProofData, f, x, a0)
  {
    for (let i = 0; i < 100; i++) x = f(context, partialProofData, x, a0[i]);
    return x;
  }
  #_equal_0(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_3(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_4(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_6(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_8(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_9(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_10(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_11(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get unique_index() {
      return _descriptor_6.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_7.toValue(0n),
                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    get nonce() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_7.toValue(1n),
                                                                                 alignment: _descriptor_7.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    saleBank: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(2n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(2n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 9 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(2n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'launchpad.compact line 9 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(2n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_9.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    receivedBank: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(3n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(3n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 10 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(3n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'launchpad.compact line 10 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(3n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_9.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    openFixedTokenSales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 11 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(4n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'launchpad.compact line 11 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_15.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_7.toValue(4n),
                                                                                    alignment: _descriptor_7.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_0.toValue(key_0),
                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[4];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_15.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    openBatchTokenSales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(5n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(5n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 12 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(5n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'launchpad.compact line 12 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_8.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(5n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[5];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_8.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    openOverflowTokenSales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 13 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(6n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'launchpad.compact line 13 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_10.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_7.toValue(6n),
                                                                                    alignment: _descriptor_7.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_0.toValue(key_0),
                                                                                    alignment: _descriptor_0.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[6];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_10.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    contributors: {
      isFull(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isFull: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(7n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(1n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(1267650600228229401496703205376n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'lt',
                                                        'neg',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      checkRoot(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`checkRoot: expected 1 argument, received ${args_0.length}`);
        const rt_0 = args_0[0];
        if (!(typeof(rt_0) === 'object' && typeof(rt_0.field) === 'bigint' && rt_0.field >= 0 && rt_0.field <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('checkRoot',
                                      'argument 1',
                                      'launchpad.compact line 14 char 1',
                                      'struct MerkleTreeDigest<field: Field>',
                                      rt_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(7n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(0n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'root',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_17.toValue(rt_0),
                                                                                                               alignment: _descriptor_17.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      root(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`root: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[7];
        return new __compactRuntime.CompactTypeMerkleTreeDigest().fromValue(self_0.asArray()[0].asBoundedMerkleTree().root());
      },
      firstFree(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`first_free: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[7];
        return new __compactRuntime.CompactTypeField().fromValue(self_0.asArray()[1].asCell().value);
      },
      pathForLeaf(...args_0) {
        if (args_0.length !== 2)
          throw new __compactRuntime.CompactError(`path_for_leaf: expected 2 arguments, received ${args_0.length}`);
        const index_0 = args_0[0];
        const leaf_0 = args_0[1];
        if (!(typeof(index_0) === 'bigint' && index_0 >= 0 && index_0 <= __compactRuntime.MAX_FIELD))
          __compactRuntime.type_error('path_for_leaf',
                                      'argument 1',
                                      'launchpad.compact line 14 char 1',
                                      'Field',
                                      index_0)
        if (!(leaf_0.buffer instanceof ArrayBuffer && leaf_0.BYTES_PER_ELEMENT === 1 && leaf_0.length === 32))
          __compactRuntime.type_error('path_for_leaf',
                                      'argument 2',
                                      'launchpad.compact line 14 char 1',
                                      'Bytes<32>',
                                      leaf_0)
        const self_0 = state.asArray()[7];
        return new __compactRuntime.CompactTypeMerkleTreePath(100, _descriptor_0).fromValue(  self_0.asArray()[0].asBoundedMerkleTree().pathForLeaf(    index_0,    {      value: _descriptor_0.toValue(leaf_0),      alignment: _descriptor_0.alignment()    }  ).value);
      },
      findPathForLeaf(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`find_path_for_leaf: expected 1 argument, received ${args_0.length}`);
        const leaf_0 = args_0[0];
        if (!(leaf_0.buffer instanceof ArrayBuffer && leaf_0.BYTES_PER_ELEMENT === 1 && leaf_0.length === 32))
          __compactRuntime.type_error('find_path_for_leaf',
                                      'argument 1',
                                      'launchpad.compact line 14 char 1',
                                      'Bytes<32>',
                                      leaf_0)
        const self_0 = state.asArray()[7];
        return ((result) => result             ? new __compactRuntime.CompactTypeMerkleTreePath(100, _descriptor_0).fromValue(result)             : undefined)(  self_0.asArray()[0].asBoundedMerkleTree().findPathForLeaf(    {      value: _descriptor_0.toValue(leaf_0),      alignment: _descriptor_0.alignment()    }  )?.value);
      }
    },
    KYCedMembers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(8n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(0n),
                                                                                                               alignment: _descriptor_6.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(8n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'launchpad.compact line 15 char 1',
                                      'Bytes<32>',
                                      elem_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_7.toValue(8n),
                                                                                   alignment: _descriptor_7.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[8];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  local_secret_key: (...args) => undefined,
  generate_sale_id: (...args) => undefined,
  calculate_amount_to_buy: (...args) => undefined,
  calculate_time: (...args) => undefined,
  confirmContribution: (...args) => undefined,
  calcAmountToWtihdrawFromBatch: (...args) => undefined,
  calcAmountToWtihdrawFromOverflow: (...args) => undefined,
  calcAmountToRefundFromOverflow: (...args) => undefined,
  calculateLeftover: (...args) => undefined
});
const pureCircuits = {
  public_key: (...args_0) => _dummyContract.circuits.public_key(_emptyContext, ...args_0).result
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
