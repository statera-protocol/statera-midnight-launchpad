import { useContext } from "react";
import { AppContext, type AppContextType } from "../contexts/AppContext";

export const useAppDeployment = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppDeployment must be used within an AppContextProvider"
    );
  }

  return context;
};
