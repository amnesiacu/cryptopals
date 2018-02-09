// bin2hex.js
// author: https://github.com/amnesiacu

const bin2hex = (n) => {
	let hexStr = [];
	for (let i = 0 ; i < n.length ; i+=8){
		hexStr.push(parseInt(n.substr(i, 8), 2).toString(16));
	}
	return hexStr.join('');
}

module.exports = bin2hex
