//Problem: Word Frequency Counter
// Write a function that receives a paragraph of text and returns the frequency of each word in the paragraph.
//function wordFrequencyCounter(paragraph) {

function wordFrequencyCounter(paragraph) {
  // Normalize the paragraph by converting it to lowercase and removing punctuation
  const normalizedParagraph = paragraph.toLowerCase().replace(/[.,!?;:]/g, '');
  
  // Split the paragraph into words
  const words = normalizedParagraph.split(/\s+/);
  
  // Create an object to hold the word frequencies
  const frequency = {};
  
  // Iterate through each word and count its occurrences
  words.forEach(word => {
    if (word) { // Check if the word is not empty
      frequency[word] = (frequency[word] || 0) + 1;
    }
  });
  
  return frequency;
}


//example 2
//given a string, find the first non repeating character and return it otherwise return none

//Algorithmic Thinking
//create a dictionary to store a character and its frequency
//loop through and return char whose freq == 1

function checkNonRepeatingCharacter(myString){
    const frequency = { }
    //split the string into a charArray
    const charArray = myString.split("")
    
    //loop through the array take each character and count its occurencies
    charArray.forEach(character => {
        if(character){
            frequency[character] = (frequency[character] || 0) + 1
        }
    });

    //check the first non repeating character
    for(let item in frequency){
        if(frequency[item] == 1){
            return item
        }
    }

    //otherwise return None
    return None
    
}

console.log(checkNonRepeatingCharacter("ssajdkff"))


//example 3
// Problem: Detect Repeated Numbers in a List
// Given an array of integers, return all numbers that appear more than once.
// Input: [1, 2, 3, 2, 4, 5, 1]
// Output: [1, 2]

//AT
function findRepeatedNumbers(myArray){
    let frequency = { }
    const repeatedNumbers = []
    myArray.forEach(element => {
        if(element){
            frequency[element] = (frequency[element] || 0) + 1
        }
    });

    for(let item in frequency){
        if(frequency[item] > 1){
            repeatedNumbers.push(item)
        }
    }

    if(repeatedNumbers.length == 0){
        return null
    }
    return repeatedNumbers
}

console.log(findRepeatedNumbers([1, 2, 3, 2, 4, 5, 1]))


//example 5
// Problem: Find the Longest Word in a Sentence
// Given a sentence, return the longest word.
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

//format the string to lowercase and remove punctuation marks
//convert the sentence into an array of words
//get the length or each and every word
//store each word in an object and their length
//do a max across the object
//return the word with max-length

function findTheLongestWord(text){
    word_length = { }
    //step 2
    const wordArray = text.split(" ")

    const longest = wordArray.reduce((prev, current) => {
        return prev.length > current.length ? prev : current
    }, "");

    return longest

}

console.log(findTheLongestWord("The quick brown fox jumped over the lazy dog"))
