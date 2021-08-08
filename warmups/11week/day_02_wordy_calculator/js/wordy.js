// # Wordy Calculator
// Write Ruby code that takes word problems in the following formats:

// ```
// What is 5 plus 13?

// What is 7 minus 5?

// What is -6 multiplied by 4?

// What is 25 divided by -5?
// ```

// and returns the answer as an integer.

// You should define a Calculator class which uses the constructor function (initialize) to set the question, and an `answer` method to return the answer.

// Use a regular expression to parse the question.

// **HINT**: You will probably want to use Ruby's match method, and in particular a [capture](https://code.tutsplus.com/tutorials/ruby-for-newbies-regular-expressions--net-19812) group which uses parentheses in the regex, and returns a MatchData array.

// [This site](https://regexr.com/3cr6f) might also be helpful.

const wordyCalculator = function(question) {
  let result = 0;

  // let p = /(-?\d+) (minus|multiplied by|plus|divided by) (-?\d+)/i;
  let p = /(-?\d+)\s+(minus|multiplied by|plus|divided by)\s+(-?\d+)/i;
  let matches = question.match(p);

  if (!matches) return "Invalid question";
  // const [match, num1, operator, num2] = matches;
  console.log(matches);
  // console.log(matches[0]);
  const a = parseInt(matches[1]);
  const b = parseInt(matches[3]);
  const operator = matches[2].toLowerCase();
  console.log(a);
  console.log(operator);
  console.log(b);

  if (operator === "plus") {
    console.log("PLUS");
    result = a + b;
  } else if (operator === "minus") {
    console.log("MINUS", parseInt(a), parseInt(b));
    result = a - b;

  } else if (operator === "multiplied by") {
    console.log("multiplied by");
    result = a * b;
  } else if (operator === "divided by") {
    console.log("divided by");
    result = a / b;
  }
  console.log('result', result);
  return result;
}
wordyCalculator('What is 7 Minus   5?');
// wordyCalculator('What is 5 plus 13?');
// wordyCalculator('What is -6 multiplied by 4?');
// wordyCalculator('What is 25 divided by -5?');


