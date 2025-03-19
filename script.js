document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("signupBtn");
    const logInBtn = document.getElementById("logInBtn");
    const menuIcon = document.querySelector(".menu-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const signInForm = document.getElementById("signupForm");
    const logInForm = document.getElementById("logInForm");
    const closeBtns = document.querySelectorAll(".close-btn");

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
    document.addEventListener("DOMContentLoaded", function () {
        const searchBtn = document.querySelector(".search-btn");
        const searchInput = document.querySelector(".search-input");
    
        searchBtn.addEventListener("click", function () {
            const query = searchInput.value.trim();
            if (query) {
                alert("Searching for: " + query);
                // You can add search functionality here, like filtering destinations
            }
        });
    });
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});
// Initialize Swiper for Pilgrimage Places
var pilgrimageSwiper = new Swiper('.pilgrimage-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

    // Function to add to wishlist
    function addToWishlist(destinationName, imageSrc) {
        if (!wishlistItems.some(item => item.name === destinationName)) {
            wishlistItems.push({ name: destinationName, image: imageSrc });
            localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
            alert(destinationName + " added to wishlist!");
        } else {
            alert(destinationName + " is already in wishlist!");
        }
    }

    // Add event listeners to wishlist buttons
    document.querySelectorAll(".wishlist-heart").forEach(button => {
        button.addEventListener("click", function () {
            const destinationName = this.parentElement.querySelector("p").textContent;
            const imageSrc = this.parentElement.querySelector("img").src;
            addToWishlist(destinationName, imageSrc);
        });
    });
});

