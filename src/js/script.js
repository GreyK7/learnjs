"use strict";

let numberOfFilms,
    lastFilm,
    markFilm;

numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");


const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++ ) {
    lastFilm = prompt("Odin iz filmov?", "");
    markFilm = prompt ("Na skol`ko ocenite ego?", "");
    personaMovieDB.movies[lastFilm] = markFilm;
}

console.log(personaMovieDB);