/**
 * THIS IS A SIMPLE WAY OF GENERATING HD PRIVATE KEYS AND PUBLIC KEYS
 * LESSONS FROM 
 * https://github.com/bitpay/bitcore/blob/master/packages/bitcore-lib/docs/hierarchical.md
 */

const bitcore = require("bitcore-lib");
const Address = require("bitcore-lib/lib/address");
const HDPrivateKey = bitcore.HDPrivateKey;


/**
 * HDKeys

Create and derive extended public and private keys according to the BIP32 standard for Hierarchical Deterministic (HD) keys.

HDPrivateKey

An instance of a PrivateKey that also contains information required to derive child keys.
 */


// creating the hd private key
const hdPrivateKey = new HDPrivateKey("xprv9s21ZrQH143K3wVbhfyBgeWfcZWfASH4SEcJjLQSrDXK6kkeNHSv59Yo5gR81arG1HN8DUjbcek8wQ2AJndsBSST2B9nri9vusU2s6YUSHP");

// if you are retrieving a private key
// generated this privatekey : going to now use it for all tests
// xprv9s21ZrQH143K3wVbhfyBgeWfcZWfASH4SEcJjLQSrDXK6kkeNHSv59Yo5gR81arG1HN8DUjbcek8wQ2AJndsBSST2B9nri9vusU2s6YUSHP
// const retrieved = new HDPrivateKey('xpriv...');

// if you are creating a private key
// const derived = hdPrivateKey.derive("m/0'"); // see deprecation warning for derive
const derived = hdPrivateKey.derive("m/0'"); // see deprecation warning for derive


console.log()
console.log(hdPrivateKey.toString())
console.log()

const address = derived.privateKey.toAddress();

// obtain HDPublicKey
const hdPublicKey = hdPrivateKey.hdPublicKey;


// console.log(hdPublicKey)

/**
 * HDPublicKey

An instance of a PublicKey that can be derived to build extended public keys. Note that hardened paths are not available when deriving an HDPublicKey.
 */

const hdPublicKey1 = hdPrivateKey.hdPublicKey;

// try {
//     new HDPublicKey();
//   } catch(e) {
//     console.log("Can't generate a public key without a private key");
//   }

/**
 * TOGGLE FROM TESTNNET TO LIVENET 
 * FOR REAL LIFE TESTING USE TESTNET
 */

const newAddress = new Address(hdPublicKey1.publicKey , bitcore.Networks.livenet);

// const derivedSddress = new Address(hdPublicKey1.derive(100).p)

console.log(newAddress.toString() + '\n address generated')