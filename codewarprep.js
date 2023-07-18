// Create a function that returns the sum of the two lowest positive numbers given an array
// of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// PARAMETERS: array of integers with positive numbers
// RETURN: the sum of the two smallest numbers in the array
// EXAMPLES: [25, 31, 10, 2] return should be 12
// PSUEDO: start by making function sumOfTwoLowest(array)
//  create a variable for the return - let theSum = array[0] + array[1]
// I need to create a for loop that will looop through the array to find the two smallest numbers - for(let i=0; i < array.length; i++)
// make a conditional so the two smallest numbers are the first two in the array
// reassign the variables to ge the two smallest numbers to be the smallest
// return the variable
//  call the function

// ************************************************************

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// example: findShort("bitcoin take over the world maybe who knows perhaps") => 3

// PARAMETERS: string
// RETURN: the shortest word
// EXAMPLES: "i do not feel well today" => 1
// PSUEDO: function shortestWord(string)

// define the shortest words - let the theShortest = 
// split the string up by the words str.split(" ")
// since the words are split up we need to do a for loop to go through all the words to see which is the shortest word. 
// for (let i=0; i < words.length); i++)
// check to see if the word in the index is the shortest word
// if (words[i].length < shortest length ) 
// return the shorest word 

// call the function
//************************************************************


// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.
// The tests contain some very huge arrays, so think about performance.

// PARAMETERS: 
// RETURN:
// EXAMPLES:
// PSUEDO:

// ************************************************************

// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
// Note! a and b are not ordered!

// Example:
// GetSum(1, 0) == 1   1 + 0 = 1
// GetSum(1, 2) == 3   1 + 2 = 3
// GetSum(0, 1) == 1   0 + 1 = 1
// GetSum(1, 1) == 1   1 Since both are same
// GetSum(-1, 0) == -1 -1 + 0 = -1
// GetSum(-1, 2) == 2  -1 + 0 + 1 + 2 = 2

// PARAMETERS:
// RETURN:
// EXAMPLES:
// PSUEDO: