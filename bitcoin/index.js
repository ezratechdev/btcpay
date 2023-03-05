const { createWallet } = require("./wallet");

const { mainnet, testnet } = require("bitcore-lib/lib/networks");


console.log(createWallet(testnet));