// Update the score of a player
function updateScore(player, value) {
    const scoreElement = document.getElementById(`score${player}`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += value;
    if (currentScore < 0) currentScore = 0; // Prevent negative scores
    scoreElement.textContent = currentScore;
}

// Set the score for a player
function setScore(player) {
    const newScore = prompt("Enter new score:");
    if (newScore !== null && !isNaN(newScore) && newScore >= 0) {
        document.getElementById(`score${player}`).textContent = parseInt(newScore);
    }
}

// Reset all scores to 0
function resetScores() {
    document.getElementById("score1").textContent = 0;
    document.getElementById("score2").textContent = 0;
}
