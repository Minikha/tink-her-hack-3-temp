// JavaScript functionality for the Mental Health Support application

// Mental Health Tips (Array of general tips)
const tips = [
    "Take deep breaths and practice mindfulness.",
    "Stay connected with family and friends.",
    "Get enough sleep to recharge your mind and body.",
    "Exercise regularly to boost your mood.",
    "Engage in social activities to prevent isolation.",
    "Try relaxation techniques like yoga or mindfulness.",
    "Engage in positive self-talk and challenge negative thoughts.",
    "Be kind to yourself and recognize that it's ok to not be ok sometimes.",
    "Take breaks and practice self-care.",
    "Talk to someone you trust about your feelings.",
    "Therapy or counseling can provide valuable coping strategies.",
    "Exercise can help you manage symptoms of depression, stress and anxiety.",
    "Limit social media consumption to reduce stress.",
    "Practice gratitude by listing things you’re thankful for.",
    "Engage in hobbies that make you happy.",
    "Keep a distance from those things that are harmful to your mental health.",
    "Watch a funny show or do something that makes you laugh, it reduces stress and releases feel-good endorphins.",
    "Going outside even for a short walk, it promotes mindfulness.",
    "Seek professional help when needed—you're not alone."
];

// Movie Soundtrack array with movie-style tracks (Replace with new tracks)
const musicTracks = [
    "https://www.bensound.com/bensound-music/bensound-actionable.mp3"  // Track 1
];

let currentTrackIndex = 0; // Keep track of the current music index

// Function to validate login
function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.innerText = "Username and password are required.";
    } else {
        errorMessage.innerText = "";
        alert("Login successful!"); // Replace with actual authentication logic

        // Hide login container and show mood tracker container
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("moodTrackerContainer").style.display = "block";
    }
}

// Mood Tracker - User selects their mood
function setMood(mood) {
    document.getElementById('moodDisplay').innerText = `You are feeling: ${mood}`;
    // Save mood to localStorage
    localStorage.setItem("userMood", mood);
}

// Show previously selected mood on load
window.onload = function() {
    const savedMood = localStorage.getItem("userMood");
    if (savedMood) {
        document.getElementById('moodDisplay').innerText = `You were feeling: ${savedMood}`;
    }
};

// Go to the Mental Health Tip section after selecting mood
function goToMentalHealthTips() {
    // Hide mood tracker and show mental health tip section
    document.getElementById("moodTrackerContainer").style.display = "none";
    document.getElementById("journalContainer").style.display = "block";
}

// Mental Health Journal Tip (Shows a different tip based on input)
function getTip() {
    const problem = document.getElementById("problemInput").value.trim();
    const journalTipDisplay = document.getElementById("journalTipDisplay");
    const spinner = document.getElementById("spinner");

    // Show spinner while processing
    spinner.style.display = "inline-block";

    if (problem === "") {
        journalTipDisplay.innerText = "Please enter your concern.";
        spinner.style.display = "none"; // Hide spinner after showing the message
        return;
    }

    // Simulate a loading time (e.g., 2 seconds delay)
    setTimeout(function() {
        // Generate a random mental health tip from the list
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomSupportTip = tips[randomIndex];

        // Display the problem and the random mental health tip
        journalTipDisplay.innerText = `Your concern: "${problem}"\nRecommended Tip: ${randomSupportTip}`;

        // Hide spinner after displaying the tip
        spinner.style.display = "none";
        // Clear the text area after submitting
        document.getElementById("problemInput").value = "";
    }, 2000); // 2 seconds delay to simulate loading
}

// Toggle Music Player
function toggleMusic() {
    const musicPlayer = document.getElementById("musicPlayer");
    const audioPlayer = document.getElementById("audioPlayer");

    if (musicPlayer.style.display === "none") {
        musicPlayer.style.display = "block"; // Show music player
        audioPlayer.play(); // Start playing music
    } else {
        musicPlayer.style.display = "none"; // Hide music player
        audioPlayer.pause(); // Pause the music
    }
}

// Change to the next track in the array
function toggleTrack() {
    const audioPlayer = document.getElementById("audioPlayer");
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length; // Cycle through the tracks
    audioPlayer.src = musicTracks[currentTrackIndex];
    audioPlayer.play(); // Play the new track
}