const countdownBox = document.getElementById("countdown");
const promoEnd = new Date("2026-01-15T23:59:59").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = promoEnd - now;

  if (diff <= 0) {
    countdownBox.innerHTML = "<b>Promo Ended</b>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownBox.innerHTML = `
    <div style="background:#fff; padding:10px; border-radius:5px; display:inline-block;
                box-shadow:0 0 5px #ccc; margin-bottom:20px;">
      ⏳ Promo Ends In: 
      <b>${days}d ${hrs}h ${mins}m ${secs}s</b>
    </div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();