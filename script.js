setTimeout(() => {
  alert("Hai haiiii");
}, 3000);

function showForm() {
  const formSection = document.getElementById("form-section");
  formSection.style.display = "block";
  window.scrollTo(0, formSection.offsetTop);
}

function showResult() {
  const carSelect = document.getElementById("car");
  const featureSelect = document.getElementById("feature");
  const resultSection = document.getElementById("result-section");
  const result = document.getElementById("result");

  const selectedCar = carSelect.value;
  const selectedFeature = featureSelect.value;

  if (selectedCar && selectedFeature) {
    let carText = "";
    let featureText = "";

    switch (selectedCar) {
      case "electric":
        carText = "Mobil Listrik";
        break;
      case "sports":
        carText = "Mobil Sport";
        break;
      case "suv":
        carText = "SUV Tangguh";
        break;
    }

    switch (selectedFeature) {
      case "high":
        featureText = "Sangat Canggih";
        break;
      case "medium":
        featureText = "Cukup Canggih";
        break;
      case "low":
        featureText = "Kurang Canggih";
        break;
    }

    result.innerHTML = `<p>Anda memilih <b>${carText}</b> dengan fitur <b>${featureText}</b>. <b></p>`;
    resultSection.style.display = "block";
    window.scrollTo(0, resultSection.offsetTop);
  } else {
    alert("Silakan pilih mobil dan fitur terlebih dahulu!");
  }
}
