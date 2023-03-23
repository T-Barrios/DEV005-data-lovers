import { ordenar, filtrar, procesar} from './data.js';
import data from './data/ghibli/ghibli.js';

const films = data.films
const container = document.getElementById("animaciones")
const btn = document.getElementById("btnFunFact");
const textoFunFact = document.getElementById("procesar")
const porcentages = procesar(films)

textoFunFact.innerHTML = `Did you know that, in studio Ghibli, the number of male characters is slightly higher than female characters?. More precisely, ${porcentages[1]}% are males, while ${porcentages[0]}% are females, and only a ${porcentages[2]}% belongs to characters which their gender is unknown or not explicitly defined.`

btn.addEventListener("click", displayFunFact);
textoFunFact.style.display = "none";

function displayFunFact(){
  if(textoFunFact.style.display === "none"){
    return textoFunFact.style.display = "block";
  }
  if(textoFunFact.style.display === "block"){
    return textoFunFact.style.display = "none";
  }
}

const pintarEnInterfaz = (array) => {
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    img.src=array[i].poster
    img.className="poster"
    container.appendChild(img);
  }
}

pintarEnInterfaz(films)

const selectedValue = document.getElementById("selectionBy")

function getSelectedValue(){
  const optionUser = selectedValue.value
  if(optionUser==="title-az"){
    container.innerHTML=""
    pintarEnInterfaz(ordenar(films,optionUser))
  }
  if(optionUser==="title-za"){
    container.innerHTML=""
    pintarEnInterfaz(ordenar(films,optionUser))    
  }
}

selectedValue.addEventListener("change", getSelectedValue)

const selectedValueFilter = document.getElementById("filteringBy")

function getSelectedValueFilter(){
  for(let i=0;i<films.length;i++){
    const optionDirector = selectedValueFilter.value
    const director = films[i].director
    if(optionDirector===director){
      container.innerHTML=""
      pintarEnInterfaz(filtrar(films,optionDirector))
    }
  }
}

selectedValueFilter.addEventListener("change", getSelectedValueFilter)