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

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_3 = new __compactRuntime.CompactTypeEnum(2, 1);

const _descriptor_4 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_5 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

const _descriptor_6 = new __compactRuntime.CompactTypeBoolean();

class _FixedSalesData_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment()))))))))))))));
  }
  fromValue(value_0) {
    return {
      organizer: _descriptor_0.fromValue(value_0),
      total_amount_for_sale: _descriptor_1.fromValue(value_0),
      total_amount_sold: _descriptor_1.fromValue(value_0),
      total_amount_left: _descriptor_1.fromValue(value_0),
      token_sale_ratio: _descriptor_2.fromValue(value_0),
      hard_cap: _descriptor_1.fromValue(value_0),
      acceptable_exchange_token: _descriptor_0.fromValue(value_0),
      status: _descriptor_3.fromValue(value_0),
      participant: _descriptor_4.fromValue(value_0),
      start_time: _descriptor_2.fromValue(value_0),
      duration: _descriptor_5.fromValue(value_0),
      min: _descriptor_2.fromValue(value_0),
      max: _descriptor_2.fromValue(value_0),
      withdrawn: _descriptor_6.fromValue(value_0),
      time_up: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.organizer).concat(_descriptor_1.toValue(value_0.total_amount_for_sale).concat(_descriptor_1.toValue(value_0.total_amount_sold).concat(_descriptor_1.toValue(value_0.total_amount_left).concat(_descriptor_2.toValue(value_0.token_sale_ratio).concat(_descriptor_1.toValue(value_0.hard_cap).concat(_descriptor_0.toValue(value_0.acceptable_exchange_token).concat(_descriptor_3.toValue(value_0.status).concat(_descriptor_4.toValue(value_0.participant).concat(_descriptor_2.toValue(value_0.start_time).concat(_descriptor_5.toValue(value_0.duration).concat(_descriptor_2.toValue(value_0.min).concat(_descriptor_2.toValue(value_0.max).concat(_descriptor_6.toValue(value_0.withdrawn).concat(_descriptor_6.toValue(value_0.time_up)))))))))))))));
  }
}

const _descriptor_7 = new _FixedSalesData_0();

class _BatchSalesData_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment())))))))))));
  }
  fromValue(value_0) {
    return {
      organizer: _descriptor_0.fromValue(value_0),
      total_amount_for_sale: _descriptor_1.fromValue(value_0),
      contribution: _descriptor_1.fromValue(value_0),
      acceptable_exchange_token: _descriptor_0.fromValue(value_0),
      status: _descriptor_3.fromValue(value_0),
      participant: _descriptor_4.fromValue(value_0),
      start_time: _descriptor_2.fromValue(value_0),
      duration: _descriptor_5.fromValue(value_0),
      withdrawn: _descriptor_6.fromValue(value_0),
      time_up: _descriptor_6.fromValue(value_0),
      min: _descriptor_2.fromValue(value_0),
      max: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.organizer).concat(_descriptor_1.toValue(value_0.total_amount_for_sale).concat(_descriptor_1.toValue(value_0.contribution).concat(_descriptor_0.toValue(value_0.acceptable_exchange_token).concat(_descriptor_3.toValue(value_0.status).concat(_descriptor_4.toValue(value_0.participant).concat(_descriptor_2.toValue(value_0.start_time).concat(_descriptor_5.toValue(value_0.duration).concat(_descriptor_6.toValue(value_0.withdrawn).concat(_descriptor_6.toValue(value_0.time_up).concat(_descriptor_2.toValue(value_0.min).concat(_descriptor_2.toValue(value_0.max))))))))))));
  }
}

const _descriptor_8 = new _BatchSalesData_0();

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_1.fromValue(value_0),
      mt_index: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_1.toValue(value_0.value).concat(_descriptor_2.toValue(value_0.mt_index))));
  }
}

const _descriptor_9 = new _QualifiedCoinInfo_0();

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_1.toValue(value_0.value)));
  }
}

const _descriptor_10 = new _CoinInfo_0();

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

const _descriptor_11 = new _ZswapCoinPublicKey_0();

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

const _descriptor_12 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_11.alignment().concat(_descriptor_12.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_6.fromValue(value_0),
      left: _descriptor_11.fromValue(value_0),
      right: _descriptor_12.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.is_left).concat(_descriptor_11.toValue(value_0.left).concat(_descriptor_12.toValue(value_0.right)));
  }
}

const _descriptor_13 = new _Either_0();

class _OverflowSalesData_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_6.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment()))))))))))));
  }
  fromValue(value_0) {
    return {
      organizer: _descriptor_0.fromValue(value_0),
      total_amount_for_sale: _descriptor_1.fromValue(value_0),
      contribution: _descriptor_1.fromValue(value_0),
      acceptable_exchange_token: _descriptor_0.fromValue(value_0),
      target: _descriptor_1.fromValue(value_0),
      status: _descriptor_3.fromValue(value_0),
      participant: _descriptor_4.fromValue(value_0),
      start_time: _descriptor_2.fromValue(value_0),
      duration: _descriptor_5.fromValue(value_0),
      withdrawn: _descriptor_6.fromValue(value_0),
      time_up: _descriptor_6.fromValue(value_0),
      min: _descriptor_2.fromValue(value_0),
      max: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.organizer).concat(_descriptor_1.toValue(value_0.total_amount_for_sale).concat(_descriptor_1.toValue(value_0.contribution).concat(_descriptor_0.toValue(value_0.acceptable_exchange_token).concat(_descriptor_1.toValue(value_0.target).concat(_descriptor_3.toValue(value_0.status).concat(_descriptor_4.toValue(value_0.participant).concat(_descriptor_2.toValue(value_0.start_time).concat(_descriptor_5.toValue(value_0.duration).concat(_descriptor_6.toValue(value_0.withdrawn).concat(_descriptor_6.toValue(value_0.time_up).concat(_descriptor_2.toValue(value_0.min).concat(_descriptor_2.toValue(value_0.max)))))))))))));
  }
}

const _descriptor_14 = new _OverflowSalesData_0();

const _descriptor_15 = new __compactRuntime.CompactTypeOpaqueString();

class _Maybe_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_6.fromValue(value_0),
      value: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.is_some).concat(_descriptor_10.toValue(value_0.value));
  }
}

const _descriptor_16 = new _Maybe_0();

class _SendResult_0 {
  alignment() {
    return _descriptor_16.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_16.fromValue(value_0),
      sent: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_16.toValue(value_0.change).concat(_descriptor_10.toValue(value_0.sent));
  }
}

