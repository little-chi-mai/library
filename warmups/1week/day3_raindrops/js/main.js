

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
    // we declare a variable and give it a meaningful name of output to track our expecting output; Also I'll give it an initial value of an empty string.
    let output = "";

    // 
    if ( number % 3 === 0 ) { // modulo returns the remainder of a division
        output = output + 'Pling'; // initialising our output variable to be an empty string
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
