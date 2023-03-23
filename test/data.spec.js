import { filtrar, ordenar, procesar } from '../src/data.js';

const dataSample = [
  {
    "title": "Zmovie1",
    "director": "Director1",
    "release_date": "2000",
    "people": [
      {
        "name": "Operson1 Movie1",
        "gender": "Female",
        "age": "40",
      },
      {
        "name": "Fperson2 Movie1",
        "gender": "Male",
        "age": "20",
      },
      {
        "name": "Gperson3 Movie1",
        "gender": "Female",
        "age": "10",
      },
    ]
  },
  {
    "title": "Amovie2",
    "director": "Director2",
    "release_date": "2002",
    "people": [
      {
        "name": "Pperson1 Movie2",
        "gender": "Female",
        "age": "40",
      },
      {
        "name": "Gperson2 Movie2",
        "gender": "Male",
        "age": "20",
      },
      {
        "name": "Aperson3 Movie2",
        "gender": "NA",
        "age": "10",
      },
    ]
  },
]

describe('filtrar', () => {
  const directorSample = "Director1";
  const outputDirector = [
    {
      "title": "Zmovie1",
      "director": "Director1",
      "release_date": "2000",
      "people": [
        {
          "name": "Operson1 Movie1",
          "gender": "Female",
          "age": "40",
        },
        {
          "name": "Fperson2 Movie1",
          "gender": "Male",
          "age": "20",
        },
        {
          "name": "Gperson3 Movie1",
          "gender": "Female",
          "age": "10",
        },
      ]
    },
  ]
  it('returns an array of the filtered movies by Director1', () => {
    expect(filtrar(dataSample,directorSample)).toEqual(outputDirector);
  });
});


describe('ordenar', () => {
  const titleSampleAz = "title-az"
  const titleSampleZa = "title-za"
  const dataSampleSortAz = [
    {"title": "Zen","director": "Director1","release_date": "2000",},
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Raul","director": "Director1","release_date": "2000",},
    {"title": "Daniel","director": "Director2","release_date": "2002",},

  ]
  const dataSampleSortZa = [
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Zen","director": "Director1","release_date": "2000",},
    {"title": "Raul","director": "Director1","release_date": "2000",},
    {"title": "Daniel","director": "Director2","release_date": "2002",},
  ]
  const dataSampleSortSame = [
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Anto","director": "Director2","release_date": "2002",},
  ]
  const outputAz = [
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Daniel","director": "Director2","release_date": "2002",},
    {"title": "Raul","director": "Director1","release_date": "2000",},
    {"title": "Zen","director": "Director1","release_date": "2000",},
  ]
  const outputZa = [
    {"title": "Zen","director": "Director1","release_date": "2000",},
    {"title": "Raul","director": "Director1","release_date": "2000",},
    {"title": "Daniel","director": "Director2","release_date": "2002",},
    {"title": "Anto","director": "Director2","release_date": "2002",},
  ]
  const OutputSameZa = [
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Anto","director": "Director2","release_date": "2002",},
  ]
  const OutputSameAz = [
    {"title": "Anto","director": "Director2","release_date": "2002",},
    {"title": "Anto","director": "Director2","release_date": "2002",},
  ]

  it('returns an array of the movie titles ordered from a-z', () => {
    expect(ordenar(dataSampleSortAz,titleSampleAz)).toEqual(outputAz)
  });
  it('returns an array of the movie titles ordered from z-a', () => {
    expect(ordenar(dataSampleSortZa,titleSampleZa)).toEqual(outputZa)
  });
  it('MISMO', () => {
    expect(ordenar(dataSampleSortSame,titleSampleZa)).toEqual(OutputSameZa)
  });
  it('MISMO', () => {
    expect(ordenar(dataSampleSortSame,titleSampleAz)).toEqual(OutputSameAz)
  });
});


describe('procesar', () => {
  it('returns an array with the porcentages of each gender (female, male, unknown)', () => {
    expect(procesar(dataSample)).toEqual([50,33,17]);
  });
});
