import { derivedLedgerState } from "./common-types";

export const generateRandomBytes32 = (): Uint8Array => {
  const newBytes = new Uint8Array(32);
  crypto.getRandomValues(newBytes);
  return newBytes;
};

export const refinedStates = (tokens: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    minter: Uint8Array;
    amount: bigint;
    domainSepName: Uint8Array;
    ticker: string;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        minter: Uint8Array;
        amount: bigint;
        domainSepName: Uint8Array;
        ticker: string;
      },
    ]
  >;
}): derivedLedgerState => {
  return {
    mintedTokenAmount: Number(tokens.size()),
    isMember: (sep: Uint8Array) => tokens.member(sep),
    getToken: (tokenSeo: Uint8Array) => {
      return tokens.lookup(tokenSeo);
    },
    getTokens: () => {
      const allTokens: Array<
        [
          Uint8Array,
          {
            minter: Uint8Array;
            amount: bigint;
            domainSepName: Uint8Array;
            ticker: string;
          },
        ]
      > = [];

      for (const tokenEntry of tokens) {
        allTokens.push(tokenEntry);
      }

      return allTokens;
    },
  };
};
