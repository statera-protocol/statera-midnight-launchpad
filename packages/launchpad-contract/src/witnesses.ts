import { Ledger } from "./managed/launchpad/contract/index.cjs";
import { WitnessContext } from "@midnight-ntwrk/compact-runtime";

export type LaunchPadPrivateState = {
  readonly secretKey: Uint8Array;
  // readonly calculate_amount_to_buy: BigInt;
  // readonly generate_sale_id: Uint16Array
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
  confirm_campaign_expiration: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    duration: bigint,
    start_time: bigint
  ): [LaunchPadPrivateState, boolean] => {
    const millisecondsPerHour = 1000 * 60 * 60 * 24;
    const durationInMilliseconds = millisecondsPerHour * Number(duration);
    const expiryDate = Number(start_time) + durationInMilliseconds;
    const currentDate = Date.now();

    return [privateState, expiryDate >= currentDate];
  },
};
