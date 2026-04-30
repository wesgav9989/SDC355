/*
    Author: Wesley Gavitt
    Date: 4/29/2026
*/

// Modal logic
var modal = document.getElementById("welcomeModal");
var closeBtn = document.getElementById("closeModal");

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Skills list
var skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];
var skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    var li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Dark mode persistence
var toggle = document.getElementById("darkModeToggle");

// Load saved dark mode preference when the page opens
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
}

// Save dark mode preference when the toggle changes
toggle.addEventListener("change", function() {
    if (toggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
    }
});

// Form submission with delay
var form = document.getElementById("contactForm");
var status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    status.textContent = "Sending message...";

    setTimeout(function() {
        status.textContent = "Message sent successfully!";
    }, 2500);
});