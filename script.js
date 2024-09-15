const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  // Get the scroll position
  let scrollPosition = window.pageYOffset;

  // Select the main container
  let main = document.querySelector(".main");

  // Adjust the background position for a slow movement effect
  main.style.backgroundPositionY = -(scrollPosition * 0.5) + "px"; // Adjust the speed by modifying 0.5
});

// window.addEventListener("scroll", function () {
//   const scrollPosition = window.pageYOffset;
//   const background = document.querySelector(".second_main");

//   // Move the background slower than the scroll speed
//   main.style.backgroundPositionY = -(scrollPosition * 0.5) + "px";
// });
