// loader
window.addEventListener("DOMContentLoaded", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("mouseover", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink(event) {
  linkColor.forEach((l) => l.classList.remove("active"));
  event.target.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("mouseenter", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink(event) {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  event.target.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("touchstart", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink(event) {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  event.target.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));
// greetings
const greeting = document.getElementById("greeting");

function setGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // morning
    greeting.textContent = "Good morning, ";
  } else if (hour < 18) {
    // afternoon
    greeting.textContent = "Good afternoon, ";
  } else {
    // evening
    greeting.textContent = "Good evening, ";
  }
}
setGreeting();

// getname
const name = document.getElementById("name");

function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = " [Enter name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// setname

function setName(event) {
  if (event.type === "keypress") {
    // make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
      localStorage.setItem("name", event.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", event.target.innerText);
  }
}

name.addEventListener("keydown", setName);
name.addEventListener("blur", setName);
getName();

// Reminder

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
  letter = currentText.slice(0);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 5000);
})();

// accordion

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("dblclick", () => {
    button.classList.toggle("accordion-button-active");
  });
});

// modal home
const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-active");
});
close.addEventListener("click", () => {
  modalBg.classList.remove("modal-active");
});
