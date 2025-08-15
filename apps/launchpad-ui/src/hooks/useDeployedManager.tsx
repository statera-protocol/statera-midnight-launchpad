import { useContext } from "react";
import { type DeployedLaunchpadAPIProvider } from "../lib/actions";
import { DeployedLaunchpadContext } from "../contexts/DeployedAppContext";

export const useDeployedLaunchpadContext = (): DeployedLaunchpadAPIProvider => {
  const context = useContext(DeployedLaunchpadContext);

  if (!context) {
    throw new Error("A <DeployedBoardProvider /> is required.");
  }

  return context;
};
