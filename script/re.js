// animate social icons 
// Get all the social icons
var icons = document.querySelectorAll('.social-icon');

// Add event listeners to each icon
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('mouseenter', function(event) {
    // Add the "hover" class to the icon
    event.target.classList.add('hover');
  });
  icons[i].addEventListener('mouseleave', function(event) {
    // Remove the "hover" class from the icon
    event.target.classList.remove('hover');
  });
}
