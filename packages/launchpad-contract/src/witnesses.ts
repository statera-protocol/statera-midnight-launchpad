import { Ledger } from "./managed/launchpad/contract/index.cjs";
import { WitnessContext } from "@midnight-ntwrk/compact-runtime";

export type LaunchPadPrivateState = {
  readonly secretKey: Uint8Array;
};

export const createLaunchPadPrivateState = (secretKey: Uint8Array) => ({
  secretKey,
});

export const witnesses = {
  local_secret_key: (
    state: WitnessContext<Ledger, LaunchPadPrivateState>
  ): [LaunchPadPrivateState, Uint8Array] => {
    state.privateState.secretKey;
    return [state.privateState, state.privateState.secretKey];
  },
  calculate_amount_to_buy: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    received_amount: bigint,
    sale_ratio: bigint
  ): [LaunchPadPrivateState, bigint] => {
    const amount_per_token = received_amount / sale_ratio;
    return [privateState, amount_per_token];
  },
  generate_sale_id: ({
    privateState,
  }: WitnessContext<Ledger, LaunchPadPrivateState>): [
    LaunchPadPrivateState,
    Uint8Array,
  ] => {
    const random_string = crypto.randomUUID().replace(/-/g, "");
    const bytes_id = Uint8Array.from(random_string);
    return [privateState, bytes_id];
  },
  calculate_time: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    start_time: bigint,
    duration: bigint
  ): [LaunchPadPrivateState, boolean] => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const durationInMilliseconds = millisecondsPerDay * Number(duration);

    const expiryTimestamp = Number(start_time) + durationInMilliseconds;

    const currentTimestamp = Date.now();

    const isDurationOver = currentTimestamp > expiryTimestamp;

    return [privateState, isDurationOver];
  },
  encodeBuyerHash: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    pk: Uint8Array,
    bool: boolean,
    amount: bigint
  ): [LaunchPadPrivateState, Uint8Array] => {
    const result = new Uint8Array(41);

    // Copy pk32 (first 32 pk)
    result.set(pk, 0);

    // Encode boolean (1 byte at position 32)
    result[32] = bool ? 1 : 0;

    // Encode uint64 (big-endian, 8 pk at positions 33–40)
    for (let i = 0; i < 8; i++) {
      result[40 - i] = Number((amount >> BigInt(i * 8)) & 0xffn);
    }

    return [privateState, result];
  },
  decodeBuyerHash: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    encrypt: Uint8Array,
    totalReceived: bigint,
    totalSold: bigint
  ): [LaunchPadPrivateState, bigint] => {
    // const pk = encrypt.slice(0, 32); not needed

    // Extract boolean
    // Boolean: wether or not the buyer has withdraw. If no, it return a value of -1
    const bool = encrypt[32] === 1;

    // Extract uint64 (big-endian)
    // Amount contributed: responsible for returning the amount the user has contributed in the sale
    let amount = 0n;
    for (let i = 0; i < 8; i++) {
      amount = (amount << 8n) | BigInt(encrypt[33 + i]);
    }

    let returnValue;

    bool
      ? (returnValue = -1n)
      : (returnValue = (amount / totalReceived) * totalSold);

    return [privateState, returnValue];
  },
  decodeBuyerHashOverflow: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    encrypt: Uint8Array,
    totalReceived: bigint, // sum of all contributions
    amountForSale: bigint, // total tokens available
    targetAmount: bigint, // total raise target
    return_type: Uint8Array
  ): [LaunchPadPrivateState, bigint] => {
    const bool = encrypt[32] === 1;

    // decode contribution
    let amount = 0n;
    for (let i = 0; i < 8; i++) {
      amount = (amount << 8n) | BigInt(encrypt[33 + i]);
    }

    if (bool) {
      return [privateState, -1n]; // withdrawn, no tokens, no refund
    }

    const price = targetAmount / amountForSale;
    let spent: bigint;
    let tokens: bigint;
    let refund: bigint;

    if (totalReceived <= targetAmount) {
      // Not oversubscribed: full allocation
      spent = amount;
      tokens = amount / price;
      refund = 0n;
    } else {
      // Overflow case: scale down
      spent = (amount * targetAmount) / totalReceived;
      tokens = spent / price;
      refund = amount - spent;
    }

    const text = new TextDecoder().decode(return_type);

    // Return: private state, tokens allocated, refund owed
    return [privateState, text == "tokens" ? tokens : refund];
  },
};
