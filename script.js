// Load Tamil Nadu Temple Data on Tamil Nadu Page
async function loadTamilNaduTemples() {
  if (!document.getElementById("district-menu")) return;

  const res = await fetch("tndata.json");
  const data = await res.json();

  const menu = document.getElementById("district-menu");
  const intro = document.getElementById("district-intro");
  const cards = document.getElementById("temple-cards");

  Object.keys(data).forEach(district => {
    const li = document.createElement("li");
    li.textContent = district;
    li.onclick = () => {
      document.querySelectorAll(".district-list li").forEach(i => i.classList.remove("active"));
      li.classList.add("active");
      intro.textContent = data[district].intro;
      cards.innerHTML = data[district].temples.map(t => `
        <div class="temple-card">
          <img src="${t.image}">
          <h3>${t.name}</h3>
          <p><b>${t.deity}</b> — ${t.type}</p>
          <p>${t.significance}</p>
        </div>
      `).join("");
    };
    menu.appendChild(li);
  });
}
loadTamilNaduTemples();
