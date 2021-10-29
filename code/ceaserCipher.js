function ceasar(string, key) {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    let ascii = string.charCodeAt(i) + (key % 26);
    if (
      (64 < string.charCodeAt(i) && string.charCodeAt(i) < 91) ||
      (96 < string.charCodeAt(i) && string.charCodeAt(i) < 123)
    ) {
      if (ascii > 90) {
        cipher += String.fromCharCode(ascii - 26);
      } else {
        cipher += String.fromCharCode(ascii);
      }
      // } else if (96 < string.charCodeAt(i) && string.charCodeAt(i) < 123) {
      //   if (ascii > 122) {
      //     cipher += String.fromCharCode(ascii - 26);
      //   } else {
      //     cipher += String.fromCharCode(ascii);
      //   }
    } else {
      cipher += string[i];
    }
  }
  return cipher;
}

module.exports = ceasar;
