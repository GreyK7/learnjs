"use strict";

// let numberOfFilms;
    

// const personaMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function start() {
//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
//     }
//     personaMovieDB.count = numberOfFilms;
// }

// // function checkInput() {
    
// // }

// function rememberFilms() {
//     let lastFilm,
//         markFilm;
//     for (let i = 0; i < personaMovieDB["count"]; i++ ) {
//         while(true){
//             lastFilm = prompt("Odin iz filmov?", "").trim();
//             if (lastFilm !== "" && lastFilm !== null && lastFilm.length < 50) {
//                 break;
//             }    
//         }
//         markFilm = prompt ("Na skol`ko ocenite ego?", "");
//         personaMovieDB.movies[lastFilm] = markFilm;
//     }
// }

// function defineLvl() {
//     if ( personaMovieDB.count < 10 ) {
//         console.log("Просмотренно довольно мало фильмов");
//     } else if (personaMovieDB.count > 9 && personaMovieDB.count < 31 ) {
//         console.log("Вы классический зритель");
//     } else {
//         console.log("Вы киноман");
//     }
// }

// function showMyDb() {
//     if (!personaMovieDB["private"]) {
//         console.log(personaMovieDB);
//     }
// }

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         while (true) {
//             personaMovieDB["genres"][i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
//             console.log(personaMovieDB["genres"][i-1]);
//             if (personaMovieDB["genres"][i-1] != "" && personaMovieDB["genres"][i-1] != null) {
//                 break;
//             }
//         }
//     }
// }

// start();
// rememberFilms();
// defineLvl();
// showMyDb();
// writeYourGenres();






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



// function test (x, n) {
//     let res = x;
//     for (let i = 0; i < n - 1; i++) {
//         res *= x;
//     }
//     return res;
// }

// let sayHi = function () {
//     console.log("Hello world!");
// }

// let test2 = sayHi();

// console.log(test(1, 100));
// console.log(test2);


// function getMathResult(first, second) {
//     if (Number.isFinite(second) && second > 0) {
//        let result = String(first);
//        let counter = first;
//         for (let i = 1; i < second; i++) {
//             counter += first;
//             result += "---" + counter;
//         }
//         return result;
//     } else {
//         return first;
//     }
// }

// console.log(getMathResult(10, '5'));

// let test123 = function (a, func) {
//     return func(a);
// };

// console.log(test123(7, a => a * a));


// let h = 12;

// console.log(typeof(h.toString()));


function getCoupeNumber(place) {
    if (place == 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    } else if (typeof(place) == 'number' && place > 0 && Number.isInteger(place)) {
        return Math.ceil(place / 4);
    } else {
        return "Ошибка. Проверьте правильность введенного номера места";
   }
}

console.log(getCoupeNumber(-10.5));


let t = undefined;

console.log(t == undefined);


function findMaxNumber(a, b, c, d) {
    if ((a === undefined || b === undefined || c === undefined || d === undefined) || (!Number.isFinite(a + b + c + d))) {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, "6", 11));


function getTimeFromMinutes(a) {
    if (typeof(a) != "number" || !Number.isInteger(a) || a < 0) {
        return "Ошибка, проверьте данные";
    } else {
        let hours = Math.floor(a / 60),
        minutes = a % 60,
        txt = '';
        if ( hours == 1) {
            txt = "час";
        } else if (hours > 1 && hours < 5) {
            txt = "часа";
        } else {
            txt = "часов";
        }
        return `Это ${hours} ${txt} и ${minutes} минут`;
    }
}


console.log(getTimeFromMinutes("gg"));
// let a = 1, b = undefined, c = 3, d = 5;

// let f = a + b + c + d;

// console.log(f);

// console.log(Number.isNaN(f));

///FIBONA4I
function fiboLine(num) {
    let line = [0, 1],
        res = "";
    if (typeof(num) != "number" || !Number.isInteger(num) || num <= 0) {
        return "";
    } else if (num <= 2) {
        for (let i = 0; i < num; i++) {
            res += line[i] + " "; 
        }
        return res.trimEnd();
    } else {
        for (let i = 2; i < num; i ++) {
            line[i] = (+line[i-1] + +line[i-2]);
        }
        for (let i = 0; i < line.length; i++) {
            res += line[i] + " ";
        }
        return res.trimEnd();
    } 
}

console.log(fiboLine(7));