/**
 * THIS IS A SIMPLE WAY OF MAKING A TRANSACTION
 * LESSONS FROM 
 * https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/hierarchical.md
 */

const bitcore = require("bitcore-lib");
const Address = require("bitcore-lib/lib/address");


// CREATE AN ADDRESS FROM A WORD PHRASE
const value = Buffer.from('test and more thesjdksjds sfdkjfkdf dfjdkgudifgufjgfmngfnhgdfjgkfjgkf correct horse battery staple data tst');
const hash = bitcore.crypto.Hash.sha256(value);
const bn = bitcore.crypto.BN.fromBuffer(hash);

/**
 * TOGGLE FROM TESTNNET TO LIVENET 
 * FOR REAL LIFE TESTING USE TESTNET
 */

const key = new bitcore.PrivateKey(bn , bitcore.Networks.testnet)

const address = key.toAddress("testnet");

console.log(address.toString())

