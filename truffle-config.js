require('babel-register')
require('babel-polyfill')
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

const HDWalletProvider = require("truffle-hdwallet-provider")
const path = require("path")

let PROVIDER = process.env.PROVIDER || 'INFURA'
let PROJECT_ID = process.env.PROJECT_ID || 'dummy' // dummy to avoid error en empty envirnment variable
let INFURA_KEY = process.env.INFURA_KEY || 'dummy' // dummy to avoid error en empty envirnment variable
let ALCHEMY_KEY = process.env.ALCHEMY_KEY || 'dumyy' // dummy to avoid error en empty envirnment variable
let MNENOMIC = process.env.MNENOMIC || 'dummy' // dummy to avoid error en empty envirnment variable
let INFURA_URL = process.env.INFURA_URL || 'https://kovan.NETWORK.io/v3/'
let ALCHEMY_URL = process.env.ALCHEMY_URL || 'https:/}/eth-NETWORK.alchemyapi.io/v2/'
let FROM = process.env.FROM || '0x0Fb80359dD096A1Ec1FbfDC07ddEBc2003272b0c'

const PROVIDER_KEY = (PROVIDER && PROVIDER == 'ALCHEMY') ? ALCHEMY_KEY : INFURA_KEY
const PROVIDER_URL = (PROVIDER && PROVIDER == 'ALCHEMY') ? ALCHEMY_URL : INFURA_URL


if (!MNENOMIC || !PROJECT_ID  || !PROVIDER_KEY) {
  console.error("********************************************************************************************")
  console.error("********************************************************************************************")
  console.error("")
  console.error("Please set a MNENOMIC, PROJECT_ID and INFURA/ALCHEMY KEY in an environment file (.env)")
  console.error("(if you want to use another network that localhost)")
  console.error("")
  console.error("********************************************************************************************")
  console.error("********************************************************************************************")
}

const PROVIDER_COMPLETE_URL = PROVIDER_URL + PROVIDER_KEY

module.exports = {
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 5777
    },
    ropsten: {
      networkCheckTimeout: 90000,
      provider: () => new HDWalletProvider(MNENOMIC, PROVIDER_COMPLETE_URL.replace('NETWORK', 'ropsten')),
      network_id: 3,
      gas: 29000000,
      gasPrice: 10000000000,
      from: FROM
    },
    kovan: {
      networkCheckTimeout: 90000,
      provider: () => new HDWalletProvider(MNENOMIC, PROVIDER_COMPLETE_URL.replace('NETWORK', 'kovan')),
      network_id: 42,
      gas: 29000000,
      gasPrice: 10000000000,
      from: FROM
    },
    rinkeby: {
      networkCheckTimeout: 90000,
      provider: () => new HDWalletProvider(MNENOMIC, PROVIDER_COMPLETE_URL.replace('NETWORK', 'rinkeby')),
      network_id: 4,
      gas: 29000000,
      gasPrice: 10000000000,
      from: FROM
    },
    // main ethereum network(mainnet)
    main: {
      networkCheckTimeout: 90000,
      provider: () => new HDWalletProvider(MNENOMIC, PROVIDER_COMPLETE_URL.replace('NETWORK', 'mainnet')),
      network_id: 1,
      gas: 29000000,
      gasPrice: 10000000000,
      from: FROM
    }
  },
  contracts_build_directory: path.join(__dirname, "./compiled-contracts/"),
  contracts_directory: path.join(__dirname, "./contracts/"),
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
