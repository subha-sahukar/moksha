// Panchang loader
 document.addEventListener("DOMContentLoaded", async () => {
  const panel = document.getElementById("panchang-panel");
  if(!panel) return;

  panel.innerHTML = `
    Sunrise: calculating... <br>
    Rahu Kalam: calculating... <br>
    Yamagandam: calculating... <br>
    Nalla Neram: blessed... <br>
  `;

  // Placeholder logic. Real sunrise calc formula upgrade coming.
  setTimeout(()=>{
    panel.innerHTML = `
      Sunrise: 06:05 AM<br>
      Rahu Kalam: 10:30 AM – 12:00 PM<br>
      Yamagandam: 3:00 PM – 4:30 PM<br>
      Nalla Neram: 7:30 — 9:00 AM
    `;
  },800);
}); 

function playAudio(id) {
  const audio = document.getElementById(id);
  audio.currentTime = 0;
  audio.play();
}

