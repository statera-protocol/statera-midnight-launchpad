import { tokenBankArray, tokenListArray } from "./common-types";

export const generateRandomBytes32 = (): Uint8Array => {
  const newBytes = new Uint8Array(32);
  crypto.getRandomValues(newBytes);
  return newBytes;
};

export const stringToUint64 = (input: string): bigint => {
  // Method 1: Parse as decimal number
  const num = BigInt(input);

  // Ensure it's within uint64 range (0 to 2^64 - 1)
  if (num < 0n || num > 0xffffffffffffffffn) {
    throw new Error("Value out of uint64 range");
  }

  return num;
};

export const stringToBytes32 = async (str: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  return new Uint8Array(hashBuffer);
};

export const refinedTokenList = (tokensList: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    name: Uint8Array;
    minter: Uint8Array;
    amount: bigint;
    ticker: string;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      { name: Uint8Array; minter: Uint8Array; amount: bigint; ticker: string },
    ]
  >;
}) => {
  const allTokens: tokenListArray = [];
  for (const tokenEntry of tokensList) {
    allTokens.push([
      tokenEntry[0],
      {
        minter: tokenEntry[1].minter,
        amount: Number(tokenEntry[1].amount),
        name: tokenEntry[1].name,
        ticker: tokenEntry[1].ticker,
      },
    ]);
  }
  return allTokens;
};

// gives a refined state of the tokenBank ledger variable

export const refinedTokenBank = (tokensBank: {
  isEmpty(): boolean;
  length(): bigint;
  head(): {
    is_some: boolean;
    value: {
      nonce: Uint8Array;
      color: Uint8Array;
      value: bigint;
      mt_index: bigint;
    };
  };
  [Symbol.iterator](): Iterator<{
    nonce: Uint8Array;
    color: Uint8Array;
    value: bigint;
    mt_index: bigint;
  }>;
}): tokenBankArray => {
  const bankList = [];
  for (const tokenEntry of tokensBank) {
    bankList.push({
      nonce: tokenEntry.nonce,
      color: tokenEntry.color,
      value: Number(tokenEntry.value),
      mt_index: Number(tokenEntry.mt_index),
    });
  }
  return bankList;
};
