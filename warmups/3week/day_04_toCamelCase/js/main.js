console.log('Lala');

// Challenge: 26-toCamelCase
// Difficulty: Intermediate
// Prompt:
// - Write a function called toCamelCase that accepts a single string as an argument.
// - The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
// - If the string argument does not contain a "_" or a "-", return the same string.
// Hints:
// - This is a great challenge for using regular expressions combined with the String.replace method.
// Examples:
// toCamelCase( 'sei' ) // => 'sei'
// toCamelCase( 'sei-rocks' ) // => 'seiRocks'
// toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
// toCamelCase( 'Mama-mia' ) // => 'MamaMia'
// toCamelCase( 'A_b_c' ) // => 'ABC'

const toCamelCase = function(string) {
    let result = string.split('');
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        const char = result[i];
        if (char === '-' || char === '_') {
            result.splice(i, 1); // remove 1 element at index i
            result[i] = result[i].toUpperCase();
        }
    }
    return result.join('');
}


const toCamelCase = function(string) {
    let result = string;
    let partsToBeReplaced = [];

    const p = /[-_]\w/g; // /g allow it to run recursively
    partsToBeReplaced = string.match(p);
    console.log(partsToBeReplaced);
    
    if (partsToBeReplaced) {
        for (let i = 0; i < partsToBeReplaced.length; i++) {
            const part = partsToBeReplaced[i];
            result = result.replace(part, partsToBeReplaced[i][1].toUpperCase());
        }
    }
    return result;
}


const toCamelCase = function (str) {
    return str.replace(/[_-]\w/g, function(match) {
    //   return match.charAt(1).toUpperCase();
      return match[1].toUpperCase();
    });
}

console.log(toCamelCase( 'sei' ));
console.log(toCamelCase( 'sei-rocks' ));
console.log(toCamelCase( 'banana_Turkey_potato' ));
console.log(toCamelCase( 'Mama-mia' ));
console.log(toCamelCase( 'A_b_c' ));