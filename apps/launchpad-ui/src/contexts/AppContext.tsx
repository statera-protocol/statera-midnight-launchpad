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
  isWithdrawing: boolean;
  setIsWithdrawing: (b: boolean) => void;
  WithdrawFunds: (d: FixedSaleData) => void;
  isClosing: boolean;
  setIsClosing: (b: boolean) => void;
  route: string;
  setRoute: (s: string) => void;
  projectId: string;
  setProjectId: (s: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

// CUSTOM HOOK FOR RxJS OBSERVABLE STATE MANAGEMENT
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

// DUMMY INITIAL STATE DATA
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

  // TOKEN INFO
  tokenID: "",
  tokenName: "",
  tokenSymbol: "",
  softCap: 0,
  hardCap: 0,

  // SALE PARAMETERS
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

  //STATE MANAGEMENT
  const [api, setApi] = useState<LaunchPadAPI>(); //to be saved
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState(""); //to be saved
  const [isGenerating, setIsGenerating] = useState(false); //to be saved
  const [generationComplete, setGenerationComplete] = useState(false);
  const [launching, setLaunching] = useState(false); //to be saved
  const [saleData, setSaleData] = useState<SaleDataType>(INITIAL_SALE_DATA);
  const [tokenData, setTokenData] = useState<TokenData>(INITIAL_TOKEN_DATA);
  const [isContributing, setIsContributing] = useState<boolean>(false); //to be saved
  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false); //to be saved
  const [isClosing, setIsClosing] = useState<boolean>(false); //to be saved
  const [route, setRoute] = useState("dashboard"); //to be saved
  const [projectId, setProjectId] = useState(""); //to be saved

  // useEffect(() => {
  //   const stored_project_id = localStorage.getItem("project-id");
  //   const stored_api = localStorage.getItem("api");
  //   const stored_route = localStorage.getItem("route");
  //   const stored_wallet_address = localStorage.getItem("wallet-address");
  //   const stored_generating_state = localStorage.getItem("is-generating");
  //   const stored_launch_state = localStorage.getItem("launching"); // Fixed typo
  //   const stored_contributing_state = localStorage.getItem("is-contributing");
  //   const stored_withdrawing_state = localStorage.getItem("is-withdrawing");
  //   const stored_closing_state = localStorage.getItem("is-closing");

  //   // Set states with correct setter functions and parse JSON
  //   stored_api && setApi(JSON.parse(stored_api));
  //   stored_project_id && setProjectId(JSON.parse(stored_project_id)); // Fixed setter
  //   stored_route && setRoute(JSON.parse(stored_route)); // Fixed setter
  //   stored_wallet_address &&
  //     setWalletAddress(JSON.parse(stored_wallet_address)); // Fixed setter
  //   stored_generating_state &&
  //     setIsGenerating(JSON.parse(stored_generating_state)); // Fixed setter
  //   stored_contributing_state &&
  //     setIsContributing(JSON.parse(stored_contributing_state)); // Fixed setter
  //   stored_launch_state && setLaunching(JSON.parse(stored_launch_state)); // Fixed setter
  //   stored_withdrawing_state &&
  //     setIsWithdrawing(JSON.parse(stored_withdrawing_state)); // Fixed setter
  //   stored_closing_state && setIsClosing(JSON.parse(stored_closing_state)); // Fixed setter
  // }, []); // Empty dependency array - only run on mount

  // // Save to localStorage whenever state changes
  // useEffect(() => {
  //   localStorage.setItem("route", JSON.stringify(route));
  //   localStorage.setItem("api", JSON.stringify(api));
  //   localStorage.setItem("wallet-address", JSON.stringify(walletAddress));
  //   localStorage.setItem("is-generating", JSON.stringify(isGenerating));
  //   localStorage.setItem("launching", JSON.stringify(launching)); // Fixed key name
  //   localStorage.setItem("is-contributing", JSON.stringify(isContributing));
  //   localStorage.setItem("is-withdrawing", JSON.stringify(isWithdrawing));
  //   localStorage.setItem("is-closing", JSON.stringify(isClosing));
  //   localStorage.setItem("project-id", JSON.stringify(projectId));
  // }, [
  //   route,
  //   api,
  //   walletAddress,
  //   isGenerating,
  //   isClosing,
  //   isContributing,
  //   isWithdrawing,
  //   launching,
  //   projectId,
  // ]);
  // RxJS OBSERVABLE STATE MANAGEMENT
  const deploymentState =
    useObservableState<status>(
      context.status$,
      "no-action",
      "Deployment State"
    ) ?? "no-action";

  const contractState = useObservableState<derivedState>(
    api?.state$,
    undefined,
    "Contract State"
  );

  //AUTO CLEAR ERROR/SUCCES MESSAGES AFTER FEW SECONDS
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

  //CONNECTS WALLET
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

      const shortAddress =
        context.wallet_address.length > 20
          ? context.wallet_address.substring(0, 6) +
            "..." +
            context.wallet_address.slice(-4) +
            "*"
          : context.wallet_address;
      setWalletAddress(shortAddress);

      handleSuccess(
        `Contract ${!contractAddress ? "deployed" : "joined"} successfully`
      );
    } catch (error) {
      handleError(
        "Failed to connect wallet. Check if Lace Wallet is installed!"
      );
    }
  }, [context, clearMessages, handleError, handleSuccess]);

  //WALLET DISCONNECTION
  const disconnectWallet = useCallback(() => {
    setApi(undefined);
    setWalletAddress("");
    setGenerationComplete(false);
    clearMessages();
    console.log("Wallet disconnected");
  }, [clearMessages]);

  //GENERATES TOKEN AND SENDS TO USER
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

  //CREATES TOKEN FIXED SALE
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

  //CLOSES TOKEN FIXED SALE
  const closeSale = async (projectDetail: FixedSaleData) => {
    try {
      const is_owner = contractState?.user_pk === projectDetail.organizer;
      if (!is_owner || !api) {
        return;
      }
      const sale_id = projectDetail.key_uint;
      setIsClosing(true);
      await LaunchPadAPI.close_fixed_sale(api.deployedContract, sale_id);
      setIsClosing(false);
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

  const WithdrawFunds = async (details: FixedSaleData) => {
    const sale_id = details.key_uint;
    if (!api) {
      return;
    }

    setIsWithdrawing(true);
    await LaunchPadAPI.withdraw_funds(api.deployedContract, sale_id);
    setIsWithdrawing(false);
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
      isWithdrawing,
      setIsWithdrawing,
      WithdrawFunds,
      isClosing,
      setIsClosing,
      route,
      setRoute,
      projectId,
      setProjectId,
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
      isWithdrawing,
      isClosing,
      route,
      projectId,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
