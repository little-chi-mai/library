// # Counting Valleys

// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly `steps` steps, for every step it was noted if it was an uphill `U`, or a downhill, `D` step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Write a function that accepts a string as a sequence of up and down steps during a hike, return the number of valleys walked through.

// ```js
// counting_valleys `UDDDUDUU`
// # => expect to return 1
// ```
// ### Explanation

// If we represent `_` as sea level, a step up as `/`, and a step down as `\`, the hike can be drawn as:
// ```
// _/\      _
//    \    /
//     \/\/
// ```

const counting_valleys = function(string) {
  // set innitial value of altitude and valleyCount
  let altitude = 0;
  let valleyCount = 0;

  // Loop through all the steps
  string.split('').forEach(step => {
    if (step.toUpperCase() === 'U') {
      altitude += 1;
    } else if (step.toUpperCase() === 'D') {
      // when the person go down and pass the sea level
      if (altitude === 0) {
        valleyCount += 1
      }
      altitude -= 1;
    }
  })

  return valleyCount;
}

console.log(counting_valleys('UDDDUDUU'));

