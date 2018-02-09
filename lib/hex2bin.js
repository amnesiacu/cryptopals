// hex2bin
// author: https://github.com/amnesiacu

const hex2bin = (n) => {
  let inputStr = n.toString();
  let bytes = [];
  for ( let i = 0; i < inputStr.length; i+=2 ) {
    let n = parseInt(inputStr.substr(i, 2),16).toString(2)
    n = "00000000".substr(n.length) + n;
    bytes.push(n)
  }
  return bytes.join('');
}

module.exports = hex2bin
