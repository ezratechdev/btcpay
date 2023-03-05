const { PrivateKey } = require("bitcore-lib");
const bitcore = require("bitcore-lib");


const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const Mnemonic = require("bitcore-mnemonic");

const createWallet = (network = mainnet) => {

    const value = Buffer.from('test and more thesjdksjds sfdkjfkdf dfjdkgudifgufjgfmngfnhgdfjgkfjgkf correct horse battery staple data tst this data address two');
    // const value = Buffer.from('test and more thesjdksjds sfdkjfkdf dfjdkgudifgufjgfmngfnhgdfjgkfjgkf correct horse battery staple data tst');
    const hash = bitcore.crypto.Hash.sha256(value);
    const bn = bitcore.crypto.BN.fromBuffer(hash);

  var privateKey = new PrivateKey(bn,'testnet');
  var address = privateKey.toAddress('testnet');
  return {
    privateKey: privateKey.toString(),
    address: address.toString(),
  };
};

/**
A Hierarchical Deterministic (HD) wallet is the term used to describe a wallet which uses a seed to derive public and private keys
**/

const createHDWallet = (network = mainnet) => {
  let passPhrase = new Mnemonic(Mnemonic.Words.SPANISH);
  let xpriv = passPhrase.toHDPrivateKey(passPhrase.toString(), 'testnet');

  return {
    xpub: xpriv.xpubkey,
    privateKey: xpriv.privateKey.toString(),
    address: xpriv.publicKey.toAddress().toString(),
    mnemonic: passPhrase.toString(),
  };
};

module.exports = {
  createHDWallet,
  createWallet,
};