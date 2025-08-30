import React, {
  type PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useDeployedLaunchpadContext } from "../hooks/useDeployedManager";
import { type status } from "../lib/actions";
import { LaunchPadAPI } from "@repo/launchpad-api";
import { CompactError } from "@midnight-ntwrk/compact-runtime";
import type { SaleData } from "../pages/ProjectDetail";

export type AppContextType = {
  deploymentState: status;
  api: LaunchPadAPI | undefined;
  connectWallet: () => Promise<void>;
  walletAddress: string;
  disconnectWallet: () => void;
  handleSuccess: (m: string) => void;
  error: string | null;
  setError: (e: string | null) => void;
  success: string | null;
  setSuccess: (e: string | null) => void;
  clearMessages: () => void;
  route: string;
  setRoute: (s: string) => void;
  projectDetail: SaleData | undefined;
  setProjectDetail: (s: SaleData | undefined) => void;
  handleError: (e: any) => void;
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
  }, [observable$]);

  return state;
}

// DUMMY INITIAL STATE DATA
export const AppContextProvider: React.FC<Readonly<PropsWithChildren>> = ({
  children,
}) => {
  const context = useDeployedLaunchpadContext();

  //STATE MANAGEMENT
  const [api, setApi] = useState<LaunchPadAPI>(); // shared
  const [error, setError] = useState<string | null>(null); // shared
  const [success, setSuccess] = useState<string | null>(null); // shared
  const [walletAddress, setWalletAddress] = useState("");
  const [route, setRoute] = useState("dashboard"); //to be saved
  const [projectDetail, setProjectDetail] = useState<SaleData | undefined>(
    undefined
  ); //to be saved

  useEffect(() => {
    console.log(route);
  }, [route]);

  // RxJS OBSERVABLE STATE MANAGEMENT (still listening for deployment status)
  const deploymentState =
    useObservableState<status>(
      context.status$,
      "no-action",
      "Deployment State"
    ) ?? "no-action";

  // AUTO CLEAR ERROR/SUCCESS MESSAGES AFTER FEW SECONDS
  useEffect(() => {
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

  const handleError = (error: any) => {
    if (error instanceof CompactError) {
      const trimmed_message = error.message.substring(14);
      error.message.includes("Amount to buy must be greater than 0!") &&
        setError(trimmed_message);
      error.message.includes("This sale has not received any funds") &&
        setError(trimmed_message);
      error.message.includes("Amount is greater than amount left!") &&
        setError(trimmed_message);
      error.message.includes("This sale has been completed or closed") &&
        setError(trimmed_message);
    } else if (typeof error === "string") {
      setError(error);
    }
  };

  const handleSuccess = (successMessage: string) => {
    console.log("App Success:", successMessage);
    setSuccess(successMessage);
  };

  //CONNECTS WALLET
  const connectWallet = useCallback(async (): Promise<void> => {
    try {
      clearMessages();
      const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

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
    clearMessages();
    console.log("Wallet disconnected");
  }, [clearMessages]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue: AppContextType = {
    deploymentState,
    api,
    connectWallet,
    walletAddress,
    disconnectWallet,
    error,
    setError,
    success,
    setSuccess,
    clearMessages,
    handleError,
    handleSuccess,
    route,
    setRoute,
    projectDetail,
    setProjectDetail,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
