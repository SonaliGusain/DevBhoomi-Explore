document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("logInBtn");
    const signUpBtn = document.getElementById("signInBtn");
    const menuIcon = document.querySelector(".menu-icon");
    const loginPopup = document.getElementById("loginPopup");
    const signUpPopup = document.getElementById("signupPopup");
    const mussoorieBtn = document.getElementById("mussoorieBtn");
    const placesContainer = document.getElementById("placesContainer");

    let menuDropdown = document.querySelector(".menu-dropdown");
    if (!menuDropdown) {
        menuDropdown = document.createElement("div");
        menuDropdown.classList.add("menu-dropdown");
        menuDropdown.innerHTML = `
            <ul class="menu-list">
                <li><a href="#">My Profile</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        `;
        document.body.appendChild(menuDropdown);
    }

    const closeButtons = document.querySelectorAll(".close-btn");

    function centerPopup(element) {
        element.style.position = "fixed";
        element.style.top = "50%";
        element.style.left = "50%";
        element.style.transform = "translate(-50%, -50%)";
        element.style.zIndex = "1000";
        element.style.display = "block";
    }

    function positionMenuDropdown(element, trigger) {
        const rect = trigger.getBoundingClientRect();
        element.style.position = "absolute";
        element.style.top = `${rect.bottom + 5 + window.scrollY}px`;
        element.style.left = `${rect.left + window.scrollX}px`;
        element.style.zIndex = "1000";
        element.style.display = "block";
    }

    function toggleVisibility(element, trigger, isCentered = false) {
        if (element.style.display === "block") {
            element.style.display = "none";
        } else {
            closeAllPopups();
            if (isCentered) {
                centerPopup(element);
            } else {
                positionMenuDropdown(element, trigger);
            }
        }
    }

    function closeAllPopups() {
        loginPopup.style.display = "none";
        signUpPopup.style.display = "none";
        menuDropdown.style.display = "none";
    }

    signUpBtn.addEventListener("click", function (event) {
        toggleVisibility(signUpPopup, signUpBtn, true);
        event.stopPropagation();
    });

    loginBtn.addEventListener("click", function (event) {
        toggleVisibility(loginPopup, loginBtn, true);
        event.stopPropagation();
    });

    menuIcon.addEventListener("click", function (event) {
        toggleVisibility(menuDropdown, menuIcon, false);
        event.stopPropagation();
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".auth-popup").style.display = "none";
        });
    });

    window.addEventListener("click", function (event) {
        if (!event.target.closest(".auth-popup") && !event.target.closest(".btn") && !event.target.closest(".menu-icon")) {
            closeAllPopups();
        }
    });

    // Show popular places when clicking on Mussoorie button
    mussoorieBtn.addEventListener("click", function () {
        const places = [
            "Kempty Falls",
            "Gun Hill",
            "Camel’s Back Road",
            "Company Garden",
            "Lal Tibba",
            "Cloud’s End"
        ];
        
        placesContainer.innerHTML = `<h3>Popular Places in Mussoorie</h3>` +
            `<ul>` + places.map(place => `<li>${place}</li>`).join('') + `</ul>`;
    });
});

