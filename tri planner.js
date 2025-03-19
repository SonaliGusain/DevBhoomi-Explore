document.getElementById("tripForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get input values
    const days = document.getElementById("days").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const budget = document.getElementById("budget").value;
    const people = document.getElementById("people").value;

    // Validation
    if (!days || !startDate || !endDate || !budget || !people) {
        alert("Please fill in all fields!");
        return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
        alert("End date must be after the start date!");
        return;
    }

    // Call Gemini AI API to generate trip details
    const tripDetails = await generateTripPlan(days, startDate, endDate, budget, people);

    // Display the generated trip plan
    document.getElementById("tripOutput").innerHTML = `<h3>Your Trip Plan</h3><p>${tripDetails}</p>`;
});

// Function to call Gemini AI API
async function generateTripPlan(days, startDate, endDate, budget, people) {
    const apiKey = "AIzaSyC5U0WlrzXKRC5AuQj7S6h1t8NLG2jHIC0";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${apiKey}`;

    const requestBody = {
        prompt: `Create a detailed ${days}-day trip plan for ${people} people. The trip starts on ${startDate} and ends on ${endDate}. Budget preference: ${budget}. Include places to visit, food options, and accommodation suggestions.`,
        temperature: 0.7,
        max_tokens: 500
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        return data.candidates[0].output || "Sorry, we couldn't generate the trip details.";
    } catch (error) {
        console.error("Error fetching trip details:", error);
        return "Error generating trip details. Please try again.";
    }
}
