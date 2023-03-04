const bitcore = require("bitcore-lib");


var privateKeyWIF = 'cPCipjcJqmzPy8g5wEU4Rs3Rj7vXgQRtydw7unVNcvSuMxHmbupn';

var privateKey = new bitcore.PrivateKey.fromWIF(privateKeyWIF);
var address = privateKey.toAddress('test');


console.log(address.toString())