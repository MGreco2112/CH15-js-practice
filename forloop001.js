let string = "friends, romans, countrymen, lend me your ears.";
let words = string.split(" ");
let sortedWords;
let sentence = "";

 sortedWords = words.sort(function(a , b) {return a.length - b.length});

for (let i = 0; i < sortedWords.length; i++) {
    sentence += sortedWords[i].substring(0,1).toUpperCase() + sortedWords[i].substring(1).toLowerCase() + " (" + sortedWords[i].length + ") ";
}

console.log(sentence);


/*
Level 4


Counts the length of each word in the string.  The output should look like the following:


friends (7), romans (7), countrymen (10) , lend (4) me (2) your (4) ears (4).
*/
