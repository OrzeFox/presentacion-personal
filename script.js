window.addEventListener("DOMContentLoaded", () => {


  
  const p1Exp = document.getElementById("p1-exp");
  const p2Exp = document.getElementById("p2-exp");

  let animacionIniciada = false;
  p2Exp.style.visibility = "hidden";
  p1Exp.style.visibility = "hidden";

  window.addEventListener("scroll", () => {
    const experienciaSection = document.getElementById("experiencia");
    const experienciaTop = experienciaSection.offsetTop;
    const experienciaHeight = experienciaSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (
      !animacionIniciada &&
      scrollPosition >= experienciaTop - experienciaHeight / 3
    ) {
      p1Exp.style.visibility = "visible";
      animacionIniciada = true;
      animarTexto(p1Exp, 20, () => {
        p2Exp.style.visibility = "visible";
        animarTexto(p2Exp, 20);
      });
    }
  });
});

function animarTexto(elemento, intervalo, callback) {
  const texto = elemento.innerHTML;
  elemento.innerHTML = "";

  let index = 0;
  const interval = setInterval(() => {
    elemento.innerHTML += texto[index];
    index++;

    if (index === texto.length) {
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, intervalo);
}
