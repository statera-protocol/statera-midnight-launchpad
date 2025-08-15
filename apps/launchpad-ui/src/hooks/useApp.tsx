import { useContext } from "react";
import { AppContext, type AppContextType } from "../contexts/AppContext";

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("A <AppContext /> is required.");
  }

  return context;
};
