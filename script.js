const wishes = [
    "🌙 May Allah accept your fasting and prayers.",
    "🤲 May this Ramadan bring you peace and countless blessings.",
    "✨ May you be among those whose sins are forgiven and prayers are answered.",
    "🕌 May Allah’s light shine upon your path and guide you always.",
    "💖 May your heart be filled with love, your soul with peace, and your home with joy."
];

document.getElementById("wishBtn").addEventListener("click", function() {
    let randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    document.getElementById("wishText").innerHTML = `<strong>${randomWish}</strong>`;
});
