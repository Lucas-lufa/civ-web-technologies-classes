/*
Using the challenge 5 starter code
Complete the toggleSidebarContent() to do the following
Check if the sidebar <ul> list has Children using hasChildNodes()
use removeChild() to remove the first child (use .firstChild)
create and add a <p> element to the sidebar using createElement() and appendChild() 
*/

// Challenge 5 Starter
const sidebar = document.querySelector('.sidebar');

function toggleSidebarContent() {
  // Your code goes here
  
}

// Add a button to toggle the sidebar content
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Sidebar Content';
toggleButton.addEventListener('click', toggleSidebarContent);

// Append the button to the body
document.body.appendChild(toggleButton);
