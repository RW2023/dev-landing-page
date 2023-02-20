// Script for animating tittle and tagline
// Get references to the intro and tagline elements
let intro = document.getElementById('intro');
let tagline = document.getElementById('tagline');
// Define a function to toggle the "animate" class
function toggleAnimation() {
  intro.classList.toggle('animate');
  tagline.classList.toggle('animate');
}
// Call the toggleAnimation function every 2 seconds
setInterval(toggleAnimation, 5000);
