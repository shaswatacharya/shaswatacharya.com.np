// Mobile menu toggle

function toggleMenu(){
    
  const menu = document.querySelector(".menu-links");
  
  const icon = document.querySelector(".mobile-icon");
  
  menu.classList.toggle("open");
  
  icon.classList.toggle("open");
  
}


// Theme switch

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});



// Toggle theme based on the current body attribute
function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

// Dark mode
function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}


// Light mode


function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// Typing effect: rotate through titles

const textArray = ["Developer", "Designer"];
let textIndex = 0;
let charIndex = 0;
function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
      document.querySelector("#typing-text").textContent += textArray[textIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
  } else {
      setTimeout(eraseEffect, 2000);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
      document.querySelector("#typing-text").textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
  } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeEffect, 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 500);
});


// Custom cursor (yellow)

// Get the custom cursor element.
const cursor = document.getElementById("custom-cursor");

// Only show the custom cursor on desktop screens.
if (window.innerWidth > 1024) {
  // Update cursor position on mouse move.
  document.addEventListener("mousemove", (e) => {
      const offsetX = 5; // Adjust left
      const offsetY = 2; // Adjust top

      cursor.style.left = `${e.clientX - offsetX}px`;
      cursor.style.top = `${e.clientY - offsetY}px`;
  cursor.style.display = "block"; // Ensure it stays visible.
  });

  // Hide cursor when the mouse leaves the viewport.
  document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"; // Smooth disappearance
  });

  // Show cursor when the mouse enters the viewport.
  document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"; // Smooth reappearance
  });
} else {
  // On smaller screens, hide the cursor and disable this logic.
  cursor.style.display = "none";
}


// Smooth scroll to the next section when the scroll icon is clicked.
document.getElementById("scroll-down-container").addEventListener("click", function() {
window.scrollBy({
  top: window.innerHeight, // Scroll by the viewport height.
    behavior: 'smooth'
});
});



// Back-to-top button logic

const scrollButton = document.getElementById("backToTop");

// Show/hide the button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.classList.add("show"); // fade-in
  } else {
    scrollButton.classList.remove("show"); // fade-out
  }
});

// Smooth scroll to top when clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});




