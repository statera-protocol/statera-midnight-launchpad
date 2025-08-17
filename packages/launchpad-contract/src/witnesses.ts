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
};
