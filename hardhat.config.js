/* global ethers task */
require('@nomiclabs/hardhat-waffle')
require("dotenv").config();
require("./scripts/add_facet");
require("./scripts/remove_facet");
require("./scripts/upgrade_facet");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
      chainId: 1337,
    },
    ropsten: {
      chainId: 3,
      url: process.env.API_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
      },
      gas: 2100000,
      gasPrice: 8000000000,
    },
    matic: {
      chainId: 80001,
      url: process.env.API_URL,
      accounts: {
        mnemonic: "moment dismiss public double depart year ready donkey cargo climb glimpse repeat kidney major awake chicken today path stable staff say coach height team",
      },
      gas: 2100000,
      gasPrice: 8000000000,
    }
  },
  solidity: '0.8.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}