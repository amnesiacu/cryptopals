const hex2bin = require('../lib/hex2bin');
const bin2hex = require('../lib/bin2hex');
const fixedXor = require('../lib/fixed-xor');

const assert = require('assert');

const input1 =  "1c0111001f010100061a024b53535009181c";
const input2 =  "686974207468652062756c6c277320657965";
const solution = "746865206b696420646f6e277420706c6179";

let bin1String = hex2bin(input1);
let bin2String = hex2bin(input2);

let xorString = fixedXor(bin1String, bin2String);
xorString = bin2hex(xorString);
console.log(xorString);

assert.equal(xorString, solution, "Should give correct solution");

