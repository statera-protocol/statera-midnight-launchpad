import { Ledger } from "./managed/launchpad/contract/index.cjs";
import {
  MerkleTreePath,
  WitnessContext,
} from "@midnight-ntwrk/compact-runtime";

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
    const newBytes = new Uint8Array(32);
    crypto.getRandomValues(newBytes);
    return [privateState, newBytes];
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
  confirmContribution: (
    context: WitnessContext<Ledger, LaunchPadPrivateState>,
    item: Uint8Array
  ): [LaunchPadPrivateState, MerkleTreePath<Uint8Array>] => {
    return [
      context.privateState,
      context.ledger.contributors.findPathForLeaf(item)!,
    ];
  },
  calcAmountToWtihdrawFromBatch: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    amount: bigint,
    totalReceived: bigint,
    totalSold: bigint
  ): [LaunchPadPrivateState, bigint] => {
    let returnValue = (amount / totalReceived) * totalSold;

    return [privateState, returnValue];
  },
  calcAmountToWtihdrawFromOverflow: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    amount: bigint,
    totalReceived: bigint, // sum of all contributions
    amountForSale: bigint, // total tokens available
    targetAmount: bigint // total raise target
  ): [LaunchPadPrivateState, bigint] => {
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
    return [privateState, tokens];
  },
  calcAmountToRefundFromOverflow: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    amount: bigint,
    totalReceived: bigint, // sum of all contributions
    amountForSale: bigint, // total tokens available
    targetAmount: bigint // total raise target
  ): [LaunchPadPrivateState, bigint] => {
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
    return [privateState, refund];
  },
  calculateLeftover: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    totalReceived: bigint, // sum of all contributions
    amountForSale: bigint, // total tokens available
    targetAmount: bigint // total raise target
  ): [LaunchPadPrivateState, bigint] => {
    if (totalReceived >= targetAmount) {
      return [privateState, 0n];
    }

    const price = targetAmount / amountForSale;
    let leftover = totalReceived * price;

    return [privateState, leftover];
  },
};
