/* 
Using the challenge 4 starter code
Use querySelectorAll() to find all of the “upcoming events” links
Use a for loop to loop through the event links array created using 
entries()
console.log() a message text inside the element in uppercase using 
innerHTML() & toUpperCase()
*/

// Challenge 4 Starter
const eventLinks = document.querySelectorAll('.sidebar');

function logEvent(eventLinks) {
    // Your code goes here
    for (const [index, links] of eventLinks.entries()) {
        console.log(links.innerHTML().toUpperCase() + index)
    }
}

// Your code goes here