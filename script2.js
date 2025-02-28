// Select menu icon and dropdown menu
const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Toggle dropdown on click
menuIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent immediate closure when clicking the icon
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});

// Add event listeners to service buttons
document.querySelectorAll(".service-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert(`You clicked on ${button.textContent}`);
    });
});

// Form Handling
const signInBtn = document.getElementById("signInBtn");
const logInBtn = document.getElementById("logInBtn");
const signInForm = document.getElementById("signInForm");
const logInForm = document.getElementById("logInForm");
const closeBtns = document.querySelectorAll(".close-btn");

// Show Sign In Form
signInBtn.addEventListener("click", () => {
    signInForm.style.display = "block";
    logInForm.style.display = "none";
});

// Show Log In Form
logInBtn.addEventListener("click", () => {
    logInForm.style.display = "block";
    signInForm.style.display = "none";
});

// Close Forms
closeBtns.forEach(button => {
    button.addEventListener("click", () => {
        signInForm.style.display = "none";
        logInForm.style.display = "none";
    });
});
