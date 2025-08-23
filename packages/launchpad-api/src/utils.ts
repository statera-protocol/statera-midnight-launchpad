import { toHex } from "@midnight-ntwrk/midnight-js-utils";
import {
  FixedSaleData,
  sale_bank_type,
  SaleStatus,
  FixedTokenSaleType,
  BatchSaleData,
  BatchTokenSaleType,
  OverflowSaleData,
  OverflowTokenSaleType,
} from "./common-types.js";

export const randomNonceBytes = (length: number): Uint8Array => {
  const newBytes = new Uint8Array(length);
  crypto.getRandomValues(newBytes);
  return newBytes;
};

export const stringToBytes = async (name: string) => {
  // Generate 16 random bytes (like a UUID)
  const randomBytes = new Uint8Array(16);
  crypto.getRandomValues(randomBytes);

  // Convert to hex string (32 characters, same as UUID without dashes)
  const random_string = Array.from(randomBytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const combine = random_string + name;

  // Convert string to bytes properly
  const encoder = new TextEncoder();
  const bytes = encoder.encode(combine);

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
  const copyLength = Math.min(encoded.length, 32);
  result.set(encoded.subarray(0, copyLength));

  return result;
}

export const get_fixed_sales = (
  open_fixed_token_sales: FixedTokenSaleType
): FixedSaleData[] => {
  const sales: FixedSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      key_uint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      total_amount_for_sale: Number(sale.total_amount_for_sale),
      total_amount_sold: Number(sale.total_amount_sold),
      total_amount_left: Number(sale.total_amount_left),
      token_sale_ratio: sale.token_sale_ratio.toString(),
      hard_cap: Number(sale.hard_cap),
      acceptable_exchange_token: sale.acceptable_exchange_token,
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      start_time: sale.start_time.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      sale_type: "fixed",
      isWithdrawn: sale.withdrawn,
      time_up: sale.time_up,
    });
  }

  return sales;
};

export const get_batch_sales = (
  open_fixed_token_sales: BatchTokenSaleType
): BatchSaleData[] => {
  const sales: BatchSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      key_uint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      total_amount_for_sale: Number(sale.total_amount_for_sale),
      contribution: Number(sale.contribution),
      acceptable_exchange_token: sale.acceptable_exchange_token,
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      start_time: sale.start_time.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      sale_type: "batch",
      isWithdrawn: sale.withdrawn,
      time_up: sale.time_up,
    });
  }

  return sales;
};

export const get_overflow_sales = (
  open_fixed_token_sales: OverflowTokenSaleType
): OverflowSaleData[] => {
  const sales: OverflowSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      key_uint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      total_amount_for_sale: Number(sale.total_amount_for_sale),
      contribution: Number(sale.contribution),
      acceptable_exchange_token: sale.acceptable_exchange_token,
      target: Number(sale.target),
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      start_time: sale.start_time.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      sale_type: "batch",
      isWithdrawn: sale.withdrawn,
      time_up: sale.time_up,
    });
  }

  return sales;
};

// Helper to make Uint8Array into a hex string

export const get_sales_bank = (fixed_sales_bank: {
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

export const get_received_bank = (fixed_sales_received_bank: {
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
