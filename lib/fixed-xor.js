// fixed-xor.js
// author: https://github.com/amnesiacu
//
const fixedXor = (n1, n2) => {
	let bits = []
	if (n1.length === n2.length) {
		for (let i = 0; i < n1.length ; i++){
			bits.push(n1[i]^n2[i])
		}
	} else {
		throw Error('Whoops, numbers should be equal length.');
	}
	return bits.join('')
}

module.exports = fixedXor
