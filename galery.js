const btnClose = document.querySelector("#btn-close");
const btnNext = document.querySelector("#btn-next");
const btnPrevious = document.querySelector("#btn-previous");
const imagenes = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector("#contenedor-principal");
const lightbox2 = document.querySelector("#con");
const imagenActiva = document.querySelector("#img-activa");

let indiceImagen = 0;

const abreligtbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = "flex";
  lightbox2.style.display = "flex";
  indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", abreligtbox);
});

btnClose.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightbox2.style.display = "none";
});

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }

  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
};
btnNext.addEventListener("click", adelantaImagen);

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
};

btnPrevious.addEventListener("click", retrocederImagen);



