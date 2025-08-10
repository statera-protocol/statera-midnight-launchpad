import { open_sales_type, sale_bank_type } from "./common-types";

export const randomNonceBytes = (length: number): Uint8Array => {
  const newBytes = new Uint8Array(length);
  crypto.getRandomValues(newBytes);
  return newBytes;
};

export const stringToBytes = async (hexString: string) => {
  const matches = hexString.match(/.{1,2}/g);
  if (!matches) {
    throw new Error("Invalid hex string");
  }

  const bytes = new Uint8Array(matches.map((byte) => parseInt(byte, 16)));

  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);

  const hashArray = new Uint8Array(hashBuffer);

  return hashArray;
};

export function stringTo32ByteArray(input: string): Uint8Array {
  // Create a new 32-byte array filled with zeros
  const result = new Uint8Array(32);

  // Convert string to UTF-8 bytes
  const encoder = new TextEncoder();
  const encoded = encoder.encode(input);

  // Copy the encoded bytes to our result array
  // If the string is longer than 32 bytes, it will be truncated
  // If shorter, the remaining bytes will stay as zeros
  const copyLength = Math.min(encoded.length, 32);
  result.set(encoded.subarray(0, copyLength));

  return result;
}

export const get_open_fixed_token_sales = (open_fixed_token_sales: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    organizer: Uint8Array;
    total_amount_for_sale: bigint;
    total_amount_sold: bigint;
    total_amount_left: bigint;
    token_sale_ratio: bigint;
    acceptable_exchange_token: Uint8Array;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      {
        organizer: Uint8Array;
        total_amount_for_sale: bigint;
        total_amount_sold: bigint;
        total_amount_left: bigint;
        token_sale_ratio: bigint;
        acceptable_exchange_token: Uint8Array;
      },
    ]
  >;
}): open_sales_type => {
  let open_sales: open_sales_type = [];
  for (const sales_entry of open_fixed_token_sales) {
    open_sales.push([
      sales_entry[0],
      [
        sales_entry[1].acceptable_exchange_token,
        sales_entry[1].total_amount_for_sale,
        sales_entry[1].organizer,
        sales_entry[1].token_sale_ratio,
        sales_entry[1].total_amount_left,
        sales_entry[1].total_amount_sold,
      ],
    ]);
  }
  return open_sales;
};

export const get_fixed_sale_bank = (fixed_sales_bank: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    nonce: Uint8Array;
    color: Uint8Array;
    value: bigint;
    mt_index: bigint;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      { nonce: Uint8Array; color: Uint8Array; value: bigint; mt_index: bigint },
    ]
  >;
}): sale_bank_type => {
  let sale_bank: sale_bank_type = [];

  for (const account of fixed_sales_bank) {
    sale_bank.push([account[0], account[1]]);
  }

  return sale_bank;
};

export const get_fixed_sales_received_bank = (fixed_sales_received_bank: {
  isEmpty(): boolean;
  size(): bigint;
  member(key_0: Uint8Array): boolean;
  lookup(key_0: Uint8Array): {
    nonce: Uint8Array;
    color: Uint8Array;
    value: bigint;
    mt_index: bigint;
  };
  [Symbol.iterator](): Iterator<
    [
      Uint8Array,
      { nonce: Uint8Array; color: Uint8Array; value: bigint; mt_index: bigint },
    ]
  >;
}): sale_bank_type => {
  let received_bank: sale_bank_type = [];
  for (const account of fixed_sales_received_bank) {
    received_bank.push([account[0], account[1]]);
  }
  return received_bank;
};
