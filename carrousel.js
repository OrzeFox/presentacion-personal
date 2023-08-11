const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
const titulo = document.querySelector("#pasatiempos h3");

const titulos = [
  "Pasatiempos",
  "Me encantan los videojuegos, recomendaría que alguna vez jugaran dark souls y undertale.",
  "Escucho todo tipo de música y me gusta que me recomienden nuevas canciones... por mi parte te dejo una de mis favoritas dando clic en la imagen",
  "Programación... aparte de ser lo que me quiero dedicar en mi vida, también lo disfruto como un hobbie más",
  'Series y anime, así como los videojuegos, me hacen pensar en otros mundos "feel more alive in the game world than I do in the real one." ',
];

let currentIndex = 0;
let rotating = false; // Variable para controlar si el carrusel está rotando

function cambiarPuntoActivo(index) {
  punto.forEach((cadaPunto, i) => {
    punto[i].classList.remove("activo");
  });
  punto[index].classList.add("activo");
}

function cambiarTitulo(index) {
  titulo.textContent = titulos[index];
}

function rotarContenido() {
  currentIndex = (currentIndex + 1) % punto.length;
  let operacion = currentIndex * -20;
  grande.style.transform = `translateX(${operacion}%)`;
  cambiarPuntoActivo(currentIndex);
  cambiarTitulo(currentIndex);
}

function startRotating() {
  rotating = true;
  rotarContenido();
  intervalId = setInterval(rotarContenido, 7000);
}

function stopRotating() {
  rotating = false;
  clearInterval(intervalId);
}


function isPasatiemposInView() {
  const pasatiemposSection = document.getElementById("pasatiempos");
  const rect = pasatiemposSection.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener("scroll", () => {
  if (isPasatiemposInView() && !rotating) {
    startRotating();
  } else if (!isPasatiemposInView() && rotating) {
    stopRotating();
  }
});

punto.forEach((cadaPunto, i) => {
  cadaPunto.addEventListener("click", () => {
    currentIndex = i;
    let operacion = currentIndex * -20;
    grande.style.transform = `translateX(${operacion}%)`;
    cambiarPuntoActivo(currentIndex);
    cambiarTitulo(currentIndex);
  });
});
