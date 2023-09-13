document.addEventListener("DOMContentLoaded", () => {
    const resultDiv = document.getElementById("result");
    const clearDataButton = document.getElementById("clearDataButton");

    // Function to check if the user wins the badge.
    function checkBadge() {
        const randomNum = Math.floor(Math.random() * 10000) + 1; // Generate a random number between 1 and 10000.

        if (randomNum === 1) {
            resultDiv.innerHTML = "<p>You won! The odds of this are 1 in 10,000!</p>";

            // Store that the user has won the badge in local storage.
            localStorage.setItem("specialBadgeWon", "true");
        } else {
            resultDiv.innerHTML = "<p>Sorry, you didn't win this time. Refresh to try again!</p>";
        }
    }

    // Check if the user has won the badge before.
    const hasWonBadge = localStorage.getItem("specialBadgeWon");

    if (hasWonBadge === "true") {
        resultDiv.innerHTML += "<p>You have previously beaten the game! Press the button below to reset it.</p>";
    } else {
        // Check for the badge when the page loads if it hasn't been won before.
        checkBadge();
    }

    // Event listener for clearing data and restarting.
    clearDataButton.addEventListener("click", () => {
        localStorage.removeItem("specialBadgeWon");
        resultDiv.innerHTML = "<p>Data cleared. Refresh try again!</p>";
    });
});
