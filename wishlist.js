document.addEventListener("DOMContentLoaded", function () {
    const wishlistContainer = document.getElementById("wishlist-container");
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlistItems.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty.</p>";
    } else {
        wishlistContainer.innerHTML = "";
        wishlistItems.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("wishlist-item");
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <button class="remove-btn" data-name="${item.name}">Remove</button>
            `;
            wishlistContainer.appendChild(div);
        });

        // Remove from wishlist
        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const itemName = this.getAttribute("data-name");
                const updatedWishlist = wishlistItems.filter(item => item.name !== itemName);
                localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                location.reload();
            });
        });
    }
});
