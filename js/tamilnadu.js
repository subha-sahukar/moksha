function loadDistricts() {
  const dl = document.getElementById("districtList");
  const d = [...new Set(templesTN.map(t => t.district))];
  d.forEach(dist => {
    const li = document.createElement("li");
    li.textContent = dist;
    li.onclick = () => selectDistrict(dist, li);
    dl.appendChild(li);
  });

  document.getElementById("districtIntro").innerHTML = `
  <em>Select a sacred region to begin your pilgrimage.</em>`;
}

function selectDistrict(dist, el) {
  document.querySelectorAll("#districtList li").forEach(li => li.classList.remove("active"));
  el.classList.add("active");

  document.getElementById("districtIntro").innerHTML =
    dynastyIntro[dist] || `Exploring the sacred landscape of ${dist}.`;

  const grid = document.getElementById("templeGrid");
  grid.innerHTML = "";

  templesTN
    .filter(t => t.district === dist)
    .forEach(t => {
      grid.innerHTML += `
      <div class="temple-card">
        <h3>${t.name}</h3>
        🛕 ${t.deity}<br>
        📍 ${t.category}<br>
        🌿 Significance: ${t.significance}<br>
        🎉 Festival: ${t.festival}
      </div>`;
    });
}
