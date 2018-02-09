// single-character-xor.js
// author: https://github.com/amnesiacu

const hex2bin = require('../lib/hex2bin')
const bin2hex = require('../lib/bin2hex')
const fixedXor = require('../lib/fixed-xor')

const singleCharacterXor = (inputHex, character) => {
	let inputBin = hex2bin(inputHex);

	let charHex = character.charCodeAt(0).toString(16);
	let charBin = hex2bin(charHex);

	let xorredHex = []
	let xorredString = []
	let xorredScore = 0
	let outputHex = ""
	let outputText = "Nothing"

	for (let i = 0; i < inputBin.length; i+=8) {
		let charIt = inputBin.substr(i, 8)
		let outBin = fixedXor(charIt, charBin)
		let outHex = bin2hex(outBin)
		xorredHex.push(outHex)
		let outAscii = String.fromCharCode(parseInt(outHex, 16))
        if (parseInt(outHex, 16) === 10) outAscii = '\\n'
		xorredString.push(outAscii)
		if (['a','e','i','o','u', 'Y', 'y', 'I', ' '].includes(outAscii)) xorredScore++
		if (['^','}','{','|','*'].includes(outAscii)) xorredScore--
	}

	outputText = xorredString.join('');
	outputHex = xorredHex.join('');

	return { 
    outputHex: outputHex,
    outputText: outputText,
    outputScore: xorredScore,
    outputCharacter: character
  }
}

module.exports = singleCharacterXor

