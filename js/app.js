// Loader
window.addEventListener("DOMContentLoaded", () => {
  const preload = document.querySelector(".preload");
  preload.style.opacity = 0;
  preload.style.pointerEvents = "none";
});

// Menu Toggle
const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  menuBtn.classList.toggle("toggle");
});

// Greetings
const greeting = document.getElementById("greeting");
function setGreeting() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = "morning";
  } else if (hour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

  // Convert hour and minute to string and pad single digit values with leading zero
  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');

  // Calculate next meal time
  let nextMeal = '';
  let mealTime = 0;

  if (hour < 10) {
    nextMeal = 'breakfast';
    mealTime = 10;
  } else if (hour < 14) {
    nextMeal = 'lunch';
    mealTime = 14;
  } else if (hour < 20) {
    nextMeal = 'dinner';
    mealTime = 20;
  } else {
    nextMeal = 'breakfast';
    mealTime = 10; // Next day's breakfast
  }

  // Display reminder for the next meal
  let mealReminder = '';

  if (nextMeal === 'breakfast') {
    mealReminder = 'brekfast';
  } else if (nextMeal === 'lunch') {
    mealReminder = 'lunch';
  } else {
    mealReminder = 'dinner';
  }

  // Update greeting message with current time and meal reminder
  greeting.textContent = `Good ${timeOfDay} Niharika, Currently the time is ${hour}:${minute}. Make sure to have your ${mealReminder} at ${mealTime}:00.`;
}

// Call the setGreeting function
setGreeting();



// Call the setGreeting function
setGreeting();




// Name
const name = document.getElementById("name");


// Reminder Typing Effect
const text = [
  "You matter.",
  "You're awesome!",
  "You did great today!",
  "I believe in you!",
  "You are loved!",
  "You are worthy",
  "Keep going!",
  "I love you!",
  "Make it happen.",
  "Be a light.",
  "Know your worth.",
  "Things will get better",
  "Be good. Do good.",
  "Follow your heart.",
  "Stay hopeful!",
  "You are strong!",
  "Protect your peace.",
  "Be still.",
  "You are beautiful!",
  "Keep on fighting!",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Delay before erasing text
  } else {
    setTimeout(type, 100); // Typing speed
  }
})();

// Accordion
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accordion-button-active");
    const content = button.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Modal
const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => {
  modalBg.classList.add("modal-active");
});

closeBtn.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
