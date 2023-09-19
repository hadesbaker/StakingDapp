![Demo](<demo.png>)


StakingDapp

![License](https://img.shields.io/badge/license-MIT-blue.svg)

StakingDapp is a fullstack DeFi protocol built with Solidity, NextJS, NodeJS, Ethers, and Web3. The contract was deployed using [Remix IDE](https://remix.ethereum.org). It allows users to connect their MetaMask wallet, stake their SepoliaETH, and unstake their tokens at a desired interest rate.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Deployment](#deployment)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [NodeJS](https://nodejs.org/en/download)
- [Metamask](https://metamask.io/) or another Ethereum wallet for interacting with your contracts

## Getting Started

### Installation

1. Clone the project repository:

```bash
git clone https://github.com/hadesbaker/StakingDapp.git
cd StakingDapp
```

2. Install the required frontend dependencies:

```bash
cd frontend
npm install
# or
yarn install
```

3. Install the required backend dependencies:

```bash
cd ..
cd backend
npm install
# or
yarn install
```

### Usage

Log into [RemixIDE](https://remix.ethereum.org) and deploy the Staking.sol contract. Copy the ABI and contract address and replace the values within frontend/contracts/index.js.

In the backend folder, create a file called .env. Within the .env file, add a MORALIS_KEY variable with the moralis api key you can get from [here](https://admin.moralis.io/login).

i.e. MORALIS_KEY=dwindwdiwndiwniwndiwdinwdinwdidindiwn

In a seperate terminal window, run the backend node server:

```bash
cd backend
node index.js
```

In another terminal window, run the development server:

```bash
cd frontend
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Make sure to properly use the protocol, your metamask wallet is switched to the Sepolia network and the account you connect has SepoliaETH available.

## Deployment

Before deploying your contracts to the Ethereum mainnet, ensure you have:

1. Sufficient ETH for gas fees in your deployment account
2. Completed a security audit of your contracts
3. Considered legal and regulatory compliance

To deploy your contracts, return to [Remix](https://remix.ethereum.org) and change the environment to Injected Provider - MetaMask. Afterwards change the network in your MetaMask browser extension to Ethereum Mainnet and hit deploy. 

Copy the new contract address and ABI, paste them into frontend/contracts/index.js and then refresh the page. 