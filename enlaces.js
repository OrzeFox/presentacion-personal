const imagenes = document.querySelectorAll(".carrousel .img");

imagenes.forEach((imagen, index) => {
  imagen.addEventListener("click", () => {
    const enlaces = [
      "https://youtu.be/dQw4w9WgXcQ?t=42",
      "https://store.steampowered.com/app/391540/Undertale/",
      "https://www.youtube.com/watch?v=0I647GU3Jsc&ab_channel=ImagineDragonsVEVO",
      "https://github.com/OrzeFox",
      "https://www.ejemplo5.com",
    ];
    const enlace = enlaces[index];
    window.location.href = enlace;
  });
});
