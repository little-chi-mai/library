// # Caesar's Cipher

// Julius Caesar protected his confidential information by encrypting it using a cipher. 
// Caesar's cipher shifts each letter by a number of letters. 
// If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
// In the case of a rotation by 3: a, b, c, and d would map to d, e, f and g.

// Create a function that takes a string and an integer (the rotation factor). 
// It should return an encrypted string.

// ## Example
// ```javascript
// cipher("Joel is great!!!", 3) 
// ```
// should return `"Mrho lv juhdw!!!"`

// ## Bonus

// Create a function to decrypt a string with the key

// Create another function to bruteforce the solution


// ## Hints

// [https://cryptii.com/pipes/caesar-cipher](https://cryptii.com/pipes/caesar-cipher)

// [Caesar Cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)

// If you want to use arrays you can use:
// ```javascript
const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
// const capitalLetters = [
//   'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
//   'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
// ]
// ```

const cipher = function(string, num, encrypt = true) {
  let result = [];
  string.split('').forEach(char => {
    let newIndex = 0;
    let lowerCaseChar = char.toLowerCase();

    if (letters.indexOf(lowerCaseChar) >= 0) {
      // if (encrypt) {
        newIndex = letters.indexOf(lowerCaseChar) + num;
        if (newIndex > letters.length - 1) {
          newIndex -= letters.length;
        }
      // } else {
      //   newIndex = letters.indexOf(lowerCaseChar) - num;
      //   if (newIndex < 0) {
      //     newIndex += letters.length;
      //   }
      // }

      // check if the char is capital
      if (char !== lowerCaseChar) {
        result.push(letters[newIndex].toUpperCase());
      } else {
        result.push(letters[newIndex]);
      }
      // not a letter
    } else {
      result.push(char);
    }
  });
  // console.log(result.join(''));
  return result.join('');
}

cipher("Joel is great!!!", 3, true)
cipher("Mrho lv juhdw!!!", 3, false)

const bruteDeCipher = (string) => {
  const list = []
  for (let i = 0; i < 26; i++){
    list.push(cipher(string, i, false))
  }
  // console.log(list);
  return list;
}
console.table(bruteDeCipher("Mrho lv juhdw!!!"))
