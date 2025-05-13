
// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0; // Start with the first image
  const slides = document.querySelectorAll('.slide'); // Get all the slides

  // Function to change the slide
  function changeSlide() {
    slides[currentIndex].classList.remove('active'); // Hide the current slide
    currentIndex = (currentIndex + 1) % slides.length; // Go to the next slide (loop back to the first slide if at the end)
    slides[currentIndex].classList.add('active'); // Show the new slide
  }

  // Show the first slide
  slides[currentIndex].classList.add('active');

  // Change the slide every 4 seconds
  setInterval(changeSlide, 4000);
});

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}