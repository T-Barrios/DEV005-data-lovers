export const ordenar = (dataArray,selectedTitle) => {
  if(selectedTitle==="title-az"){
    const sortDataByTitleAz = dataArray.sort(function(a,b) {
      if(a.title > b.title){
        return 1;
      }if (a.title < b.title){
        return -1;
      } 
      return 0;
    });
    return sortDataByTitleAz
  }
  if(selectedTitle==="title-za"){
    const sortDataByTitleZa = dataArray.sort(function(a,b) {
      if(a.title < b.title){
        return 1;
      }if (a.title > b.title){
        return -1;
      } 
      return 0;
    });
    return sortDataByTitleZa
  }
}

export const filtrar = (dataArray,selectedDirector) => {
  for(let i=0;i<dataArray.length;i++){
    const directorName = dataArray[i].director
    if(selectedDirector===directorName){
      const filteredMovies = dataArray.filter(element => element.director === directorName);
      return filteredMovies
    }
  }
}

export const procesar = (dataArray) => {
  let peopleInFilms = []
  let genderOfPeople = []
  const genderValues = []
  for(let i=0;i<dataArray.length;i++){
    peopleInFilms = dataArray[i].people
    for(let a=0;a<peopleInFilms.length;a++){
      genderOfPeople = peopleInFilms[a].gender
      genderValues.push(genderOfPeople)
    }
  }
  const femaleFilter = genderValues.filter(element => element === "Female");
  const maleFilter = genderValues.filter(element => element === "Male");
  const unknownFilter = genderValues.filter((element) => !["Female", "Male"].includes(element));
  const totalNumberOfCharacters = genderValues.length
  const femalePorcentage = Math.trunc(Math.round(femaleFilter.length*100/totalNumberOfCharacters));
  const malePorcentage = Math.trunc(Math.round(maleFilter.length*100/totalNumberOfCharacters));
  const unknownPorcentage = Math.trunc(Math.round(unknownFilter.length*100/totalNumberOfCharacters));
  const genderPorcentages = [];
  genderPorcentages.push(femalePorcentage, malePorcentage, unknownPorcentage);
  return genderPorcentages
}