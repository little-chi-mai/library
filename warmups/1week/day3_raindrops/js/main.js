

// ## Warmup - Raindrops

// Write a Javascript program that will accept a number (eg 28 or 1755 or 9, etc) and output based on the following conditions:

// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

// ### Examples
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

console.log("Hello from the console");

const raindrops = function( number ) {
    // we declare a variable and give it a meaningful name of output to track our expecting output; 
    // Also I'll give it an initial value of an empty string.
    let output = "";

    // Let check the first condition.
    // To check whether 3 is a factor of a number, we use a operator called modulo. 
    // It returns the remainder of a division.
    // So if the remainder equal to 0, 3 is a factor of that number // or that number is divisible by 3
    // and if the remainder is not equal to 0, 3 is not a factor.
    // The symbol of modulo in JS is %

    // We will write an if statement that check if the number modulo 3 equal to 0 
    // The three equal signs is called strict equality, Joel will talk about it later in the session.

    if ( number % 3 === 0 ) { 
        output = output + 'Pling'; 
    }

    if ( number % 5 === 0 ) {
        output = output + 'Plang';
    }

    if ( number % 7 === 0 ) {
        output = output + 'Plong';
    }

    if ( output.length === 0 ) {
        // output = output + number; 
        output = number.toString();
    }

    return output;
}

console.log(raindrops( 1755 ));
console.log(raindrops( 34 ));
console.log(raindrops( 28 ));
console.log(raindrops( 105 ));
