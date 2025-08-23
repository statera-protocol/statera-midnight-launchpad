import type {
  LaunchPadContractProvider,
  DeployedLaunchpadContract,
} from "@repo/launchpad-api";
import type {
  DAppConnectorWalletAPI,
  ServiceUriConfig,
} from "@midnight-ntwrk/dapp-connector-api";

export interface WalletAndProvider {
  readonly wallet: DAppConnectorWalletAPI;
  readonly uris: ServiceUriConfig;
  readonly providers: LaunchPadContractProvider;
}

export interface WalletAPI {
  wallet: DAppConnectorWalletAPI;
  coinPublicKey: string;
  encryptionPublicKey: string;
  uris: ServiceUriConfig;
}

export interface StateraDeployment {
  status: "inprogress" | "deployed" | "failed";
  api: DeployedLaunchpadContract;
}
