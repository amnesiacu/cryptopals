const assert = require('assert')

//let input = "Burning 'em, if you ain't quick and nimble\n\rI go crazy when I hear a cymbal"
let input = "Burning 'em, if you ain't quick and nimble\r\nI go crazy when I hear a cymbal"

const ascii2hex = (input) => {
	let hex = []
	for (let i = 0; i < input.length; i++){
		let charInt = input[i].charCodeAt()
		let charHex = charInt.toString(16)
		if (charInt == 10) charHex = '0a'
		if (charInt == 13) charHex = '0d'
		//console.log(charHex)
		hex.push(charHex);
	}
	return hex.join('');
}

let inputHex = ascii2hex(input);
console.log(inputHex);
assert.equal(inputHex,"4275726e696e672027656d2c20696620796f752061696e277420717569636b20616e64206e696d626c650d0a4920676f206372617a79207768656e2049206865617220612063796d62616c", "AsciiToHex should be good" )
