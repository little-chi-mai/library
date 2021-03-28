// # Filter

// Your task is write a function that removes all duplicate words from a string, leaving only single (first) words entries.

// ## Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// # Bonus question

// Create a function that returns a string 'banana'. The catch is you can only use letters 'a' and 'b'.
// Super extra bonus points for proving "how well engineered Javascript really is".

// VERSION 1: 

const wordFilter = function (string) {
    let output = '';
    const outputArray = [];
    const inputArray = string.split(' ');
    
    for (let i = 0; i < inputArray.length; i++) {
        const word = inputArray[i];
        if (outputArray.includes(word)) {
            // console.log(`${word} is already included`);
        } else {
            // console.log(`${word} hasn't been included`);
            outputArray.push(word);
        }
    };

    /////// forEach
    // inputArray.forEach(word => {
    //     if (outputArray.includes(word)) {
    //         console.log(`${word} is already included`);
    //     } else {
    //         console.log(`${word} hasn't been included`);
    //         outputArray.push(word);
    //     }
    // });
    // console.log(outputArray);
    output = outputArray.join(' ');
    return output;
}

// VERSION 2: SET 
// The Set object lets you store unique values

const wordFilter = function (string) {
    let output = '';
    const inputArray = string.split(' ');
    console.log(inputArray);
    
    const outputSet = new Set();
    inputArray.map(word => outputSet.add(word));
    console.log(outputSet);

    const outputArray = [];
    outputSet.forEach(word => outputArray.push(word));
    // outputSet.forEach(word => output += word + ' ');
    output = outputArray.join(' ');
    console.log(output);

    return output;
}


console.log(wordFilter('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); 

// BONUS
const banana = function() {
    const result = 'b' + 'a' + + 'b' + 'a';
    return result.toUpperCase();
  }
  console.log(banana());