import { TrendingUp, Layers, Shield, BarChart3, Zap } from "lucide-react";

export interface SaleType {
  value: string;
  label: string;
  description: string;
}

export interface TokenData {
  name: string;
  ticker: string;
  totalSupply: string;
  description: string;
}

export interface SaleDataType {
  // Project Info
  projectName: string;
  projectDescription: string;
  logo: string;
  banner: string;
  website: string;
  twitter: string;
  telegram: string;
  discord: string;

  // Token Info
  tokenID: string;
  tokenName: string;
  tokenSymbol: string;
  softCap: number;
  hardCap: number;

  // Sale Parameters
  saleType: string;
  exchangeTokenID: string;
  exchangeTokenSymbol: string;
  exchangeRatio: number;
  minContribution: number;
  maxContribution: number;
  duration: number;
}

export const saleModels = [
  {
    id: "fixed",
    title: "Fixed Sale",
    description:
      "Traditional fixed-price token sale with predetermined allocation",
    icon: TrendingUp,
    color: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: "batch",
    title: "Batch Auction",
    description: "Batch auction mechanism for fair price discovery",
    icon: Layers,
    color: "bg-purple-500/10 border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: "overflow",
    title: "Overflow Sale",
    description: "Overflow mechanism to handle excess demand efficiently",
    icon: BarChart3,
    color: "bg-green-500/10 border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    id: "whitelist",
    title: "Whitelist Sale",
    description: "Exclusive sale for pre-approved participants only",
    icon: Shield,
    color: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    id: "bonding-curve",
    title: "Bonding Curve",
    description: "Dynamic pricing based on supply and demand curves",
    icon: TrendingUp,
    color: "bg-pink-500/10 border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    id: "hybrid",
    title: "Hybrid Sale",
    description: "Combination of multiple sale mechanisms for optimal results",
    icon: Zap,
    color: "bg-cyan-500/10 border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
];

export const IMAGE =
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";

export const statuses = ["All", "Live", "Completed"];
export const saleTypesList = [
  "All",
  "Fixed Sale",
  "Batch Auction",
  "Overflow Sale",
  "Bonding Curve",
  "Whitelist Sale",
  "Hybrid Sale",
];

export const saleTypes: SaleType[] = [
  {
    value: "fixed",
    label: "Fixed Sale",
    description: "Traditional fixed-price sale",
  },
  {
    value: "batch",
    label: "Batch Auction",
    description: "Fair price discovery mechanism",
  },
  {
    value: "overflow",
    label: "Overflow Sale",
    description: "Handle excess demand efficiently",
  },
  {
    value: "whitelist",
    label: "Whitelist Sale",
    description: "Exclusive pre-approved participants",
  },
  {
    value: "bonding-curve",
    label: "Bonding Curve",
    description: "Dynamic pricing mechanism",
  },
  {
    value: "hybrid",
    label: "Hybrid Sale",
    description: "Combination of multiple mechanisms",
  },
];
