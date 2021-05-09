// # Pairwise

// Write a function that accepts an array and a number, from the array find the element pairs whose sum equal to that number, and return the sum of their indices.

// If there are multiple valid pairs that have the same numeric elements but different indices, return the smallest sum of indices. Once an element has been used, it cannot be reused to pair with another.

// For example:
// ```js
// pairwise([7, 9, 11, 13, 15], 20)
// // => return 6
// // The pairs that sum to 20 are [7, 13], [9, 11] at indices: 0, 3, 1, 2 (total: 6).

// pairwise([7, 9, 11, 13, 15, 7, 13, 5, 5, 15], 20) 
// // => returns 17. 
// // The pairs that sum to 20 are [7, 13], [9, 11] and [15, 5] at indices: 0, 3, 1, 2, 4, 7 (total: 17).
// ```
// ## Bonus

// `pairwise` function also prints out all the pairs of indices in the array when the sum is equal to a specific number.

// For example:
// ```js
// pairwise([7, 9, 11, 13, 15, 7, 13, 5, 5, 15], 20) 

// // Expect to print out:

// // There is a pair at indices: [0, 3]

// // There is a pair at indices: [1, 2]

// // There is a pair at indices: [4, 7]
// ```

const pairwise = function (array, sum) {
  // Store all matched pairs in an array
  let matchedPairs = [];
  // Store all matched indices in an array
  let matchedPairsIndices = [];

  // loop through the array
  for (let i = 0; i < array.length - 1; i++) {
    // put it in a variable

    const firstNum = array[i];
    console.log('*** firstNum', firstNum);
    // IMPROVEMENT: if there is already that number in matchedPairs, do nothing
    if (!matchedPairs.flat().includes(array[i])) {
      
      // loop through the array from the number after the firstNum to the rest of the array
      for (let j = i + 1; j < array.length; j++) {
        const secondNum = array[j];
        console.log('secondNum', secondNum);

        // if the sum of 2 numbers is eq to sum 
        if (firstNum + secondNum === sum) {
          matchedPairs.push([firstNum, secondNum]);
          matchedPairsIndices.push([i, j])
          console.log([firstNum, secondNum]);
          // console.log(matchedPairs);
          console.log([i, j]);
          // console.log(matchedPairsIndices.flat());

          // break the loop early if a pair is found
          break;
        }
      }
    }
  }
  console.log(matchedPairs);
  matchedPairsIndices.forEach(array => {
    console.log(`There is a pair at indices: [${array.join(', ')}]`);
 
  });
  return matchedPairsIndices.flat().reduce((accumulator, currentValue) => accumulator + currentValue);
}

// console.log(pairwise([7, 9, 11, 13, 15], 20));
console.log(pairwise([7, 9, 11, 13, 15, 7, 13, 5, 5, 15], 20));

