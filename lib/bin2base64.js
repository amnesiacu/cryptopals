// bin2base64.js
// author: https://github.com/amnesiacu
// https://en.wikipedia.org/wiki/Base64

const cypher = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

const bin2base64 = (n) => {
  inputStr = n.toString();
  if (inputStr.length % 6 !== 0) {
    inputStr = n + "000000".substr(n.length % 6)
  }
  let base64 = []
  for (let i = 0; i < inputStr.length; i+= 6){
    let n = parseInt(inputStr.substr(i, 6), 2)
    base64.push(cypher[n])
  }
  return base64.join('');
}

module.exports = bin2base64
