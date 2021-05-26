console.log('lala');

// CODERBYTE BEGINNER CHALLENGE                                        *
// *                                                                                      *
// *  Simple Symbols                                                                      *
// *  Using the JavaScript language, have the function SimpleSymbols(str) take the str    *
// *  parameter being passed and determine if it is an acceptable sequence by either      *
// *  returning the string true or false. The str parameter will be composed of + and =   *
// *  symbols with several letters between them (ie. ++d+===+c++==a) and for the string   *
// *  to be true each letter must be surrounded by a + symbol. So the string to the left  *
// *  would be false. The string will not be empty and will have at least one letter. 

const simpleSymbols = (str) => {
    let output = true;
    const inputArr = str.split('');

    const p = /[A-Za-z]/; 

    inputArr.forEach((char, i) => {
        if (char.match(p)){
            console.log(char.match(p));
            console.log(i);
            if (str[i - 1] !== '+' | str[i + 1] !== '+') {
                output = false
            }
        }
    })
    return output;
};

console.log(simpleSymbols('++d+===+c++==+D+'));