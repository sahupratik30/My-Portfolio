// Function to change active tab in navbar
export function changeActiveTab(sections, listItems) {
  let currentSection = "";
  let navHeight = document.querySelector("nav").clientHeight;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - navHeight - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  listItems.forEach((item) => {
    if (item.classList.contains(currentSection)) {
      item.classList.add("active-link");
    } else {
      item.classList.remove("active-link");
    }
  });
}

// Function to filter out projects
export function filterProjects(projects, category, totalProjects) {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((button) => {
    if (button.innerText === category) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  document.querySelector(".project-container").innerHTML = "";
  if (category === "All") {
    if (projects.length > totalProjects) {
      for (let i = 0; i < totalProjects; i++) {
        const { name, tech, link, github } = projects[i];
        createProject(name, tech, link, github);
      }
    } else {
      projects.forEach((project) => {
        const { name, tech, link, github } = project;
        createProject(name, tech, link, github);
      });
    }
  } else {
    const filteredProjects = projects.filter(
      (project) => project.category === category
    );
    if (filteredProjects.length > totalProjects) {
      for (let i = 0; i < totalProjects; i++) {
        const { name, tech, link, github } = filteredProjects[i];
        createProject(name, tech, link, github);
      }
    } else {
      filteredProjects.forEach((project) => {
        const { name, tech, link, github } = project;
        createProject(name, tech, link, github);
      });
    }
  }
}

// Function to create project
function createProject(name, tech, link, github) {
  const projectContainer = document.querySelector(".project-container");
  const project = document.createElement("div");
  project.classList.add("project");
  const markup = `<h3 class="project-name">${name}</h3>
  <p class="project-tech">${tech}</p>
  <div class="project-links-wrapper">
    <a href="${link}" target="_blank" class="project-live-link">View Live</a>
    <a href="${github}" target="_blank" class="project-github-link"
      ><i class="fa-brands fa-github"></i
    ></a>
  </div>`;
  project.innerHTML = markup;
  projectContainer.appendChild(project);
}

// Form validation
export function validateName() {
  const nameInput = document.getElementById("name");
  const nameValue = document.getElementById("name").value.trim();
  const nameError = document.getElementById("name-error");
  if (nameValue.length === 0) {
    nameError.innerText = "**Please enter your name";
    nameInput.classList.add("invalid");
    return true;
  } else {
    nameError.innerText = "";
    nameInput.classList.remove("invalid");
    return false;
  }
}

export function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailValue = document.getElementById("email").value.trim();
  const emailError = document.getElementById("email-error");
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailValue.length === 0) {
    emailError.innerText = "**Please enter your email";
    emailInput.classList.add("invalid");
    return true;
  } else if (!regex.test(emailValue)) {
    emailError.innerText = "**Please enter a valid email";
    emailInput.classList.add("invalid");
    return true;
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("invalid");
    return false;
  }
}

export function validateSubject() {
  const subjectInput = document.getElementById("subject");
  const subjectValue = document.getElementById("subject").value.trim();
  const subjectError = document.getElementById("subject-error");
  if (subjectValue.length === 0) {
    subjectError.innerText = "**Please enter your subject";
    subjectInput.classList.add("invalid");
    return true;
  } else {
    subjectError.innerText = "";
    subjectInput.classList.remove("invalid");
    return false;
  }
}

export function validateMessage() {
  const messageInput = document.getElementById("message");
  const messageValue = document.getElementById("message").value.trim();
  const messageError = document.getElementById("message-error");
  if (messageValue.length === 0) {
    messageError.innerText = "**Please enter your message";
    messageInput.classList.add("invalid");
    return true;
  } else {
    messageError.innerText = "";
    messageInput.classList.remove("invalid");
    return false;
  }
}

// Function to validate form on submit
export function validateForm() {
  let nameErr = validateName();
  let emailErr = validateEmail();
  let subjectErr = validateSubject();
  let messageErr = validateMessage();
  if (nameErr || emailErr || subjectErr || messageErr) {
    return true;
  } else {
    return false;
  }
}
