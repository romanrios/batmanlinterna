const API = "https://api.themoviedb.org/3";

export const get = (path) => {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer b81edd66f02b63c7a96a8dd53950abc8, eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODFlZGQ2NmYwMmI2M2M3YTk2YThkZDUzOTUwYWJjOCIsInN1YiI6IjY2MWRjYzY3YTM5ZDBiMDE3ZDU0Y2ZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rGAQXmDKScZ28bqTLepH-poKLoTYPrmWBrcEMugLUrU",
      "Content-type": "application/json;charset-utf-8",
    },
  }).then((results) => results.json());
};

// EN EL COMPONENTE
// get("/movies").then(data)
// setPeliculas(data)
