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

// for (let i = 0; i < numberOfFilms; i++ ) {
//     while(true){
//         lastFilm = prompt("Odin iz filmov?", "");
//         if (lastFilm !== "" && lastFilm !== null && lastFilm.length < 50) {
//             break;
//         }    
//     }
    
//     markFilm = prompt ("Na skol`ko ocenite ego?", "");
//     personaMovieDB.movies[lastFilm] = markFilm;
// }

if ( personaMovieDB["count"] < 10 ) {
    console.log("Просмотренно довольно мало фильмов");
} else if (personaMovieDB["count"] > 9 && personaMovieDB["count"] < 31 ) {
    console.log("Вы классический зритель");
} else {
    console.log("Вы киноман");
}

console.log(personaMovieDB);

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


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 0; i < data.length; i++) {
//     if (isNaN(data[i])) {
//         data[i] += " - done";
//     } else {
//         data[i] *= 2;
//     }
// }

// console.log(data);

// for (let i = 0; i < data.length; i++) {
//     result[i] = data[data.length - 1 - i];
// }

// console.log(result);

// let pirimide = '';
// const strLength = 7;

// for (let i = 1; i < strLength; i++) {
//     for (let j = 1; j <= i; j++) {
//         pirimide += '*';
//     }
//     pirimide += '\n';
// }

// console.log(pirimide);

// const lines = 5;
// let res = '';
// let counter = 0;

// for (let i = 0; i <= lines; i++) {
//     for (let j = lines - i; j > 0; j--) {
//         res += ' ';
//     }
//     for (let k = 0; k <= counter; k++) {
//         res += '*';
//     }
//     counter += 2;
//     res += '\n';
// }

// console.log(res);


// const lines = 5;
// let res = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = lines - i; j > 0; j--) {
//         res += ' ';
//     }
//     for (let k = 0; k <= i * 2; k++) {
//         res += '*';
//     }
//     res += '\n';
// }

// console.log(res);


// console.log( NaN || 2 || undefined ); //2
 
// console.log( NaN && 2 && undefined ); //NaN
 
// console.log( 1 && 2 && 3 ); //3
 
// console.log( !1 && 2 || !3 ); //false
 
// console.log( 25 || null && !3 ); //25
 
// console.log( NaN || null || !3 || undefined || 5); //5
 
// console.log( NaN || null && !3 && undefined || 5); //5
 
// console.log( 5 === 5 && 3 > 1 || 5); //true