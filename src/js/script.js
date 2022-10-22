import { projects } from "./projects.js";
import {
  filterProjects,
  changeActiveTab,
  validateName,
  validateEmail,
  validateSubject,
  validateMessage,
  validateForm,
} from "./utils.js";

// Globals
let TOTAL_PROJECTS = 6;
let CURRENT_CATEGORY = "All";

// DOM Elements
const menuBtn = document.querySelector(".menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const sunIcons = document.querySelectorAll(".sun");
const moonIcons = document.querySelectorAll(".moon");
const sections = document.querySelectorAll(".section");
const listItems = document.querySelectorAll("ul li");
const projectButtons = document.querySelectorAll(".category-btn");
const showMoreButton = document.querySelector(".show-more");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const contactForm = document.querySelector(".contact-form");

// Open mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("slide-in");
});
// Close mobile menu
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("slide-in");
});

// Logic for dark mode toggle

// Theme vars
const userTheme = localStorage.getItem("theme");
const darkSystemTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Toggle icon
const toggleIcon = () => {
  moonIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
  sunIcons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
};

// Initial theme check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && darkSystemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcons.forEach((icon) => {
      icon.classList.add("hidden");
    });
    return;
  }
  sunIcons.forEach((icon) => {
    icon.classList.add("hidden");
  });
};

// Manual theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    toggleIcon();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  toggleIcon();
};

// Call themeSwitch() on button click
sunIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    themeSwitch();
  });
});
moonIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    themeSwitch();
  });
});

// Invoke theme check on initial load
themeCheck();

// Filter Projects
projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    CURRENT_CATEGORY = button.innerText;
    TOTAL_PROJECTS = 6;
    filterProjects(projects.data, CURRENT_CATEGORY, TOTAL_PROJECTS);
  });
});

// Initially load all the projects
window.onload = () => {
  filterProjects(projects.data, "All", TOTAL_PROJECTS);
};

// Show more projects
showMoreButton.addEventListener("click", () => {
  if (TOTAL_PROJECTS <= projects.data.length) {
    TOTAL_PROJECTS + 3 < projects.data.length
      ? (TOTAL_PROJECTS += 3)
      : (TOTAL_PROJECTS += projects.data.length - TOTAL_PROJECTS);
    filterProjects(projects.data, CURRENT_CATEGORY, TOTAL_PROJECTS);
  }
});

// Change active tab on navbar based on scroll
window.onscroll = () => {
  changeActiveTab(sections, listItems);
};

// Form validation
nameInput.addEventListener("keyup", () => {
  validateName();
});
nameInput.addEventListener("blur", () => {
  validateName();
});
emailInput.addEventListener("keyup", () => {
  validateEmail();
});
emailInput.addEventListener("blur", () => {
  validateEmail();
});
subjectInput.addEventListener("keyup", () => {
  validateSubject();
});
subjectInput.addEventListener("blur", () => {
  validateSubject();
});
messageInput.addEventListener("keyup", () => {
  validateMessage();
});
messageInput.addEventListener("blur", () => {
  validateMessage();
});

contactForm.addEventListener("submit", (e) => {
  let formErr = validateForm();
  if (formErr) {
    e.preventDefault();
    return;
  }
  document
    .getElementById("form-subject")
    .setAttribute("value", subjectInput.value);
  setTimeout(() => {
    contactForm.reset();
  }, 0);
});
