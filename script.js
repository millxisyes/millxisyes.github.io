const messages = [
    "Why did the chicken go to the seance? To talk to the other side!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "I'm friends with all electricians. We have such great current connections.",
    "Why was the math book sad? It had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to play piano by ear, but now I use my hands.",
    "I'm friends with all gardeners. We have such good growing relationships."
];

function openRandomPopup() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 3000); // Popup will disappear after 3 seconds
}

// Open a random popup every 10 seconds
setInterval(openRandomPopup, 750); // Change the interval as desired (in milliseconds)
