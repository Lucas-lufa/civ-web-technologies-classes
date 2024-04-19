// Challenge 3 Starter

// Using the array in the challenge 3 starter code
// Create a for … in loop which
// Loops through the product constant using let
// console.log() a message with index & the value of the index

const product = {
  name: "Southern Spain",
  location: "Valencia",
  price: 100,
  agent: "John",
  bookingId: "25256A"
};

// Your code goes here

for (let stuff in product){
  console.log(product[stuff])
}