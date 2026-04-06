var userName = prompt("Please enter your name:");

if (userName !== null && userName.trim() !== "") {
    document.getElementById("welcomeMessage").textContent = "Welcome, " + userName + "!";
} else {
    document.getElementById("welcomeMessage").textContent = "Welcome, guest!";
}
