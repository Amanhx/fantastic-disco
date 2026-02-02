// script.js
Telegram.WebApp.ready();
Telegram.WebApp.expand(); // Full screen bana de
Telegram.WebApp.isClosingConfirmationEnabled = false; // Optional

// Username personalize
const user = Telegram.WebApp.initDataUnsafe.user;
if (user && user.username) {
    document.getElementById('username').innerText = user.username || 'Hotty';
}

// Error handling (console mein dikhega, ya alert)
window.onerror = function(msg, url, line) {
    console.error('JS Error:', msg, url, line);
    Telegram.WebApp.showAlert('Kuch galat ho gaya... Reload karo! 💦');
};

function openChannel(link) {
    Telegram.WebApp.openTelegramLink(link);
    Telegram.WebApp.showAlert("Channel join ho raha hai... Enjoy the forbidden heat! 😈🔥");
}

function openYT() {
    Telegram.WebApp.openLink('https://www.youtube.com/@cielostatment?sub_confirmation=1', { try_instant_view: false });
    // Optional: YT video direct open karna ho to
    // Telegram.WebApp.openLink('https://www.youtube.com/watch?v=YOUR_VIDEO_ID');
}
