require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');

// const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY = '04c11c6d36cb28e8e7516c29303418a45442434547527890ff6f0cedfef2616c';

module.exports = {
  solidity: {
    version: '0.8.1',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    enabled: false,
    gasPrice: 50,
  },
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
      chainId: 1,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/7d-4Hdslo39B0ajTKijGkr8OhOjCpcES/`,
      chainId: 4,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: 'HAXJV6DBVG6PUWTZGGTR74GJYXMER1F1HJ'
  },
  ///////// when deploy and verify on bsc network ////////////
  // etherscan: {
  //   apiKey: 'WQF8UZVDYG62KQ6998H4JWWPTPRDYY8U7J'
  // }
};