const _descriptor_17 = new _SendResult_0();

const _descriptor_18 = new __compactRuntime.CompactTypeField();

const _descriptor_19 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_20 = new __compactRuntime.CompactTypeVector(2, _descriptor_18);

const _descriptor_21 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_10.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_21.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_10.fromValue(value_0),
      dataType: _descriptor_6.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_21.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_10.toValue(value_0.info).concat(_descriptor_6.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_21.toValue(value_0.domain_sep))));
  }
}

const _descriptor_22 = new _CoinPreimage_0();

const _descriptor_23 = new __compactRuntime.CompactTypeVector(3, _descriptor_18);

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
    if (typeof(witnesses_0.encodeBuyerHash) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named encodeBuyerHash');
    if (typeof(witnesses_0.decodeBuyerHash) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named decodeBuyerHash');
    if (typeof(witnesses_0.decodeBuyerHashOverflow) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named decodeBuyerHashOverflow');
    this.witnesses = witnesses_0;
    this.circuits = {
      create_token: (...args_1) => {
        if (args_1.length !== 5)
          throw new __compactRuntime.CompactError(`create_token: expected 5 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const token_name_0 = args_1[1];
        const total_amount_0 = args_1[2];
        const token_ticker_0 = args_1[3];
        const token_icon_0 = args_1[4];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('create_token',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 86 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(token_name_0.buffer instanceof ArrayBuffer && token_name_0.BYTES_PER_ELEMENT === 1 && token_name_0.length === 32))
          __compactRuntime.type_error('create_token',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 86 char 1',
                                      'Bytes<32>',
                                      token_name_0)
        if (!(typeof(total_amount_0) === 'bigint' && total_amount_0 >= 0 && total_amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('create_token',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 86 char 1',
                                      'Uint<0..18446744073709551615>',
                                      total_amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(token_name_0).concat(_descriptor_2.toValue(total_amount_0).concat(_descriptor_15.toValue(token_ticker_0).concat(_descriptor_15.toValue(token_icon_0)))),
            alignment: _descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_15.alignment().concat(_descriptor_15.alignment())))
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
                                               token_icon_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      open_fixed_sale: (...args_1) => {
        if (args_1.length !== 9)
          throw new __compactRuntime.CompactError(`open_fixed_sale: expected 9 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_ratio_0 = args_1[2];
        const acceptable_exchange_token_0 = args_1[3];
        const creation_time_0 = args_1[4];
        const sale_duration_0 = args_1[5];
        const min_0 = args_1[6];
        const max_0 = args_1[7];
        const token_hard_cap_0 = args_1[8];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(typeof(sale_ratio_0) === 'bigint' && sale_ratio_0 >= 0 && sale_ratio_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..18446744073709551615>',
                                      sale_ratio_0)
        if (!(acceptable_exchange_token_0.buffer instanceof ArrayBuffer && acceptable_exchange_token_0.BYTES_PER_ELEMENT === 1 && acceptable_exchange_token_0.length === 32))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Bytes<32>',
                                      acceptable_exchange_token_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        if (!(typeof(token_hard_cap_0) === 'bigint' && token_hard_cap_0 >= 0 && token_hard_cap_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_fixed_sale',
                                      'argument 8 (argument 9 as invoked from Typescript)',
                                      'launchpad.compact line 101 char 1',
                                      'Uint<0..18446744073709551615>',
                                      token_hard_cap_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_2.toValue(sale_ratio_0).concat(_descriptor_0.toValue(acceptable_exchange_token_0).concat(_descriptor_2.toValue(creation_time_0).concat(_descriptor_5.toValue(sale_duration_0).concat(_descriptor_2.toValue(min_0).concat(_descriptor_2.toValue(max_0).concat(_descriptor_2.toValue(token_hard_cap_0)))))))),
            alignment: _descriptor_10.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment())))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_open_fixed_sale_0(context,
                                                  partialProofData,
                                                  coin_0,
                                                  sale_ratio_0,
                                                  acceptable_exchange_token_0,
                                                  creation_time_0,
                                                  sale_duration_0,
                                                  min_0,
                                                  max_0,
                                                  token_hard_cap_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buy_from_fixed_price: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`buy_from_fixed_price: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        const sale_amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buy_from_fixed_price',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 139 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buy_from_fixed_price',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 139 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buy_from_fixed_price',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 139 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(sale_amount_0) === 'bigint' && sale_amount_0 >= 0 && sale_amount_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buy_from_fixed_price',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 139 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      sale_amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0).concat(_descriptor_1.toValue(sale_amount_0))),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buy_from_fixed_price_0(context,
                                                       partialProofData,
                                                       coin_0,
                                                       sale_id_0,
                                                       sale_amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      open_batch_sale: (...args_1) => {
        if (args_1.length !== 7)
          throw new __compactRuntime.CompactError(`open_batch_sale: expected 7 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const acceptable_exchange_token_0 = args_1[2];
        const creation_time_0 = args_1[3];
        const sale_duration_0 = args_1[4];
        const min_0 = args_1[5];
        const max_0 = args_1[6];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(acceptable_exchange_token_0.buffer instanceof ArrayBuffer && acceptable_exchange_token_0.BYTES_PER_ELEMENT === 1 && acceptable_exchange_token_0.length === 32))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'Bytes<32>',
                                      acceptable_exchange_token_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_batch_sale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 181 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(acceptable_exchange_token_0).concat(_descriptor_2.toValue(creation_time_0).concat(_descriptor_5.toValue(sale_duration_0).concat(_descriptor_2.toValue(min_0).concat(_descriptor_2.toValue(max_0)))))),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment())))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_open_batch_sale_0(context,
                                                  partialProofData,
                                                  coin_0,
                                                  acceptable_exchange_token_0,
                                                  creation_time_0,
                                                  sale_duration_0,
                                                  min_0,
                                                  max_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buy_from_batch_sale: (...args_1) => {
        if (args_1.length !== 4)
          throw new __compactRuntime.CompactError(`buy_from_batch_sale: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        const amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buy_from_batch_sale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 213 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buy_from_batch_sale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 213 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buy_from_batch_sale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 213 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('buy_from_batch_sale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 213 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0).concat(_descriptor_2.toValue(amount_0))),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buy_from_batch_sale_0(context,
                                                      partialProofData,
                                                      coin_0,
                                                      sale_id_0,
                                                      amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      open_overflow_sale: (...args_1) => {
        if (args_1.length !== 8)
          throw new __compactRuntime.CompactError(`open_overflow_sale: expected 8 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const acceptable_exchange_token_0 = args_1[2];
        const creation_time_0 = args_1[3];
        const sale_duration_0 = args_1[4];
        const target_0 = args_1[5];
        const min_0 = args_1[6];
        const max_0 = args_1[7];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(acceptable_exchange_token_0.buffer instanceof ArrayBuffer && acceptable_exchange_token_0.BYTES_PER_ELEMENT === 1 && acceptable_exchange_token_0.length === 32))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Bytes<32>',
                                      acceptable_exchange_token_0)
        if (!(typeof(creation_time_0) === 'bigint' && creation_time_0 >= 0 && creation_time_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Uint<0..18446744073709551615>',
                                      creation_time_0)
        if (!(typeof(sale_duration_0) === 'bigint' && sale_duration_0 >= 0 && sale_duration_0 <= 255n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Uint<0..255>',
                                      sale_duration_0)
        if (!(typeof(target_0) === 'bigint' && target_0 >= 0 && target_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 5 (argument 6 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      target_0)
        if (!(typeof(min_0) === 'bigint' && min_0 >= 0 && min_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 6 (argument 7 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Uint<0..18446744073709551615>',
                                      min_0)
        if (!(typeof(max_0) === 'bigint' && max_0 >= 0 && max_0 <= 18446744073709551615n))
          __compactRuntime.type_error('open_overflow_sale',
                                      'argument 7 (argument 8 as invoked from Typescript)',
                                      'launchpad.compact line 251 char 1',
                                      'Uint<0..18446744073709551615>',
                                      max_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(acceptable_exchange_token_0).concat(_descriptor_2.toValue(creation_time_0).concat(_descriptor_5.toValue(sale_duration_0).concat(_descriptor_1.toValue(target_0).concat(_descriptor_2.toValue(min_0).concat(_descriptor_2.toValue(max_0))))))),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment().concat(_descriptor_2.alignment().concat(_descriptor_5.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment()))))))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_open_overflow_sale_0(context,
                                                     partialProofData,
                                                     coin_0,
                                                     acceptable_exchange_token_0,
                                                     creation_time_0,
                                                     sale_duration_0,
                                                     target_0,
                                                     min_0,
                                                     max_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buy_from_overflow_sale: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`buy_from_overflow_sale: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const sale_id_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('buy_from_overflow_sale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 285 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('buy_from_overflow_sale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 285 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('buy_from_overflow_sale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 285 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_10.toValue(coin_0).concat(_descriptor_0.toValue(sale_id_0)),
            alignment: _descriptor_10.alignment().concat(_descriptor_0.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_buy_from_overflow_sale_0(context,
                                                         partialProofData,
                                                         coin_0,
                                                         sale_id_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdrawal_from_batch: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`withdrawal_from_batch: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const amount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdrawal_from_batch',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 321 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('withdrawal_from_batch',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 321 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('withdrawal_from_batch',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 321 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_2.toValue(amount_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdrawal_from_batch_0(context,
                                                        partialProofData,
                                                        sale_id_0,
                                                        amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdraw_from_overflow: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`withdraw_from_overflow: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const amount_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdraw_from_overflow',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 349 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('withdraw_from_overflow',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 349 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0 && amount_0 <= 18446744073709551615n))
          __compactRuntime.type_error('withdraw_from_overflow',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 349 char 1',
                                      'Uint<0..18446744073709551615>',
                                      amount_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_2.toValue(amount_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdraw_from_overflow_0(context,
                                                         partialProofData,
                                                         sale_id_0,
                                                         amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      closeSale: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`closeSale: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        const sale_type_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('closeSale',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 385 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('closeSale',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 385 char 1',
                                      'Bytes<32>',
                                      sale_id_0)
        if (!(typeof(sale_type_0) === 'bigint' && sale_type_0 >= 0 && sale_type_0 <= 255n))
          __compactRuntime.type_error('closeSale',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'launchpad.compact line 385 char 1',
                                      'Uint<0..255>',
                                      sale_type_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(sale_id_0).concat(_descriptor_5.toValue(sale_type_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_5.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_closeSale_0(context,
                                            partialProofData,
                                            sale_id_0,
                                            sale_type_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      organizers_withdrawal: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`organizers_withdrawal: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sale_id_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('organizers_withdrawal',
                                      'argument 1 (as invoked from Typescript)',
                                      'launchpad.compact line 412 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sale_id_0.buffer instanceof ArrayBuffer && sale_id_0.BYTES_PER_ELEMENT === 1 && sale_id_0.length === 32))
          __compactRuntime.type_error('organizers_withdrawal',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 412 char 1',
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
        const result_0 = this.#_organizers_withdrawal_0(context,
                                                        partialProofData,
                                                        sale_id_0);
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
                                      'launchpad.compact line 433 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32))
          __compactRuntime.type_error('public_key',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'launchpad.compact line 433 char 1',
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
      open_fixed_sale: this.circuits.open_fixed_sale,
      buy_from_fixed_price: this.circuits.buy_from_fixed_price,
      open_batch_sale: this.circuits.open_batch_sale,
      buy_from_batch_sale: this.circuits.buy_from_batch_sale,
      open_overflow_sale: this.circuits.open_overflow_sale,
      buy_from_overflow_sale: this.circuits.buy_from_overflow_sale,
      withdrawal_from_batch: this.circuits.withdrawal_from_batch,
      withdraw_from_overflow: this.circuits.withdraw_from_overflow,
      closeSale: this.circuits.closeSale,
      organizers_withdrawal: this.circuits.organizers_withdrawal
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
                                  'launchpad.compact line 71 char 1',
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
    state_0.setOperation('open_fixed_sale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buy_from_fixed_price', new __compactRuntime.ContractOperation());
    state_0.setOperation('open_batch_sale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buy_from_batch_sale', new __compactRuntime.ContractOperation());
    state_0.setOperation('open_overflow_sale', new __compactRuntime.ContractOperation());
    state_0.setOperation('buy_from_overflow_sale', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdrawal_from_batch', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdraw_from_overflow', new __compactRuntime.ContractOperation());
    state_0.setOperation('closeSale', new __compactRuntime.ContractOperation());
    state_0.setOperation('organizers_withdrawal', new __compactRuntime.ContractOperation());
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
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(0n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(1n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(2n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(3n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(4n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(5n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(6n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(7n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(8n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(1n),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
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
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_4.toValue(tmp_0),
                                              alignment: _descriptor_4.alignment() }
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
    const result_0 = __compactRuntime.transientHash(_descriptor_23, value_0);
    return result_0;
  }
  #_transientHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_20, value_0);
    return result_0;
  }
  #_persistentHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_22, value_0);
    return result_0;
  }
  #_persistentHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_19, value_0);
    return result_0;
  }
  #_persistentCommit_0(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_19,
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
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_11.toValue(result_0),
      alignment: _descriptor_11.alignment()
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
                                          _descriptor_12.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 2 } },
                                                                                    { idx: { cached: true,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_5.toValue(0n),
                                                                                                               alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(4n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(value_0),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
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
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                       _descriptor_12.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 2 } },
                                                                                 { idx: { cached: true,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_5.toValue(0n),
                                                                                                            alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
    const selfAddr_0 = _descriptor_12.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_5.toValue(0n),
                                                                                            alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
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
                                         value: { value: _descriptor_5.toValue(1n),
                                                  alignment: _descriptor_5.alignment() } }] } },
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
    const selfAddr_0 = _descriptor_12.fromValue(Contract._query(context,
                                                                partialProofData,
                                                                [
                                                                 { dup: { n: 2 } },
                                                                 { idx: { cached: true,
                                                                          pushPath: false,
                                                                          path: [
                                                                                 { tag: 'value',
                                                                                   value: { value: _descriptor_5.toValue(0n),
                                                                                            alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
    return this.#_persistentHash_0(context,
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
    return this.#_persistentHash_0(context,
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
                                  'launchpad.compact line 77 char 1',
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
                                  'launchpad.compact line 78 char 1',
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
                                  'launchpad.compact line 79 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  #_calculate_time_0(context, partialProofData, start_time_0, duration_0) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.calculate_time(witnessContext_0,
                                                                         start_time_0,
                                                                         duration_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'boolean'))
      __compactRuntime.type_error('calculate_time',
                                  'return value',
                                  'launchpad.compact line 80 char 1',
                                  'Boolean',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_encodeBuyerHash_0(context,
                      partialProofData,
                      pk_0,
                      withdrawal_state_0,
                      amount_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.encodeBuyerHash(witnessContext_0,
                                                                          pk_0,
                                                                          withdrawal_state_0,
                                                                          amount_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32))
      __compactRuntime.type_error('encodeBuyerHash',
                                  'return value',
                                  'launchpad.compact line 81 char 1',
                                  'Bytes<32>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  #_decodeBuyerHash_0(context,
                      partialProofData,
                      encrypt_0,
                      totalReceived_0,
                      totalForSale_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.decodeBuyerHash(witnessContext_0,
                                                                          encrypt_0,
                                                                          totalReceived_0,
                                                                          totalForSale_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('decodeBuyerHash',
                                  'return value',
                                  'launchpad.compact line 82 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_2.toValue(result_0),
      alignment: _descriptor_2.alignment()
    });
    return result_0;
  }
  #_decodeBuyerHashOverflow_0(context,
                              partialProofData,
                              encrypt_0,
                              totalReceived_0,
                              totalForSale_0,
                              targetAmount_0,
                              returnType_0)
  {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.decodeBuyerHashOverflow(witnessContext_0,
                                                                                  encrypt_0,
                                                                                  totalReceived_0,
                                                                                  totalForSale_0,
                                                                                  targetAmount_0,
                                                                                  returnType_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'bigint' && result_0 >= 0 && result_0 <= 18446744073709551615n))
      __compactRuntime.type_error('decodeBuyerHashOverflow',
                                  'return value',
                                  'launchpad.compact line 83 char 1',
                                  'Uint<0..18446744073709551615>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_2.toValue(result_0),
      alignment: _descriptor_2.alignment()
    });
    return result_0;
  }
  #_create_token_0(context,
                   partialProofData,
                   token_name_0,
                   total_amount_0,
                   token_ticker_0,
                   token_icon_0)
  {
    __compactRuntime.assert(total_amount_0 >= 10n, 'token must be atleast 10');
    const new_nonce_0 = this.#_evolveNonce_0(context,
                                             partialProofData,
                                             _descriptor_2.fromValue(Contract._query(context,
                                                                                     partialProofData,
                                                                                     [
                                                                                      { dup: { n: 0 } },
                                                                                      { idx: { cached: false,
                                                                                               pushPath: false,
                                                                                               path: [
                                                                                                      { tag: 'value',
                                                                                                        value: { value: _descriptor_5.toValue(0n),
                                                                                                                 alignment: _descriptor_5.alignment() } }] } },
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
                                                                                                        value: { value: _descriptor_5.toValue(1n),
                                                                                                                 alignment: _descriptor_5.alignment() } }] } },
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
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(0n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_4.toValue(tmp_0),
                                              alignment: _descriptor_4.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_open_fixed_sale_0(context,
                      partialProofData,
                      coin_0,
                      sale_ratio_0,
                      acceptable_exchange_token_0,
                      creation_time_0,
                      sale_duration_0,
                      min_0,
                      max_0,
                      token_hard_cap_0)
  {
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
    const tmp_0 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(coin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_0),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(coin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_1 = { organizer: organizer_0,
                    total_amount_for_sale: coin_0.value,
                    total_amount_sold: 0n,
                    total_amount_left: coin_0.value,
                    token_sale_ratio: sale_ratio_0,
                    hard_cap: token_hard_cap_0,
                    acceptable_exchange_token: acceptable_exchange_token_0,
                    status: 0,
                    participant: 0n,
                    start_time: creation_time_0,
                    duration: sale_duration_0,
                    min: min_0,
                    max: max_0,
                    withdrawn: false,
                    time_up: false };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(4n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_1),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buy_from_fixed_price_0(context,
                           partialProofData,
                           coin_0,
                           sale_id_0,
                           sale_amount_0)
  {
    __compactRuntime.assert(sale_amount_0 > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(4n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "There's currently no fixed sale for this token!");
    const sale_token_info_0 = _descriptor_7.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_5.toValue(4n),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
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
                                                             sale_token_info_0.token_sale_ratio);
    __compactRuntime.assert(amount_to_buy_0
                            <=
                            sale_token_info_0.total_amount_left,
                            'Amount is greater than amount left!');
    __compactRuntime.assert(this.#_equal_2(coin_0.color,
                                           sale_token_info_0.acceptable_exchange_token),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.start_time,
                                                sale_token_info_0.duration);
    const tmp_0 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    total_amount_sold: sale_token_info_0.total_amount_sold,
                    total_amount_left: sale_token_info_0.total_amount_left,
                    token_sale_ratio: sale_token_info_0.token_sale_ratio,
                    hard_cap: sale_token_info_0.hard_cap,
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: is_closed_0 && true };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(4n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!is_closed_0,
                            'This sale has been completed or closed');
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_6.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_5.toValue(3n),
                                                                                          alignment: _descriptor_5.alignment() } }] } },
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
                                                                                                             value: { value: _descriptor_5.toValue(3n),
                                                                                                                      alignment: _descriptor_5.alignment() } }] } },
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
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(3n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(newCoin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_1),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(newCoin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
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
                                                                                     value: { value: _descriptor_5.toValue(2n),
                                                                                              alignment: _descriptor_5.alignment() } }] } },
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
                                   _descriptor_12.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_5.toValue(0n),
                                                                                                        alignment: _descriptor_5.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_10.toValue(tmp_2),
                                                                                alignment: _descriptor_10.alignment() },
                                                                              { value: _descriptor_13.toValue(tmp_3),
                                                                                alignment: _descriptor_13.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(1n),
                                                  alignment: _descriptor_5.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_2),
                                                                              alignment: _descriptor_10.alignment() }).encode() } },
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
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const new_total_sold_0 = sale_token_info_0.total_amount_sold
                             +
                             amount_to_buy_0;
    let t_0;
    const new_total_left_0 = (t_0 = sale_token_info_0.total_amount_left,
                              (__compactRuntime.assert(!(t_0 < amount_to_buy_0),
                                                       'result of subtraction would be negative'),
                               t_0 - amount_to_buy_0));
    const participant_amount_0 = sale_token_info_0.participant + 1n;
    const tmp_4 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    total_amount_sold:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 173 char 28: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(new_total_sold_0),
                    total_amount_left: new_total_left_0,
                    token_sale_ratio: sale_token_info_0.token_sale_ratio,
                    hard_cap: sale_token_info_0.hard_cap,
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    status:
                      this.#_equal_3(sale_token_info_0.total_amount_sold,
                                     sale_token_info_0.total_amount_for_sale)
                      ?
                      1 :
                      0,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 176 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(participant_amount_0),
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: sale_token_info_0.time_up };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(4n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_4),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_open_batch_sale_0(context,
                      partialProofData,
                      coin_0,
                      acceptable_exchange_token_0,
                      creation_time_0,
                      sale_duration_0,
                      min_0,
                      max_0)
  {
    this.#_receive_0(context, partialProofData, coin_0);
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    const sale_id_0 = this.#_generate_sale_id_0(context, partialProofData);
    const tmp_0 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(coin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_0),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(coin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_1 = { organizer: organizer_0,
                    total_amount_for_sale: coin_0.value,
                    contribution: 0n,
                    acceptable_exchange_token: acceptable_exchange_token_0,
                    status: 0,
                    participant: 0n,
                    start_time: creation_time_0,
                    duration: sale_duration_0,
                    withdrawn: false,
                    time_up: false,
                    min: min_0,
                    max: max_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(5n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                            alignment: _descriptor_8.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buy_from_batch_sale_0(context, partialProofData, coin_0, sale_id_0, amount_0)
  {
    __compactRuntime.assert(coin_0.value > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(5n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
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
                                                                                         value: { value: _descriptor_5.toValue(5n),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                  alignment: _descriptor_0.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_4(coin_0.color,
                                           sale_token_info_0.acceptable_exchange_token),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.start_time,
                                                sale_token_info_0.duration);
    const tmp_0 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    contribution: sale_token_info_0.contribution,
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    status: 1,
                    participant: sale_token_info_0.participant,
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: is_closed_0,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(5n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
    const contributor_0 = this.#_public_key_0(context,
                                              partialProofData,
                                              this.#_local_secret_key_0(context,
                                                                        partialProofData));
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_6.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_5.toValue(3n),
                                                                                          alignment: _descriptor_5.alignment() } }] } },
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
                                                                                                             value: { value: _descriptor_5.toValue(3n),
                                                                                                                      alignment: _descriptor_5.alignment() } }] } },
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
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(3n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(newCoin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_1),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(newCoin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const buyer_encode_0 = this.#_encodeBuyerHash_0(context,
                                                    partialProofData,
                                                    contributor_0,
                                                    false,
                                                    amount_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(7n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(buyer_encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    const tmp_2 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    contribution:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 244 char 23: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(sale_token_info_0.contribution + amount_0),
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    status: sale_token_info_0.status,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 245 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(sale_token_info_0.participant + 1n),
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: sale_token_info_0.time_up,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(5n),
                                                alignment: _descriptor_5.alignment() } }] } },
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
  #_open_overflow_sale_0(context,
                         partialProofData,
                         coin_0,
                         acceptable_exchange_token_0,
                         creation_time_0,
                         sale_duration_0,
                         target_0,
                         min_0,
                         max_0)
  {
    this.#_receive_0(context, partialProofData, coin_0);
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    const sale_id_0 = this.#_generate_sale_id_0(context, partialProofData);
    const tmp_0 = this.#_right_0(context,
                                 partialProofData,
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(2n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(coin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_0),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(coin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_1 = { organizer: organizer_0,
                    total_amount_for_sale: coin_0.value,
                    contribution: 0n,
                    acceptable_exchange_token: acceptable_exchange_token_0,
                    target: target_0,
                    status: 0,
                    participant: 0n,
                    start_time: creation_time_0,
                    duration: sale_duration_0,
                    withdrawn: false,
                    time_up: false,
                    min: min_0,
                    max: max_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(6n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(tmp_1),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_buy_from_overflow_sale_0(context, partialProofData, coin_0, sale_id_0) {
    __compactRuntime.assert(coin_0.value > 0n,
                            'Amount to buy must be greater than 0!');
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(6n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale does not exist');
    const sale_token_info_0 = _descriptor_14.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_5.toValue(6n),
                                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                                        { popeq: { cached: false,
                                                                                   result: undefined } }]).value);
    __compactRuntime.assert(this.#_equal_5(coin_0.color,
                                           sale_token_info_0.acceptable_exchange_token),
                            'This token color is not acceptable by organizer');
    const is_closed_0 = this.#_calculate_time_0(context,
                                                partialProofData,
                                                sale_token_info_0.start_time,
                                                sale_token_info_0.duration);
    const tmp_0 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    contribution: sale_token_info_0.contribution,
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    target: sale_token_info_0.target,
                    status: 1,
                    participant: sale_token_info_0.participant,
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: is_closed_0,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(6n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(tmp_0),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    __compactRuntime.assert(!is_closed_0 || sale_token_info_0.status === 2,
                            'This sale has been completed or closed');
    const contributor_0 = this.#_public_key_0(context,
                                              partialProofData,
                                              this.#_local_secret_key_0(context,
                                                                        partialProofData));
    this.#_receive_0(context, partialProofData, coin_0);
    const newCoin_0 = _descriptor_6.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_5.toValue(3n),
                                                                                          alignment: _descriptor_5.alignment() } }] } },
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
                                                                                                             value: { value: _descriptor_5.toValue(3n),
                                                                                                                      alignment: _descriptor_5.alignment() } }] } },
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
                                 _descriptor_12.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 2 } },
                                                                           { idx: { cached: true,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(0n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(3n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 5 } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                            { value: _descriptor_10.toValue(newCoin_0),
                                                                              alignment: _descriptor_10.alignment() },
                                                                            { value: _descriptor_13.toValue(tmp_1),
                                                                              alignment: _descriptor_13.alignment() }
                                                                          )).encode() } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(1n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'stack' }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(newCoin_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     { concat: { cached: true, n: 91 } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    const buyer_encode_0 = this.#_encodeBuyerHash_0(context,
                                                    partialProofData,
                                                    contributor_0,
                                                    false,
                                                    ((t1) => {
                                                      if (t1 > 18446744073709551615n)
                                                        throw new __compactRuntime.CompactError('launchpad.compact line 308 char 71: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                      return t1;
                                                    })(coin_0.value));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(8n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(buyer_encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    const tmp_2 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    contribution:
                      ((t1) => {
                        if (t1 > 340282366920938463463374607431768211455n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 314 char 23: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                        return t1;
                      })(sale_token_info_0.contribution + coin_0.value),
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    target: sale_token_info_0.target,
                    status: sale_token_info_0.status,
                    participant:
                      ((t1) => {
                        if (t1 > 65535n)
                          throw new __compactRuntime.CompactError('launchpad.compact line 315 char 22: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 65535');
                        return t1;
                      })(sale_token_info_0.participant + 1n),
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    withdrawn: sale_token_info_0.withdrawn,
                    time_up: sale_token_info_0.time_up,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(6n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(tmp_2),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_withdrawal_from_batch_0(context, partialProofData, sale_id_0, amount_0) {
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(5n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
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
                                                                                         value: { value: _descriptor_5.toValue(5n),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
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
    const person_0 = this.#_public_key_0(context,
                                         partialProofData,
                                         this.#_local_secret_key_0(context,
                                                                   partialProofData));
    const encode_0 = this.#_encodeBuyerHash_0(context,
                                              partialProofData,
                                              person_0,
                                              false,
                                              amount_0);
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(7n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(encode_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'You did not contribute to this sale');
    const totalReceived_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(3n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value;
    const withdrawal_amount_0 = this.#_decodeBuyerHash_0(context,
                                                         partialProofData,
                                                         encode_0,
                                                         ((t1) => {
                                                           if (t1 > 18446744073709551615n)
                                                             throw new __compactRuntime.CompactError('launchpad.compact line 331 char 64: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                           return t1;
                                                         })(totalReceived_0),
                                                         ((t1) => {
                                                           if (t1 > 18446744073709551615n)
                                                             throw new __compactRuntime.CompactError('launchpad.compact line 331 char 91: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                           return t1;
                                                         })(sale_token_info_0.total_amount_for_sale));
    __compactRuntime.assert(withdrawal_amount_0 > 0n,
                            "You've already withdrawn from this sale.");
    const storeAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_5.toValue(2n),
                                                                                               alignment: _descriptor_5.alignment() } }] } },
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
                                       storeAccount_0,
                                       this.#_left_0(context,
                                                     partialProofData,
                                                     this.#_ownPublicKey_0(context,
                                                                           partialProofData)),
                                       withdrawal_amount_0);
    if (sendResult_0.change.is_some) {
      const tmp_0 = sendResult_0.change.value;
      const tmp_1 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_12.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_5.toValue(0n),
                                                                                                        alignment: _descriptor_5.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_10.toValue(tmp_0),
                                                                                alignment: _descriptor_10.alignment() },
                                                                              { value: _descriptor_13.toValue(tmp_1),
                                                                                alignment: _descriptor_13.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(1n),
                                                  alignment: _descriptor_5.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                              alignment: _descriptor_10.alignment() }).encode() } },
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
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(7n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 2 } }]);
    const new_encode_0 = this.#_encodeBuyerHash_0(context,
                                                  partialProofData,
                                                  person_0,
                                                  true,
                                                  amount_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(7n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new_encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    return [];
  }
  #_withdraw_from_overflow_0(context, partialProofData, sale_id_0, amount_0) {
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(6n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_14.fromValue(Contract._query(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_5.toValue(6n),
                                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
    const person_0 = this.#_public_key_0(context,
                                         partialProofData,
                                         this.#_local_secret_key_0(context,
                                                                   partialProofData));
    const encode_0 = this.#_encodeBuyerHash_0(context,
                                              partialProofData,
                                              person_0,
                                              false,
                                              amount_0);
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(7n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(encode_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'You did not contribute to this sale');
    const totalReceived_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(3n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                alignment: _descriptor_0.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value;
    const withdrawal_amount_0 = this.#_decodeBuyerHashOverflow_0(context,
                                                                 partialProofData,
                                                                 encode_0,
                                                                 ((t1) => {
                                                                   if (t1 > 18446744073709551615n)
                                                                     throw new __compactRuntime.CompactError('launchpad.compact line 360 char 72: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                   return t1;
                                                                 })(totalReceived_0),
                                                                 ((t1) => {
                                                                   if (t1 > 18446744073709551615n)
                                                                     throw new __compactRuntime.CompactError('launchpad.compact line 360 char 99: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                   return t1;
                                                                 })(sale_token_info_0.total_amount_for_sale),
                                                                 ((t1) => {
                                                                   if (t1 > 18446744073709551615n)
                                                                     throw new __compactRuntime.CompactError('launchpad.compact line 360 char 150: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                                   return t1;
                                                                 })(sale_token_info_0.target),
                                                                 new Uint8Array([116, 111, 107, 101, 110, 115]));
    const refund_amount_0 = this.#_decodeBuyerHashOverflow_0(context,
                                                             partialProofData,
                                                             encode_0,
                                                             ((t1) => {
                                                               if (t1 > 18446744073709551615n)
                                                                 throw new __compactRuntime.CompactError('launchpad.compact line 362 char 68: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                               return t1;
                                                             })(totalReceived_0),
                                                             ((t1) => {
                                                               if (t1 > 18446744073709551615n)
                                                                 throw new __compactRuntime.CompactError('launchpad.compact line 362 char 95: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                               return t1;
                                                             })(sale_token_info_0.total_amount_for_sale),
                                                             ((t1) => {
                                                               if (t1 > 18446744073709551615n)
                                                                 throw new __compactRuntime.CompactError('launchpad.compact line 362 char 146: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 18446744073709551615');
                                                               return t1;
                                                             })(sale_token_info_0.target),
                                                             new Uint8Array([114, 101, 102, 117, 110, 100]));
    __compactRuntime.assert(withdrawal_amount_0 > 0n,
                            "You've already withdrawn from this sale.");
    const saleAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_5.toValue(2n),
                                                                                              alignment: _descriptor_5.alignment() } }] } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                              alignment: _descriptor_0.alignment() } }] } },
                                                                   { popeq: { cached: false,
                                                                              result: undefined } }]).value);
    const receiveAccount_0 = _descriptor_9.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_5.toValue(3n),
                                                                                                 alignment: _descriptor_5.alignment() } }] } },
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
                                       withdrawal_amount_0);
    if (sendResult_0.change.is_some) {
      const tmp_0 = sendResult_0.change.value;
      const tmp_1 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_12.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_5.toValue(0n),
                                                                                                        alignment: _descriptor_5.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_10.toValue(tmp_0),
                                                                                alignment: _descriptor_10.alignment() },
                                                                              { value: _descriptor_13.toValue(tmp_1),
                                                                                alignment: _descriptor_13.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(1n),
                                                  alignment: _descriptor_5.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_0),
                                                                              alignment: _descriptor_10.alignment() }).encode() } },
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
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { rem: { cached: false } },
                       { ins: { cached: true, n: 1 } }]);
    }
    const refundSendResult_0 = this.#_send_0(context,
                                             partialProofData,
                                             receiveAccount_0,
                                             this.#_left_0(context,
                                                           partialProofData,
                                                           this.#_ownPublicKey_0(context,
                                                                                 partialProofData)),
                                             refund_amount_0);
    if (refundSendResult_0.change.is_some) {
      const tmp_2 = sendResult_0.change.value;
      const tmp_3 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_12.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_5.toValue(0n),
                                                                                                        alignment: _descriptor_5.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { dup: { n: 5 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_10.toValue(tmp_2),
                                                                                alignment: _descriptor_10.alignment() },
                                                                              { value: _descriptor_13.toValue(tmp_3),
                                                                                alignment: _descriptor_13.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(1n),
                                                  alignment: _descriptor_5.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(tmp_2),
                                                                              alignment: _descriptor_10.alignment() }).encode() } },
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
                                         value: { value: _descriptor_5.toValue(2n),
                                                  alignment: _descriptor_5.alignment() } }] } },
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
                                       value: { value: _descriptor_5.toValue(7n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 2 } }]);
    const new_encode_0 = this.#_encodeBuyerHash_0(context,
                                                  partialProofData,
                                                  person_0,
                                                  true,
                                                  amount_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(7n),
                                                alignment: _descriptor_5.alignment() } },
                                     { tag: 'value',
                                       value: { value: _descriptor_0.toValue(sale_id_0),
                                                alignment: _descriptor_0.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new_encode_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 2 } }]);
    return [];
  }
  #_closeSale_0(context, partialProofData, sale_id_0, sale_type_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    if (this.#_equal_6(sale_type_0, 1n)) {
      __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_5.toValue(4n),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
                                                                       { push: { storage: false,
                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                       'member',
                                                                       { popeq: { cached: true,
                                                                                  result: undefined } }]).value),
                              'Sale with this id does not exist');
      const sale_token_info_0 = _descriptor_7.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_5.toValue(4n),
                                                                                                    alignment: _descriptor_5.alignment() } }] } },
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
      const tmp_0 = { organizer: sale_token_info_0.organizer,
                      total_amount_for_sale:
                        sale_token_info_0.total_amount_for_sale,
                      total_amount_sold: sale_token_info_0.total_amount_sold,
                      total_amount_left: sale_token_info_0.total_amount_left,
                      token_sale_ratio: sale_token_info_0.token_sale_ratio,
                      hard_cap: sale_token_info_0.hard_cap,
                      acceptable_exchange_token:
                        sale_token_info_0.acceptable_exchange_token,
                      status: 2,
                      participant: sale_token_info_0.participant,
                      start_time: sale_token_info_0.start_time,
                      duration: sale_token_info_0.duration,
                      min: sale_token_info_0.min,
                      max: sale_token_info_0.max,
                      withdrawn: sale_token_info_0.withdrawn,
                      time_up: sale_token_info_0.time_up };
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_5.toValue(4n),
                                                  alignment: _descriptor_5.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                              alignment: _descriptor_7.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      if (this.#_equal_8(sale_type_0, 2n)) {
        __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_5.toValue(5n),
                                                                                                    alignment: _descriptor_5.alignment() } }] } },
                                                                         { push: { storage: false,
                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                                                         'member',
                                                                         { popeq: { cached: true,
                                                                                    result: undefined } }]).value),
                                'Sale with this id does not exist');
        const sale_token_info_1 = _descriptor_8.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(5n),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_0.toValue(sale_id_0),
                                                                                                      alignment: _descriptor_0.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value);
        __compactRuntime.assert(this.#_equal_9(sale_token_info_1.organizer,
                                               organizer_0),
                                'Unauthorized!. You are not the organizer');
        __compactRuntime.assert(sale_token_info_1.status === 0,
                                'Sale has ended already');
        const tmp_1 = { organizer: sale_token_info_1.organizer,
                        total_amount_for_sale:
                          sale_token_info_1.total_amount_for_sale,
                        contribution: sale_token_info_1.contribution,
                        acceptable_exchange_token:
                          sale_token_info_1.acceptable_exchange_token,
                        status: 2,
                        participant: sale_token_info_1.participant,
                        start_time: sale_token_info_1.start_time,
                        duration: sale_token_info_1.duration,
                        withdrawn: sale_token_info_1.withdrawn,
                        time_up: sale_token_info_1.time_up,
                        min: sale_token_info_1.min,
                        max: sale_token_info_1.max };
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_5.toValue(5n),
                                                    alignment: _descriptor_5.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(tmp_1),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      }
    }
    return [];
  }
  #_organizers_withdrawal_0(context, partialProofData, sale_id_0) {
    const organizer_0 = this.#_public_key_0(context,
                                            partialProofData,
                                            this.#_local_secret_key_0(context,
                                                                      partialProofData));
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(4n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            "This sale doesn't exist existed!");
    const sale_token_info_0 = _descriptor_7.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_5.toValue(4n),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
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
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_5.toValue(3n),
                                                                                                alignment: _descriptor_5.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'This sale has not received any funds');
    const account_0 = _descriptor_9.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_5.toValue(3n),
                                                                                          alignment: _descriptor_5.alignment() } }] } },
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
                  account_0,
                  this.#_left_0(context,
                                partialProofData,
                                this.#_ownPublicKey_0(context, partialProofData)),
                  account_0.value);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(3n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { rem: { cached: false } },
                     { ins: { cached: true, n: 1 } }]);
    const tmp_0 = { organizer: sale_token_info_0.organizer,
                    total_amount_for_sale:
                      sale_token_info_0.total_amount_for_sale,
                    total_amount_sold: sale_token_info_0.total_amount_sold,
                    total_amount_left: sale_token_info_0.total_amount_left,
                    token_sale_ratio: sale_token_info_0.token_sale_ratio,
                    hard_cap: sale_token_info_0.hard_cap,
                    acceptable_exchange_token:
                      sale_token_info_0.acceptable_exchange_token,
                    status: sale_token_info_0.status,
                    participant: sale_token_info_0.participant,
                    start_time: sale_token_info_0.start_time,
                    duration: sale_token_info_0.duration,
                    min: sale_token_info_0.min,
                    max: sale_token_info_0.max,
                    withdrawn: true,
                    time_up: sale_token_info_0.time_up };
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_5.toValue(4n),
                                                alignment: _descriptor_5.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(sale_id_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_public_key_0(context, partialProofData, sk_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   [new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 45, 108, 112, 58, 117, 115, 101, 114, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    sk_0]);
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
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_8(x0, y0) {
    if (x0 !== y0) return false;
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
      return _descriptor_2.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(0n),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
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
                                                                        value: { value: _descriptor_5.toValue(1n),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    sales_bank: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(2n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(2n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(2n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                                                          value: { value: _descriptor_5.toValue(2n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
    received_bank: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(3n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(3n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(3n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                                                          value: { value: _descriptor_5.toValue(3n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
    open_fixed_token_sales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(4n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(4n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(4n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(4n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_7.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    open_batch_token_sales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(5n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(5n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(5n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                                                          value: { value: _descriptor_5.toValue(5n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
    open_overflow_token_sales: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(6n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(6n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(6n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
        return _descriptor_14.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_5.toValue(6n),
                                                                                    alignment: _descriptor_5.alignment() } }] } },
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
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_14.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    batch_contributors: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(7n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(7n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                      'launchpad.compact line 14 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(7n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                      'launchpad.compact line 14 char 1',
                                      'Bytes<32>',
                                      key_0)
        if (state.asArray()[7].asMap().get({ value: _descriptor_0.toValue(key_0),
                                             alignment: _descriptor_0.alignment() }) === undefined)
          throw new __compactRuntime.CompactError(`Map value undefined for ${key_0}`);
        return {
          isEmpty(...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_1.length}`);
            return _descriptor_6.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(7n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            'size',
                                                            { push: { storage: false,
                                                                      value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                                   alignment: _descriptor_2.alignment() }).encode() } },
                                                            'eq',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          size(...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_1.length}`);
            return _descriptor_2.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(7n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            'size',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          member(...args_1) {
            if (args_1.length !== 1)
              throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_1.length}`);
            const elem_0 = args_1[0];
            if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32))
              __compactRuntime.type_error('member',
                                          'argument 1',
                                          'launchpad.compact line 14 char 50',
                                          'Bytes<32>',
                                          elem_0)
            return _descriptor_6.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(7n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            { push: { storage: false,
                                                                      value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                   alignment: _descriptor_0.alignment() }).encode() } },
                                                            'member',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          [Symbol.iterator](...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_1.length}`);
            const self_0 = state.asArray()[7].asMap().get({ value: _descriptor_0.toValue(key_0),
                                                            alignment: _descriptor_0.alignment() });
            return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
          }
        }
      }
    },
    overflow_contributors: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(8n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(8n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                      'launchpad.compact line 15 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(8n),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
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
                                      'launchpad.compact line 15 char 1',
                                      'Bytes<32>',
                                      key_0)
        if (state.asArray()[8].asMap().get({ value: _descriptor_0.toValue(key_0),
                                             alignment: _descriptor_0.alignment() }) === undefined)
          throw new __compactRuntime.CompactError(`Map value undefined for ${key_0}`);
        return {
          isEmpty(...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_1.length}`);
            return _descriptor_6.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(8n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            'size',
                                                            { push: { storage: false,
                                                                      value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                                   alignment: _descriptor_2.alignment() }).encode() } },
                                                            'eq',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          size(...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_1.length}`);
            return _descriptor_2.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(8n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            'size',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          member(...args_1) {
            if (args_1.length !== 1)
              throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_1.length}`);
            const elem_0 = args_1[0];
            if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32))
              __compactRuntime.type_error('member',
                                          'argument 1',
                                          'launchpad.compact line 15 char 53',
                                          'Bytes<32>',
                                          elem_0)
            return _descriptor_6.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_5.toValue(8n),
                                                                                       alignment: _descriptor_5.alignment() } },
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_0.toValue(key_0),
                                                                                       alignment: _descriptor_0.alignment() } }] } },
                                                            { push: { storage: false,
                                                                      value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                   alignment: _descriptor_0.alignment() }).encode() } },
                                                            'member',
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value);
          },
          [Symbol.iterator](...args_1) {
            if (args_1.length !== 0)
              throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_1.length}`);
            const self_0 = state.asArray()[8].asMap().get({ value: _descriptor_0.toValue(key_0),
                                                            alignment: _descriptor_0.alignment() });
            return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
          }
        }
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
  encodeBuyerHash: (...args) => undefined,
  decodeBuyerHash: (...args) => undefined,
  decodeBuyerHashOverflow: (...args) => undefined
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
