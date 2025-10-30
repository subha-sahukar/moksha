async function loadDistricts() {
 const data = await fetch("tndata.json").then(r => r.json());
 const districtList = document.getElementById("districtList");

 Object.keys(data).forEach(d => {
   const li = document.createElement("li");
   li.innerHTML = `<button class="district-btn">${d}</button>`;
   li.addEventListener("click", () => showDistrict(d, data[d]) );
   districtList.appendChild(li);
 });
}

function showDistrict(name, info) {
 document.getElementById("districtIntro").innerHTML =
  `<h2>${name}</h2><p>${info.intro}</p>`;

 const wrap = document.getElementById("templeCards");
 wrap.innerHTML = info.temples.map(t => `
  <div class="temple-card">
   <img src="${t.image}" alt="${t.name}">
   <h3>${t.name}</h3>
   <p><b>Deity:</b> ${t.deity}</p>
   <p><b>Type:</b> ${t.type}</p>
   <p><i>${t.significance}</i></p>
  </div>
 `).join("");
}

if (window.location.pathname.includes("tamilnadu")) {
 loadDistricts();
}
