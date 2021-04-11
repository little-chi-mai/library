console.log('Lolo');

// Challenge: 29-addChecker
// Difficulty: Intermediate
// Prompt:
// - Write a function called addChecker that accepts two arguments.
// - The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
// - The second argument is an integer.
// - The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
// - If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.
// Hint:
// - An efficient solution can leverage the fact that the integers in the array come sorted for you.

// Examples:
// addChecker( [1, 2], 3 ) // => true
// addChecker( [-3, 2], 9 ) // => false
// addChecker( [10, 15, 16, 22], 32 ) // => true
// addChecker( [10, 15, 16, 22], 19 ) // => false

const addChecker = function(array, number) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // console.log(array[i], array[j], number);
            if (array[i] + array[j] == number) {
                return true;
            }
        }
    }
    return false;
}

console.log(addChecker( [1, 2], 3 ));
console.log(addChecker( [-3, 2], 9 ));
console.log(addChecker( [10, 15, 16, 22], 32 ));
console.log(addChecker( [10, 15, 16, 22], 19 ));