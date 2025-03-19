document.addEventListener("DOMContentLoaded", function () {
    console.log("Mussoorie page loaded successfully!");
});
let map;
function initMap() {
    var mussoorie = { lat: 30.4591, lng: 78.0644 };

    // Create the map if it doesn't exist
    if (!map) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 12,
            center: mussoorie,
        });

        new google.maps.Marker({
            position: mussoorie,
            map: map,
            title: "Mussoorie",
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const mapBtn = document.getElementById("mapBtn");
    const mapContainer = document.getElementById("map-container");

    mapBtn.addEventListener("click", function () {
        if (mapContainer.classList.contains("hidden")) {
            mapContainer.classList.remove("hidden");
            initMap();  // Initialize map only when shown
        } else {
            mapContainer.classList.add("hidden");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const hotelsBtn = document.querySelector(".category-btn:nth-child(1)"); // First button is Hotels

    hotelsBtn.addEventListener("click", function () {
        window.location.href = "mhotel.html"; // Redirect to hotels page
    });
});