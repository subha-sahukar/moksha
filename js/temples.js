let templesTN = [];

fetch('data/temples_tn_sample.json')
  .then(res => res.json())
  .then(data => {
    templesTN = data;
    loadDistricts();
  });
