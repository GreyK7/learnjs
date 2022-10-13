

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


// let date = new Date('2012-02-20T03:12:00.000+02:00');
// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);


//Покажите день недели
// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getWeekDay(date) {
//     // let answ;
//     // switch (date.getDay()) {
//     //     case 0:
//     //         answ = 'ВС';
//     //         break;
//     //     case 1:
//     //         answ = 'ПН';
//     //         break;
//     //     case 2:
//     //         answ = 'ВТ';
//     //         break;
//     //     case 3:
//     //         answ = 'СР';
//     //         break;
//     //     case 4:
//     //         answ = 'ЧТ';
//     //         break;
//     //     case 5:
//     //         answ = 'ПТ';
//     //         break;
//     //     default:
//     //         answ = 'СБ';
//     //         break;
//     // }
//     // return answ;

//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
// }

// console.log( getWeekDay(date) );

//День недели в европейской нумерации

// let date = new Date(2012, 0, 3);  // 3 января 2012 года

// function getLocalDay(date) {
//     let x = date.getDay();
//     return x == 0 ? 7 : x;
// }

// console.log( getLocalDay(date) );


//Какой день месяца был много дней назад?

// let date = new Date(2015, 0, 2);

// let getDateAgo = (date, days) => {
//     let cloneDate = new Date(date);
//     cloneDate.setDate(date.getDate() - days);
//     return cloneDate.getDate();
// };

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)



//Последнее число месяца?

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));


///Сколько сегодня прошло секунд?

function getSecondsToday() {
    let date = new Date();
    return date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 3600;
}

console.log(getSecondsToday());

///Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (tomorrow.getTime() - today.getTime()) / 1000;
}

console.log(getSecondsToTomorrow());



///

function formatDate(date) {
    if ((Date.now() - date)  < 1000) return "rigth now";
    if ((Date.now() - date) / 1000 < 60) return `${(Date.now() - date) / 1000} sec past`;
    if ((Date.now() - date) / 60000 < 60) return `${(Date.now() - date) / 60000} min past`;
    let d = [ '0' + date.getDate(), 
        '0' + (date.getMonth() + 1),
        '' + date.getFullYear() % 100,
        '0' + date.getHours(),
        '0' + date.getMinutes()
        ].map(item => item.slice(-2));
    return `${d.slice(0, 3).join('.')} ${d.slice(-2).join(':')}`;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 21600 * 1000)) );