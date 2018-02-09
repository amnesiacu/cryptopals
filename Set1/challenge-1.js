const hex2bin = require('../lib/hex2bin')
const bin2base64 = require('../lib/bin2base64')
const assert = require('assert');

let inputHex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
const solution = "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t"

let binString = hex2bin(inputHex);
let base64String = bin2base64(binString);
console.log(base64String);

assert.equal(base64String, solution, "Should give correct solution");

