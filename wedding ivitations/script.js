function showDetails() {
    document.getElementById("details").style.display = "block";
}

function openInvitation() {
    document.getElementById("welcome-screen").style.display = "none";

    const music = document.getElementById("wedding-music");
    music.play();
}
function updateCountdown() {
    const weddingDate = new Date("August 20, 2027 20:00:00").getTime();
    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>It's our wedding day! ❤️</h2>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000); 
document.getElementById("sendMessage").addEventListener("click", function () {
    const message = document.getElementById("guestMessage").value;

    if (message.trim() === "") {
        alert("Please write a message first.");
        return;
    }

    const phoneNumber = "201289330859";

    const whatsappURL =
        "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});