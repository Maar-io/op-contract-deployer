import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });
const TESTNET_PRIVATE_KEY = process.env.TESTNET_PRIVATE_KEY || "";
console.log("TESTNET_PRIVATE_KEY set:", !!TESTNET_PRIVATE_KEY);

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      accounts: [process.env.TESTNET_PRIVATE_KEY || ""],
      url: "http://localhost:8545/"
    },
    sepolia: {
      accounts: [process.env.TESTNET_PRIVATE_KEY || ""],
      url: "https://sepolia-01.astar.network/",
      chainId: 11155111,
    },
    osaki: {
      accounts: [process.env.TESTNET_PRIVATE_KEY || ""],
      url: "http://rpc.stg.hypersonicl2.com/",
      chainId: 200200,
      gasPrice: 20000000000, // 20 gwei
    },
    minato: {
      accounts: [process.env.TESTNET_PRIVATE_KEY || ""],
      url: "http://rpc.minato.soneium.org/",
      chainId: 1946,
    },
    optimismSepolia: {
      url: `https://sepolia.optimism.io`,
      accounts: [process.env.TESTNET_PRIVATE_KEY || ""]
    },
    // optimism: {
    //   url: "https://mainnet.optimism.io",
    //   accounts: [process.env.MAINNET_PRIVATE_KEY || ""]
    // }
  },

  etherscan: {
    apiKey: {
      sepolia: " ",
      osaki: " ",
      optimismSepolia: " ",
      optimism: " ",
      minato: " ",
    },
    customChains: [
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://eth-sepolia.blockscout.com/api",
          browserURL: "https://eth-sepolia.blockscout.com/",
        },
      },
      {
        network: "osaki",
        chainId: 200200,
        urls: {
          apiURL: "https://osaki-explorer.startale.com/api",
          browserURL: "https://osaki-explorer.startale.com",
        },
      },
      {
        network: "minato",
        chainId: 1946,
        urls: {
          apiURL: "http://explorer-testnet.soneium.org//api",
          browserURL: "http://explorer-testnet.soneium.org/",
        },
      },
      {
        network: "optimismSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://optimism-sepolia.blockscout.com/api",
          browserURL: "https://optimism-sepolia.blockscout.com/",
        },
      },
      // {
      //   network: "optimism",
      //   chainId: 10,
      //   urls: {
      //     apiURL: "https://optimism.blockscout.com//api",
      //     browserURL: "https://optimism.blockscout.com/",
      //   },
      // },
    ],
  },

};

export default config;
