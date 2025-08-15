import React, {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useDeployedLaunchpadContext } from "../hooks/useDeployedManager";
import { type status } from "../lib/actions";
import {
  LaunchPadAPI,
  stringToBytes,
  type derivedState,
  type FixedSaleData,
} from "@repo/launchpad-api";
import type { SaleDataType } from "../lib/assets";
import { type TokenData } from "../lib/assets";

export type AppContextType = {
  deploymentState: status;
  api: LaunchPadAPI | undefined;
  contractState: derivedState | null;
  connectWallet: () => Promise<void>;
  walletAddress: string;
  disconnectWallet: () => void;
  tokenData: TokenData;
  setTokenData: React.Dispatch<React.SetStateAction<TokenData>>;
  generateToken: () => Promise<void>;
  isGenerating: boolean;
  generationComplete: boolean;
  setGenerationComplete: (b: boolean) => void;
  saleData: SaleDataType;
  setSaleData: React.Dispatch<React.SetStateAction<SaleDataType>>;
  createFixedSale: () => Promise<void>;
  launching: boolean;
  error: string | null;
  setError: (e: string | null) => void;
  success: string | null;
  setSuccess: (e: string | null) => void;
  clearMessages: () => void;
  closeSale: (projectDetail: FixedSaleData) => void;
  buyFixedToken: (projectDetail: FixedSaleData, amount: number) => void;
  isContributing: boolean;
  setIsContributing: (b: boolean) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

// Custom hook for RxJS observable state management
function useObservableState<T>(
  observable$: any,
  initialState: T | null = null,
  debugName?: string
): T | null {
  const [state, setState] = useState<T | null>(initialState);

  useEffect(() => {
    if (!observable$) return;

    const subscription = observable$.subscribe({
      next: (value: T) => {
        setState(value);
        if (debugName) {
          console.log(`${debugName} state updated:`, value);
        }
      },
      error: (error: any) => {
        console.error(`${debugName || "Observable"} error:`, error);
      },
    });

    return () => subscription.unsubscribe();
  }, [observable$, debugName]);

  return state;
}

// Initial state constants
const INITIAL_SALE_DATA: SaleDataType = {
  // Project Info
  projectName: "",
  projectDescription: "",
  logo: "logo",
  banner: "logo",
  website: "",
  twitter: "",
  telegram: "",
  discord: "",

  // Token Info
  tokenID: "",
  tokenName: "",
  tokenSymbol: "",
  softCap: 0,
  hardCap: 0,

  // Sale Parameters
  saleType: "",
  exchangeTokenID: "",
  exchangeTokenSymbol: "",
  exchangeRatio: 0,
  minContribution: 0,
  maxContribution: 0,
  duration: 0,
};

const INITIAL_TOKEN_DATA: TokenData = {
  name: "",
  ticker: "",
  totalSupply: "",
  description: "",
};

export const AppContextProvider: React.FC<Readonly<PropsWithChildren>> = ({
  children,
}) => {
  const context = useDeployedLaunchpadContext();

  // State management
  const [api, setApi] = useState<LaunchPadAPI>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationComplete, setGenerationComplete] = useState(false);
  const [launching, setLaunching] = useState(false);
  const [saleData, setSaleData] = useState<SaleDataType>(INITIAL_SALE_DATA);
  const [tokenData, setTokenData] = useState<TokenData>(INITIAL_TOKEN_DATA);
  const [isContributing, setIsContributing] = useState<boolean>(false);

  // RxJS observable state management
  const deploymentState =
    useObservableState<status>(
      context.status$,
      "no-action",
      "Deployment State"
    ) ?? "no-action";

  // Fixed: Access state$ from the LaunchPadAPI instance, not the deployed contract
  const contractState = useObservableState<derivedState>(
    api?.state$, // Changed from api?.deployedContract?.state$ to api?.state$
    undefined,
    "Contract State"
  );

  // Auto-clear messages after 3 seconds
  useEffect(() => {
    if (!success || !error) return;

    const timer = setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success, error]);

  // Memoized message handlers
  const clearMessages = useCallback(() => {
    setSuccess(null);
    setError(null);
  }, []);

  const handleError = useCallback((errorMessage: string) => {
    console.error("App Error:", errorMessage);
    setError(errorMessage);
  }, []);

  const handleSuccess = useCallback((successMessage: string) => {
    console.log("App Success:", successMessage);
    setSuccess(successMessage);
  }, []);

  // Wallet connection
  const connectWallet = useCallback(async (): Promise<void> => {
    try {
      clearMessages();
      const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

      // if (!contractAddress) {
      //   throw new Error("Contract address not found in environment variables");
      // }

      console.log("Connecting to contract:", contractAddress);

      const deployedContract = await context.resolve(
        contractAddress && contractAddress
      );
      if (!deployedContract) {
        throw new Error("Failed to resolve deployed contract");
      }
      console.log(deployedContract.deployedContractAddress);
      setApi(deployedContract);
      setWalletAddress("0x1234...5678"); // Replace with actual wallet address

      handleSuccess(
        `Contract ${!contractAddress ? "deployed" : "joined"} successfully`
      );
    } catch (error) {
      handleError(
        `Failed to connect wallet: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  }, [context, clearMessages, handleError, handleSuccess]);

  // Wallet disconnection
  const disconnectWallet = useCallback(() => {
    setApi(undefined);
    setWalletAddress("");
    setGenerationComplete(false);
    clearMessages();
    console.log("Wallet disconnected");
  }, [clearMessages]);

  // Token generation
  const generateToken = useCallback(async (): Promise<void> => {
    if (!api) {
      handleError("API not available. Please connect wallet first.");
      return;
    }

    setIsGenerating(true);
    try {
      const txData = await LaunchPadAPI.createToken(
        api.deployedContract,
        await stringToBytes(tokenData.name),
        BigInt(tokenData.totalSupply),
        tokenData.ticker,
        tokenData.description
      );

      setGenerationComplete(true);
      handleSuccess("Token generated successfully");
      console.log("Token creation transaction:", txData);
    } catch (error) {
      handleError(
        `Failed to generate token: ${error instanceof Error ? error.message : String(error)}`
      );
    } finally {
      setIsGenerating(false);
    }
  }, [api, tokenData, handleError, handleSuccess]);

  // Fixed sale creation
  const createFixedSale = useCallback(async (): Promise<void> => {
    if (!api) {
      handleError("Connect Wallet to create sale");
      return;
    }

    setLaunching(true);
    try {
      const data = await LaunchPadAPI.open_fixed_sale(
        api.deployedContract,
        BigInt(saleData.softCap),
        saleData.tokenID,
        saleData.exchangeTokenID,
        BigInt(saleData.exchangeRatio),
        BigInt(saleData.duration),
        saleData.tokenSymbol,
        saleData.exchangeTokenSymbol,
        BigInt(saleData.minContribution),
        BigInt(saleData.maxContribution),
        BigInt(saleData.hardCap)
      );

      handleSuccess("Fixed sale created successfully");
      console.log("Fixed sale creation result:", data);
    } catch (error) {
      handleError(
        `Failed to create fixed sale: ${error instanceof Error ? error.message : String(error)}`
      );
    } finally {
      setLaunching(false);
    }
  }, [api, saleData, handleError, handleSuccess]);

  const closeSale = async (projectDetail: FixedSaleData) => {
    try {
      const is_owner = contractState?.user_pk === projectDetail.organizer;
      if (!is_owner || !api) {
        return;
      }
      const sale_id = projectDetail.key_uint;
      await LaunchPadAPI.close_fixed_sale(api.deployedContract, sale_id);
    } catch (error) {
      console.log("Error while closing " + error);
    }
  };

  const buyFixedToken = async (details: FixedSaleData, amount: number) => {
    try {
      const sale_id = details.key_uint;
      const buy_amount = BigInt(amount);

      if (!api) {
        return;
      }
      setIsContributing(true);
      await LaunchPadAPI.buy_fixed_token(
        api?.deployedContract,
        buy_amount,
        details.acceptable_exchange_token,
        sale_id
      );
      setIsContributing(false);
      console.log("Token bought successfully!");
    } catch (error) {
      console.log("an error occured: " + error);
    }
  };

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo<AppContextType>(
    () => ({
      deploymentState,
      api,
      contractState,
      connectWallet,
      walletAddress,
      disconnectWallet,
      tokenData,
      setTokenData,
      generateToken,
      isGenerating,
      generationComplete,
      saleData,
      setSaleData,
      createFixedSale,
      launching,
      error,
      setError,
      success,
      setSuccess,
      clearMessages,
      closeSale,
      buyFixedToken,
      isContributing,
      setIsContributing,
      setGenerationComplete,
    }),
    [
      deploymentState,
      api,
      contractState,
      connectWallet,
      walletAddress,
      disconnectWallet,
      tokenData,
      setTokenData,
      generateToken,
      isGenerating,
      generationComplete,
      saleData,
      setSaleData,
      createFixedSale,
      launching,
      error,
      setError,
      success,
      setSuccess,
      clearMessages,
      closeSale,
      buyFixedToken,
      isContributing,
      setIsContributing,
      setGenerationComplete,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
