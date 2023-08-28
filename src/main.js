import { ordenar, filtrar, procesar } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const films = data.films;
const container = document.getElementById("animaciones");
const btn = document.getElementById("btnFunFact");
const textoFunFact = document.getElementById("procesar");
const porcentages = procesar(films);
let newFilms = films;
const btnResetMovie = document.getElementById("btnResetMovie");

textoFunFact.innerHTML = `${porcentages[1]}% of the characters are males, ${porcentages[0]}% are females, and only a ${porcentages[2]}% has a gender that is unknown or not explicitly defined.`;

btn.addEventListener("click", displayFunFact);
textoFunFact.style.display = "none";

function displayFunFact() {
  if (textoFunFact.style.display === "none") {
    return textoFunFact.style.display = "block";
  }
  if (textoFunFact.style.display === "block") {
    return (textoFunFact.style.display = "none");
  }
}

const modalOverlay = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const movieDescription = document.getElementById("movie-description");
const movieTtile = document.getElementById("movie-title");
const movieYear = document.getElementById("movie-year")
const movieRate = document.getElementById("movie-rate")
const movieDirector = document.getElementById("movie-director")

/* "title": "My Neighbor Totoro",
"description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
"director": "Hayao Miyazaki",
"producer": "Hayao Miyazaki",
"poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
"release_date": "1988",
"rt_score" */

const pintarEnInterfaz = (array) => {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    img.src = array[i].poster;
    img.className = "poster";
    img.addEventListener("click", () => {
      movieTtile.textContent = array[i].title;
      movieDirector.textContent = "Director: " + array[i].director;
      movieYear.textContent = "Release date: " + array[i].release_date;
      movieRate.textContent = "Rating score: " + array[i].rt_score;
      movieDescription.textContent = array[i].description;
      // console.log(`Haz hecho clic en la imagen ${i + 1}`, array[i]);
    });
    container.appendChild(img);

    // When the user clicks on the button, open the modal
    img.onclick = function () {
      modalOverlay.style.display = "block";
      document.body.classList.add("modal-open");
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modalOverlay.style.display = "none";
      document.body.classList.remove("modal-open");
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
        document.body.classList.remove("modal-open");
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
