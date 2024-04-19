// Challenge 2 Solution

// Using the array in the challenge 2 starter code
// Create a for … of loop which
// De-structures the array using the entries() method to create index & number constants
// Inside the loop uses modulo to check if the number has a remainder of 0 or 1
// Checks else the remainder is 0, console.log() a message saying the number is even
// If the remainder is 1, console.log() a message saying the number is odd

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your code goes here 'at index ${in} the number is even ${digit}'

for (const [index, digit]of numbers.entries()) {
    if (digit % 2 == 0) {
        console.log(`at index${index}, the number is even ${digit}`);
    }else{
        console.log(`at index${index}, the number is odd ${digit}`);
    }
}