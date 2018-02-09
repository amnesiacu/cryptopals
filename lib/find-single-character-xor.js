// find-single-character-xor.js
// author: https://github.com/amnesiacu

const singleCharacterXor = require('../lib/single-character-xor')

const findSingleCharacterXor = (inputHex) => {
	const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOQRSTUVWXYZ1234567890"
	let maxCharacter = null
	let max = 0
	let guess = "Didnt find anything remotely good"

	for (let j = 0; j < characters.length ; j++ ){
		let character = characters[j]
		let { outputText, outputScore } = singleCharacterXor(inputHex, character)

		if ( outputScore > max ) {
			max = outputScore;
			guess = outputText
      maxCharacter = character
		}
	}
	
	return {outputText: guess, outputScore: max, outputCharacter: maxCharacter}
}

module.exports = findSingleCharacterXor
