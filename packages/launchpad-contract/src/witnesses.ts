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
  convertOpaqueToBytes: (
    { privateState }: WitnessContext<Ledger, LaunchPadPrivateState>,
    tokenName: string
  ): [LaunchPadPrivateState, Uint8Array] => {
    const bytes = new Uint8Array(32);
    const encoder = new TextEncoder();
    const inputBytes = encoder.encode(tokenName);
    if (inputBytes.length >= 32) {
      bytes.set(inputBytes.slice(0, 32));
    } else {
      bytes.set(inputBytes);
    }
    return [privateState, bytes];
  },
};
