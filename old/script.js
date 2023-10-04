

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
