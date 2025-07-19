import { Ledger } from "./managed/launchpad/contract/index.cjs";
import { WitnessContext } from "@midnight-ntwrk/compact-runtime";

export type LaunchPadPrivateState = {
  readonly secretKey: Uint8Array;
  readonly convertOpaquesToBytes: Uint8Array;
};

export const createLaunchPadrivateState = (secretKey: Uint8Array) => ({
  secretKey,
});

export const witnesses = {
  local_secret_key: (
    state: WitnessContext<Ledger, LaunchPadPrivateState>
  ): [LaunchPadPrivateState, Uint8Array] => {
    state.privateState.secretKey;
    return [state.privateState, state.privateState.secretKey];
  },
  convertOpaqueToBytes: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    tokenName: string
  ): [LaunchPadPrivateState, Uint8Array] => {
    const bytes = new TextEncoder().encode(tokenName);
    return [privateState, bytes];
  },
};
