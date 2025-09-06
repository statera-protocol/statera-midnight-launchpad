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

import { OracleKycToken } from "@repo/launchpad-contract";

export const randomNonceBytes = (length: number): Uint8Array => {
  const newBytes = new Uint8Array(length);
  crypto.getRandomValues(newBytes);
  return newBytes;
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

export const getVerifiedMembers = (KYCedMembers: {
  isEmpty(): boolean;
  size(): bigint;
  member(elem_0: Uint8Array): boolean;
  [Symbol.iterator](): Iterator<Uint8Array>;
}) => {
  let verifiedMembersPks: string[] = [];
  for (const pk of KYCedMembers) {
    verifiedMembersPks.push(toHex(pk));
  }
  return verifiedMembersPks;
};

// KYC Token just for testing
export const getTestKycToken = (): OracleKycToken => {
  return {
    oracleSignature: stringTo32ByteArray(
      "165c55a1-55dd-47af-b4cf-19091045ac1b"
    ),
    tokenData: {
      did: stringTo32ByteArray("b80a1cef-cd22-4114-a40b-ff952f557652"),
      oraclePk: stringTo32ByteArray("66c31cd2-d251-4315-8980-68f5b0005ba1"),
      userPk: stringTo32ByteArray("c12f9a9b-302a-4ace-b854-489b9679a018"),
      validityRange: {
        duration: BigInt(3),
        creationDate: BigInt(Date.now()),
      },
    },
  };
};

export const getFixedSales = (
  open_fixed_token_sales: FixedTokenSaleType
): FixedSaleData[] => {
  const sales: FixedSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      keyUint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      totalAmountForSale: Number(sale.totalAmountForSale),
      totalAmountSold: Number(sale.totalAmountSold),
      totalAmountLeft: Number(sale.totalAmountLeft),
      tokenSaleRatio: sale.tokenSaleRatio.toString(),
      acceptableExchangeToken: sale.acceptableExchangeToken,
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      startTime: sale.startTime.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      saleType: "fixed",
      isWithdrawn: sale.withdrawn,
      timeUp: sale.timeUp,
      projectName: sale.projectName,
      tokenSymbol: sale.tokenSymbol,
      acceptableTokenSymbol: sale.acceptableTokenSymbol,
    });
  }

  return sales;
};

export const getBatchSales = (
  open_fixed_token_sales: BatchTokenSaleType
): BatchSaleData[] => {
  const sales: BatchSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      keyUint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      totalAmountForSale: Number(sale.totalAmountForSale),
      contribution: Number(sale.contribution),
      acceptableExchangeToken: sale.acceptableExchangeToken,
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      startTime: sale.startTime.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      saleType: "batch",
      isWithdrawn: sale.withdrawn,
      timeUp: sale.timeUp,
      projectName: sale.projectName,
      tokenSymbol: sale.tokenSymbol,
      acceptableTokenSymbol: sale.acceptableTokenSymbol,
    });
  }

  return sales;
};

export const getOverflowSales = (
  open_fixed_token_sales: OverflowTokenSaleType
): OverflowSaleData[] => {
  const sales: OverflowSaleData[] = [];

  for (const [key, sale] of open_fixed_token_sales) {
    sales.push({
      keyUint: key,
      key: toHex(key),
      organizer: toHex(sale.organizer),
      totalAmountForSale: Number(sale.totalAmountForSale),
      contribution: Number(sale.contribution),
      acceptableExchangeToken: sale.acceptableExchangeToken,
      target: Number(sale.target),
      status: SaleStatus[sale.status],
      participants: sale.participant.toString(),
      startTime: sale.startTime.toString(),
      duration: sale.duration.toString(),
      min: Number(sale.min),
      max: Number(sale.max),
      saleType: "overflow",
      isWithdrawn: sale.withdrawn,
      timeUp: sale.timeUp,
      projectName: sale.projectName,
      tokenSymbol: sale.tokenSymbol,
      acceptableTokenSymbol: sale.acceptableTokenSymbol,
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
