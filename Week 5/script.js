/*
    Author: Wesley Gavitt
    Date: 5/7/2026
*/

// Modal logic
var modal = document.getElementById("welcomeModal");
var closeBtn = document.getElementById("closeModal");

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Skills list rendered with a loop
var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
var skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    var li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Custom project objects
var projectOne = {
    title: "Portfolio Homepage",
    summary: "A personal portfolio page built with HTML, CSS, and JavaScript. It includes sections for About, Featured Content, Projects, and Contact.",
    imageUrl: "https://via.placeholder.com/300x180",
    repositoryLink: "https://github.com/"
};

var projectTwo = {
    title: "Dark Mode Feature",
    summary: "A JavaScript feature that lets users switch between light and dark mode. The preference is saved using localStorage.",
    imageUrl: "https://via.placeholder.com/300x180",
    repositoryLink: "https://github.com/"
};

var projectThree = {
    title: "Dynamic Project Cards",
    summary: "A project display system that stores project objects in sessionStorage and renders the cards dynamically on the page.",
    imageUrl: "https://via.placeholder.com/300x180",
    repositoryLink: "https://github.com/"
};

// Array containing project objects
var projects = [projectOne, projectTwo, projectThree];

// Store and parse project data with sessionStorage
if (sessionStorage.getItem("projectData") === null) {
    sessionStorage.setItem("projectData", JSON.stringify(projects));
}

var storedProjects = JSON.parse(sessionStorage.getItem("projectData"));

// Render projects dynamically
var projectGrid = document.getElementById("projectGrid");

storedProjects.forEach(function(project) {
    var projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    var projectImage = document.createElement("img");
    projectImage.src = project.imageUrl;
    projectImage.alt = project.title;

    var projectTitle = document.createElement("h3");
    projectTitle.textContent = project.title;

    var projectSummary = document.createElement("p");
    projectSummary.textContent = project.summary;

    var projectLink = document.createElement("a");
    projectLink.href = project.repositoryLink;
    projectLink.target = "_blank";
    projectLink.textContent = "View Repository";

    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectSummary);
    projectCard.appendChild(projectLink);

    projectGrid.appendChild(projectCard);
});

// Dark mode persistence
var toggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}

toggle.addEventListener("change", function() {
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// Contact form confirmation
var form = document.getElementById("contactForm");
var status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    status.textContent = "Sending message...";

    setTimeout(function() {
        status.textContent = "Message sent successfully!";
    }, 2500);
});