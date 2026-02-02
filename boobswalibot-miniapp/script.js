Telegram.WebApp.ready();
Telegram.WebApp.expand(); // Full screen bana de

const user = Telegram.WebApp.initDataUnsafe.user;
if (user && user.username) {
    document.getElementById('username').innerText = user.username;
}

function openChannel(link) {
    Telegram.WebApp.openTelegramLink(link);
}

function openYT() {
    Telegram.WebApp.openLink('https://www.youtube.com/@cielostatment?sub_confirmation=1');
    // Ya video play: Telegram.WebApp.openLink('https://www.youtube.com/watch?v=VIDEO_ID');
}

// Optional: Agar non-approved, gate show kar (DB check backend se via fetch)
// Abhi simple: Sabko full dikhao, baad mein gate add
