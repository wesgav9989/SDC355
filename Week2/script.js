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

// Add interactivity to the contact form submit button.
var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var senderName = document.getElementById("name").value;

    if (senderName.trim() === "") {
        senderName = "visitor";
    }

    alert("Thank you, " + senderName + ", your message has been sent!");
});