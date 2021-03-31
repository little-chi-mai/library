console.log('Lala');

// Sum of arrays
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers. You don't know their length and they can contain both integers and floating point numbers.

// Example
// [2, 6.4, 3] + [3, 3.6, 2] = 20

const sum = function (arr1, arr2) {
    let result = 0;
    arr1.forEach(num => {
        result += num;
        // console.log(parseFloat(num));
        console.log(result);
    });

    arr2.forEach(num => {
        result += num;
        console.log(result);
    });

    return result;
}

const sumMultiple = function () {
    let result = 0;

    // console.log(arguments[0]);
    for (let i = 0; i < arguments.length; i++) {
        const arr = arguments[i];

        for (let j = 0; j < arr.length; j++) {
            result += arr[j];
            console.log(result);
        }
    }

    return result;
}

console.log(sum([2, 6.4, 3], [3, 3.6, 2]));
console.log(sumMultiple([2, 6.4, 3], [3, 3.6, 2], [2, 6.4, 3], [3, 3.6, 2]));