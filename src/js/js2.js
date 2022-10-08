

// function disemvowel(str) {
//     let newArr = str.split('');
//     for (let i = 0; i < newArr.length; i++) {
//         if (['a', 'e', 'i', 'o', 'u'].includes(newArr[i].toLowerCase())) {
//             newArr.splice(i, 1);
//             i--;
//         }
//     }
//     return newArr.join('');
// }

// console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!")



// function countPositivesSumNegatives(input) {

//     return (input == null || input == 0) ? [] : input.reduce((res, item) => item > 0 ?  (res[0] += 1, res) : (res[1] += item, res), [0, 0]);
//  }

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives([]));


// const personaMovieDB = {
//     count: undefined,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start() {
//         while(this.count == "" || this.count == null || isNaN(this.count)) {
//             this.count = +prompt("Сколько фильмов вы посмотрели?", "");
//         }
//     },
//     rememberFilms() {
//         let lastFilm,
//             markFilm;
//         for (let i = 0; i < this.count; i++ ) {
//             while(true){
//                 lastFilm = prompt("Odin iz filmov?", "").trim();
//                 if (lastFilm !== "" && lastFilm !== null && lastFilm.length < 50) {
//                     break;
//                 }    
//             }
//         markFilm = prompt ("Na skol`ko ocenite ego?", "");
//         this.movies[lastFilm] = markFilm;
//         }
//     },
//     defineLvl() {
//         if ( this.count < 10 ) {
//             console.log("Просмотренно довольно мало фильмов");
//         } else if (this.count > 9 && this.count < 31 ) {
//             console.log("Вы классический зритель");
//         } else {
//             console.log("Вы киноман");
//         }
//     },
//     showMyDb() {
//         if (!this.private) {
//             console.log(this);
//         }
//     },
//     writeYourGenres() {
//         for (let i = 1; i < 4; i++) {
//             while (true) {
//                 this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
//                 console.log(this.genres[i-1]);
//                 if (this.genres[i-1] != "" && this.genres[i-1] != null) {
//                     break;
//                 }
//             }
//         }
//         this.genres.forEach((item, index) => console.log(`Любимый жанр ${index + 1} - это ${item}`));
//     },
//     toggleVisibleMyDB() {
//         this.privat = this.privat ? false : true;
//     },
// };


// personaMovieDB.start();
// personaMovieDB.rememberFilms();
// personaMovieDB.defineLvl();
// personaMovieDB.showMyDb();
// personaMovieDB.writeYourGenres();


let d = new Date();
console.log(d.getDay());