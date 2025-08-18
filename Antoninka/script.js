function openCurtain() {
    document.getElementById("curtain-left").style.transform = "translateX(-100%)";
    document.getElementById("curtain-right").style.transform = "translateX(100%)";
    document.getElementById("curtain-button").style.display = "none";
  }
  
  // Pokazywanie sekcji
  function showSection(id) {
    const sections = document.querySelectorAll(".box");
    sections.forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
  }
  
  // Pytania
  const questions = [
    "Kiedy pierwszy raz poczułeś, że mnie kochasz?",
    "Jakie miejsce chciałabyś odwiedzić ze mną najbardziej?",
    "Co w moim uśmiechu lubisz najbardziej?",
    "Jakie jest Twoje ulubione wspomnienie z nami?",
    "Co chcesz, żebym Ci mówił codziennie rano?",
    "Jaka piosenka kojarzy Ci się z nami?",
    "Gdzie chciałabyś mieszkać w przyszłości?",
    "Co najbardziej cenisz w naszej relacji?",
    "Jaka jest Twoja ulubiona randka, którą mieliśmy?",
    "Co Cię najbardziej rozczula we mnie?",
    "Jak wyobrażasz sobie nas za 10 lat?",
    "Jakie marzenie chciałabyś, żebym spełnił dla Ciebie?",
    "Która nasza wspólna podróż była najlepsza?",
    "Co mogę robić częściej, żeby Cię uszczęśliwić?",
    "Który film najlepiej opisuje naszą historię?",
    "Gdybyśmy mieli wspólną piosenkę, jaka by to była?",
    "Co w Tobie zmieniła nasza miłość?",
    "Jakie jest Twoje największe marzenie związane ze mną?",
    "Jakie słowo opisuje naszą miłość?",
    "Jaka jest Twoja ulubiona cecha mojego charakteru?",
    "Który dzień z naszego związku był najpiękniejszy?",
    "Co byś chciała, żebym zrobił w Twoje urodziny?",
    "Jakie miejsce w Polsce chcesz ze mną zobaczyć?",
    "Który moment sprawił, że się zakochałaś jeszcze bardziej?",
    "Jaki prezent ode mnie był najlepszy?",
    "Co Cię najbardziej śmieszy w moim zachowaniu?",
    "Co chciałabyś, żebym robił inaczej?",
    "Jakie jest Twoje marzenie na naszą wspólną przyszłość?",
    "Jak wyobrażasz sobie naszą rocznicę ślubu?",
    "Za co najbardziej mnie kochasz?"
  ];
  
  const questionsInner = document.getElementById("questionsInner");
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (i === 0) div.classList.add("active");
    div.innerHTML = `<div class="d-flex justify-content-center align-items-center glass-box p-5 m-3 shadow text-light" style="min-height:200px;">
      <p class="lead text-center">${q}</p>
    </div>`;
    questionsInner.appendChild(div);
  });

 // zdjęcia z numeracją (zmień 10 na liczbę zdjęć które masz)
const photos = Array.from({ length: 28 }, (_, i) => `Fotos/Antonina (${i+1}).jpg`);

// filmy (ręcznie bo są tylko 2)
const videos = [
  "Fotos/Antonina (1).mp4",
  "Fotos/Antonina (2).mp4"
];

// łączymy wszystkie media
const media = [...photos.map(p => ({src: p, type: "img"})), 
               ...videos.map(v => ({src: v, type: "video"}))];

function loadCarousel(id, items) {
  const inner = document.querySelector(`#${id} .carousel-inner`);
  inner.innerHTML = "";

  items.forEach((item, i) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (i === 0) div.classList.add("active");

   if (item.type === "img") {
  div.innerHTML = `<img src="${item.src}" class="d-block mx-auto rounded shadow" 
    style="width:100%; height:auto; max-height:80vh; object-fit:contain;" alt="slajd ${i+1}">`;

    } else if (item.type === "video") {
      div.innerHTML = `<video class="d-block w-100 rounded" controls>
                         <source src="${item.src}" type="video/mp4">
                       </video>`;
    }

    inner.appendChild(div);
  });
}

// załaduj całą galerię (zdjęcia + filmy)
loadCarousel("carouselGallery", media);

const photosPL = [
    {src: "Plany/PL/zakopane.jpg", alt: "Zakopane"},
    {src: "Plany/PL/gdansk.jpg", alt: "Gdańsk"},
    {src: "Plany/PL/malbork.jpg", alt: "Malbork"},
    {src: "Plany/PL/hel.jpg", alt: "Hel"},
    {src: "Plany/PL/kazimierz.jpg", alt: "Kazimierz Dolny"},
    {src: "Plany/PL/sandomierz.jpg", alt: "Sandomierz"},
    {src: "Plany/PL/bieszczady.jpg", alt: "Bieszczady"}
  ];
  
  const photosAbroad = [
    {src: "Plany/Abroad/paryz.jpg", alt: "Paryż"},
    {src: "Plany/Abroad/wenecja.jpg", alt: "Wenecja"},
    {src: "Plany/Abroad/santorini.jpg", alt: "Santorini"},
    {src: "Plany/Abroad/praga.jpg", alt: "Praga"},
    {src: "Plany/Abroad/dubrovnik.jpg", alt: "Dubrovnik"},
    {src: "Plany/Abroad/edynburg.jpg", alt: "Edynburg"}
  ];
  
  function createCarouselItems() {
    const container = document.getElementById("carouselInnerPlans");
  
    let first = true;
  
    // Polska
    photosPL.forEach(photo => {
      const div = document.createElement("div");
      div.className = "carousel-item" + (first ? " active" : "");
      div.innerHTML = `
        <div class="text-center">
          <h5 class="text-light mb-2">${photo.alt}</h5>
          <img src="${photo.src}" class="d-block mx-auto rounded shadow" style="max-height:900px; object-fit:contain;" alt="${photo.alt}">
        </div>
      `;
      container.appendChild(div);
      first = false;
    });
  
    // Zagranica
    photosAbroad.forEach(photo => {
      const div = document.createElement("div");
      div.className = "carousel-item";
      div.innerHTML = `
        <div class="text-center">
          <h5 class="text-light mb-2">${photo.alt}</h5>
          <img src="${photo.src}" class="d-block mx-auto rounded shadow" style="max-height:400px; object-fit:contain;" alt="${photo.alt}">
        </div>
      `;
      container.appendChild(div);
    });
  }
  
  createCarouselItems();
  
  function updateTime() {
  const now = new Date();

  // Czas od 26 maja
  const startMay26 = new Date(2025, 4, 26); // miesiące liczone od 0!
  const diffMay26 = now - startMay26;
  document.getElementById('timeSinceMay26').textContent = formatDuration(diffMay26);

  // Czas od 22 marca
  const startMarch22 = new Date(2025, 2, 22);
  const diffMarch22 = now - startMarch22;
  document.getElementById('timeSinceMarch22').textContent = formatDuration(diffMarch22);
}

// Funkcja formatująca różnicę czasu w lata, miesiące, dni, godziny, minuty, sekundy
function formatDuration(ms) {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  const years = Math.floor(days / 365);
  days -= years * 365;

  const months = Math.floor(days / 30);
  days -= months * 30;

  hours = hours % 24;
  minutes = minutes % 60;
  seconds = seconds % 60;

  return `${years} lat, ${months} miesięcy, ${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`;
}

// Odświeżanie co sekundę
setInterval(updateTime, 1000);
updateTime(); // natychmiastowe wyświetlenie


