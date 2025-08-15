import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import { DeployedLaunchpadProvider } from "./contexts/DeployedAppContext.tsx";
import { AppContextProvider } from "./contexts/AppContext.tsx";
import "./polyfills.ts"
import { setNetworkId, type NetworkId } from "@midnight-ntwrk/midnight-js-network-id";

const networkId = import.meta.env.VITE_NETWORK_ID as NetworkId;
// Ensure that the network IDs are set within the Midnight libraries.
setNetworkId(networkId);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DeployedLaunchpadProvider>
          <AppContextProvider>
            <App />
          </AppContextProvider>
        </DeployedLaunchpadProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
