STATERA MIDNIGHT LAUNCHPAD

# Overview

Statera Midnight Launchpad is a decentralized application (dApp) built on the Midnight blockchain, designed to make token generation and token sales seamless, secure, and private.

Unlike traditional launchpads, Statera Midnight Launchpad is engineered with privacy at its core, ensuring that both project teams (token generators) and community members (investors) can participate in fundraising activities without exposing sensitive information.

Our mission is to empower developers to launch their projects with confidence while giving investors the peace of mind that their identity, financial details, and on-chain activity remain private and protected.

# Key Features

🔒 Privacy by Design

- All interactions leverage Midnight’s privacy-preserving smart contracts.

- User and generator data are shielded, ensuring confidential participation without compromising blockchain transparency.

- On-chain transactions reveal only what is necessary, preserving financial and personal privacy.

⚡ Secure Token Generation

- Create and deploy custom tokens directly from the launchpad.

- Smart contract templates are optimized for security, compliance, and confidentiality.

- Token generators maintain full ownership and control, with sensitive project data protected from public exposure.

💠 Private Token Sales

- Conduct token sales that protect participant privacy.

- Investor contributions are validated and recorded on-chain without revealing wallet balances, purchase history, or personal identity.

- Fair distribution mechanisms ensure equal opportunity while preserving anonymity.

🌍 Empowering Developers and Investors

- Developers can launch projects without fear of leaking sensitive details.

- Investors gain confidence knowing their financial privacy and identity remain safe while still supporting innovative projects.

# How It Works

- Generate Token: Projects can deploy their token using the launchpad’s secure generator.

- Launch Sale: Configure a private token sale event with flexible parameters (supply, pricing, duration).

- Participate Privately: Investors join the sale while keeping their personal and financial data protected.

- Build & Grow: Projects raise funds confidently, and investors hold their tokens securely — all with privacy intact.

# How to interact with project locally

Pre-requisite

- Install compactc compiler (Guide): [https://docs.midnight.network/develop/tutorial/building/]#midnight-compact-compiler

- Install proof server from midnight: [https://docs.midnight.network/develop/tutorial/using/proof-server]

- Install prebaked proof server version (RECOMMENDED): [https://github.com/bricktowers/midnight-proof-server]

- Token Aquisation: [https://docs.midnight.network/develop/tutorial/using/proof-server]

- Lace wallet setup: [https://docs.midnight.network/develop/tutorial/using/chrome-ext]

- Contract Documentation: [https://github.com/codeBigInt/fundagoal/blob/main/packages/contract/README.md]

NB: This project is a monorepo that utilizes turborepo.

```

    /* Running the DApp locally*/

    // Clone the repository locally
    git clone "https://github.com/statera-protocol/statera-midnight-launchpad.git"
    // Ensure your have the latest version or node version >=22
    node -v

    // Install dependencies from the root folder
    yarn install

    // Create a .env file in the launchpad-ui folder
    cd app/launchpad-ui //from the root folder

    // Add the content below
    VITE_NETWORK_ID=TestNet
    VITE_CONTRACT_ADDRESS=02008ef0d13efc0c4417b7a70fda5fa2c2b4590903107228f9ff572751a99637807b
    VITE_INDEXER_URL=https://indexer.testnet-02.midnight.network/api/v1/graphql
    VITE_INDEXER_WS_URL=wss://indexer.testnet-02.midnight.network/api/v1/graphql/ws
    VITE_PROOF_SERVER_URI=http://13.53.62.251:6300/

    // Go back to the root folder and compile the compact contract before building the entire package
    yarn build:start

    // Build all workspaces from the root folder
    yarn build

    // Move back into the UI folder to start the app
    cd apps/launchpad-ui

    // Start the app
    yarn start // runs on PORT:8080

```

💡 The instruction above will surely get the app running on your local machine 🙂

# Conclusion

Statera Midnight Launchpad is not just another token launch platform — it is a privacy-first gateway to innovation in the Midnight blockchain ecosystem. By protecting both sides of the fundraising process, we are setting a new standard for how blockchain projects launch, grow, and thrive.

⚡ With Statera Midnight Launchpad, token generation and fundraising are secure, efficient, and private — the way blockchain was meant to be.
