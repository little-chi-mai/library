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

  let p = /(-?\d+) (minus|multiplied by|plus|divided by) (-?\d+)/;
  // let p = /(-?\d+)\s+(minus|multiplied by|plus|divided by)\s+(-?\d+)/;
  let matches = question.toLowerCase().match(p);
  console.log(matches);

  if (!matches) return "Invalid question";

  const [match, a, operator, b] = matches;
  console.log(matches);
  console.log(matches[0]);
  console.log(matches[1]);
  console.log(matches[2]);
  console.log(matches[3]);

  if (operator === "minus") {
    console.log("MINUS");
    result = parseInt(a) - parseInt(b);
  } else if (operator === "plus") {
    console.log("PLUS");
    result = parseInt(a) + parseInt(b);
  } else if (operator === "multiplied by") {
    console.log("multiplied by");
    result = parseInt(a) * parseInt(b);
  } else if (operator === "divided by") {
    console.log("divided by");
    result = parseInt(a) / parseInt(b);
  }
  console.log('result', result);
}
wordyCalculator('What is 7 Minus   5?');
wordyCalculator('What is 5 plus 13?');
wordyCalculator('What is -6 multiplied by 4?');
wordyCalculator('What is 25 divided by -5?');


