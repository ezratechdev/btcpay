/**
 * THIS IS A SIMPLE WAY OF GENERATING AN ADDRESS
 * LESSONS FROM 
 * https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/address.md
 */

const bitcore = require("bitcore-lib");
const PrivateKey = require("bitcore-lib/lib/privatekey");


// creating a private key
const privateKey = new PrivateKey();

// create an address 
const address = privateKey.toAddress();

console.log(address);