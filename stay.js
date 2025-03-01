document.addEventListener("DOMContentLoaded", function () {
    const stayCards = document.querySelectorAll(".stay-card");

    stayCards.forEach(card => {
        card.addEventListener("click", function () {
            alert(`You selected: ${this.querySelector("h3").textContent}`);
        });
    });

    // Back to Home Button Functionality
    const backHomeButton = document.querySelector(".back-home");
    if (backHomeButton) {
        backHomeButton.addEventListener("click", function () {
            window.location.href = "index.html"; // Adjust this based on your project structure
        });
    }
});

