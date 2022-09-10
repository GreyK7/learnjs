"use strict";

// let numberOfFilms,
//     lastFilm,
//     markFilm;

// numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");


// const personaMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < numberOfFilms; i++ ) {
//     lastFilm = prompt("Odin iz filmov?", "");
//     markFilm = prompt ("Na skol`ko ocenite ego?", "");
//     personaMovieDB.movies[lastFilm] = markFilm;
// }

// console.log(personaMovieDB);

// for (let i = 0; i < 1; i++) {
//     let j = 1;
//     console.log(i);
// }


// console.log(parseInt('111.1', 2));


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// for (let i = 0; i < data.length; i++) {
//     if (isNaN(data[i])) {
//         data[i] += " - done";
//     } else {
//         data[i] *= 2;
//     }
// }

// console.log(data);

for (let i = 0; i < data.length; i++) {
    result[i] = data[data.length - 1 - i];
}

console.log(result);