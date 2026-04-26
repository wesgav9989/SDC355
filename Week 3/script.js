// Prompt the user for their name and display a personalized welcome message.
var userName = prompt("Please enter your name:");

if (userName !== null && userName.trim() !== "") {
    document.getElementById("welcomeMessage").textContent = "Welcome, " + userName + "!";
} else {
    document.getElementById("welcomeMessage").textContent = "Welcome, guest!";
}

// Create an array of skills and display them as a bulleted list in the About section.
var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

var skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    var listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});

// Use conditional logic to decide which Featured Content div should appear.
var numberOfProjects = document.querySelectorAll(".project-card").length;

var universityResources = document.getElementById("universityResources");
var personalProjects = document.getElementById("personalProjects");

if (numberOfProjects < 3) {
    universityResources.classList.remove("hidden");
    personalProjects.classList.remove("hidden");
} else {
    personalProjects.classList.remove("hidden");
    universityResources.classList.add("hidden");
}

// Add a dark mode toggle that changes the page style.
var darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

// Dynamically add a new paragraph to the Projects section.
var projectsSection = document.getElementById("projects");
var newProjectParagraph = document.createElement("p");

newProjectParagraph.textContent = "Recently, I have been working on improving this portfolio by adding JavaScript features such as conditional content, loops, dark mode, and dynamic form responses.";
newProjectParagraph.classList.add("dynamic-project-note");

projectsSection.appendChild(newProjectParagraph);

// Dynamically add a notification message to the top of the page after a short delay.
setTimeout(function() {
    var headerContainer = document.querySelector("header .container");
    var notification = document.createElement("p");

    notification.textContent = "New update: This portfolio now includes dynamic JavaScript content.";
    notification.classList.add("page-notification");

    headerContainer.appendChild(notification);
}, 2000);

// Select existing elements and modify their content, style, or class using JavaScript.
var aboutHeading = document.querySelector("#about h2");
aboutHeading.textContent = "About Me and My Skills";
aboutHeading.classList.add("highlight-heading");

var featuredSection = document.getElementById("featured");
featuredSection.classList.add("updated-border");

// Add interactivity to the contact form submit button with a timed confirmation.
var contactForm = document.getElementById("contactForm");
var formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var senderName = document.getElementById("name").value;

    if (senderName.trim() === "") {
        senderName = "visitor";
    }

    formStatus.textContent = "Sending message...";

    setTimeout(function() {
        formStatus.textContent = "Thank you, " + senderName + ", your message has been sent successfully!";
    }, 2500);
});