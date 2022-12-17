require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { KAVA_EVM_PRIVATE_KEY } = process.env;
// If you are using MetaMask, be sure to change the chainId to 1337
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
      },
      {
        version: "0.6.6",
        settings: {},
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    kava_evm: {
      url: "https://evm.evm-alpha.kava.io",
      accounts: [`${KAVA_EVM_PRIVATE_KEY}`],
      chainId: 2221,
      tags: ["kava"],
  },
  }
};
