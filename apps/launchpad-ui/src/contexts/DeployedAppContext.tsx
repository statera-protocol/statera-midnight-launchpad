import React, { type PropsWithChildren, createContext } from "react";
import {
  type DeployedLaunchpadAPIProvider,
  BrowserDeployedLaunchpadManager,
} from "../lib/actions";

export const DeployedLaunchpadContext = createContext<
  DeployedLaunchpadAPIProvider | undefined
>(undefined);

export const DeployedLaunchpadProvider: React.FC<
  Readonly<PropsWithChildren>
> = ({ children }) => {
  const contextValue: DeployedLaunchpadAPIProvider =
    new BrowserDeployedLaunchpadManager();
  return (
    <DeployedLaunchpadContext.Provider value={contextValue}>
      {children}
    </DeployedLaunchpadContext.Provider>
  );
};
