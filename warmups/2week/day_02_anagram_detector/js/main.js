// console.log('Lala');

// # Anagram Detector

// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word. A word is an anagram if its letters can be rearranged to create a new word.

// In other words, given: `"listen"` and `["enlists", "google", "inlets", "banana"]` the program should return "inlets".

// Other examples: `"debit card"` and `["money", "bad credit", "consumerism"]`; `"define anagram"` and `["google", "joke", "nerd fame again"]`

const anagram = function (word, list) {
    let matches = [];

    const sortedWord = word.split('').sort().join('').trim(); 
    // trim() removes white space from both ends of a string
    // console.log(sortedWord);

    // loop through list: sort and compare
    for (let i = 0; i < list.length; i++) {
        const sortedListItem = list[i].split('').sort().join('').trim();
        // console.log(sortedListItem);

        if (sortedListItem === sortedWord) {
            matches.push(sortedListItem);
        }
    }
    return matches;
}

// console.log(anagram('listen', ["enlists", "google", "inlets", "banana"]));

console.log(anagram("debit card", ["money", "bad credit", "consumerism"]));

// console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]));