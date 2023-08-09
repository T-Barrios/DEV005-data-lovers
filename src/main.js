import { ordenar, filtrar, procesar } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const films = data.films;
const container = document.getElementById("animaciones");
const btn = document.getElementById("btnFunFact");
const textoFunFact = document.getElementById("procesar");
const porcentages = procesar(films);
let newFilms = films;
const btnResetMovie = document.getElementById("btnResetMovie");

textoFunFact.innerHTML = `Did you know that, in studio Ghibli, the number of male characters is slightly higher than female characters?. More precisely, ${porcentages[1]}% are males, while ${porcentages[0]}% are females, and only a ${porcentages[2]}% belongs to characters which their gender is unknown or not explicitly defined.`;

btn.addEventListener("click", displayFunFact);
textoFunFact.style.display = "none";

function displayFunFact() {
  if (textoFunFact.style.display === "none") {
    return (textoFunFact.style.display = "block");
  }
  if (textoFunFact.style.display === "block") {
    return (textoFunFact.style.display = "none");
  }
}

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modalText");

const pintarEnInterfaz = (array) => {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    img.src = array[i].poster;
    img.className = "poster";
    img.addEventListener("click", () => {
      // alert(`Haz hecho clic en la imagen ${i + 1}`);
      
      console.log(`Haz hecho clic en la imagen ${i + 1}`, array[i]);
    });
    container.appendChild(img);

    // When the user clicks on the button, open the modal
    img.onclick = function () {
      modalText.textContent = array[i].title;
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
};

pintarEnInterfaz(ordenar(films, "title-az"));

btnResetMovie.addEventListener("click", () => {
  container.innerHTML = "";
  pintarEnInterfaz(ordenar(films, "title-az"));
});

const selectedValue = document.getElementById("selectionBy");

function getSelectedValue() {
  const optionUser = selectedValue.value;
  if (optionUser === "title-az") {
    container.innerHTML = "";
    newFilms = ordenar(newFilms, optionUser);
    pintarEnInterfaz(newFilms);
  }
  if (optionUser === "title-za") {
    container.innerHTML = "";
    newFilms = ordenar(newFilms, optionUser);
    pintarEnInterfaz(newFilms);
  }
}

selectedValue.addEventListener("change", getSelectedValue);

const selectedValueFilter = document.getElementById("filteringBy");

function getSelectedValueFilter() {
  for (let i = 0; i < films.length; i++) {
    const optionDirector = selectedValueFilter.value;
    const director = films[i].director;
    if (optionDirector === director) {
      container.innerHTML = "";
      newFilms = filtrar(films, optionDirector);
      pintarEnInterfaz(newFilms);
    }
  }
}

selectedValueFilter.addEventListener("change", getSelectedValueFilter);
