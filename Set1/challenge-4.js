const findSingleCharacterXor = require('../lib/find-single-character-xor')

let {input} = require('./challenge-4.json')

let max = 0;
let solution = null;
let solutionCharacter = null;

for (let i = 0 ; i < input.length ; i++ ) {
	let {outputText, outputScore, outputCharacter} = findSingleCharacterXor (input[i])
	//console.log(outputText, outputScore, outputCharacter)
	if (outputScore > max ) {
		max = outputScore;
		solution = outputText;
		solutionCharacter = outputCharacter
	}
}

console.log(solution)

