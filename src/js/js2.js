

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



///Рекурсивный обход

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };


// function sumSalary(obj) {
//     let sumAll = 0;
//     for (let dep in obj) {
//         if (Array.isArray(obj[dep])) {
//             sumAll += obj[dep].reduce((sum, item) => sum + item.salary, 0);
//         } else {
//              return sumAll + sumSalary(obj[dep]);
//         }
//     }
//     return sumAll;
// }


function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
    }
  }

console.log(sumSalaries(company));


///МАСССИВЫы

// /**
//   * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
//   * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
//   * Сложность задачи: 1 of 5
//   * @param {Array} array - Массив любых элементов
//   * @returns {Array}
// */
const compact = (array) => {
  return array.filter(item => item);
};
 
 const data = [0, 1, false, 2, undefined, '', 3, null];
 console.log(compact(data)); // [1, 2, 3]



 /**
  * Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.
  * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
  * Сложность задачи: 2 of 5
  * @param {Array} array - массив, значения которого массивы пар
  * @returns {Array}
*/
const fromPairs = (array) => {
    return array.reduce((answ, item) => { answ[item[0]] = item[1]; return answ;}, {});
    // return Object.fromEntries(array);
};
 
 const d = [['a', 1], ['b', 2]];
 console.log(fromPairs(d)); // { 'a': 1, 'b': 2 }


//  /**
//   * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
//   * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
//   * Сложность задачи: 2 of 5
//   * @param {Array} array - Массив с примитивными значениями
//   * @param {?} args - лист значений для удаления
//   * @returns {Array}
// */
const without = (array, ...args) => {
  let newArr = [...array];
  for (let i = 0; i < newArr.length; i++) {
    if (args.includes(newArr[i])) {
      newArr.splice(i, 1);
      i--;
    }
  }
  return newArr;
};
 
 const da = [1, 2, 3, 1, 2, 4, 4];
 console.log(without(da, 1, 2, 3)); // [3]


 /**
  * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
  * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
  * Сложность задачи: 2 of 5
  * @param {Array<string | number>} array - Массив с примитивными значениями
  * @returns {Array}
*/
const unique = (array) => {
  let set = new Set(array);
  return Array.from(set);
};
 
 const dat = [1, 2, 1, 2, 3];
 console.log(unique(dat)); // [1, 2, 3]


 /**
  * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
  * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
  * Сложность задачи: 2 of 5
  * @param {Array} firstArray - Массив с примитивными значениями
  * @param {Array} secondArray - Массив с примитивными значениями
  * @returns {boolean}
*/
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length === secondArray.length) {
    return firstArray.every((item, index) => item === secondArray[index]);
  }
  return false;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false


/**
  * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
  * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Глубокий массив
  * @returns {Array}
*/
const flatten = (array) => {
   return array.reduce((res, item) => res.concat(Array.isArray(item) ? flatten(item) : item), []);
 };


 const data2 = [1, 2, [3, 4, [5]]];
 console.log(flatten(data2)); // [1, 2, 3, 4, 5]



 /**
  * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
  * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
  * Сложность задачи: 3 of 5
  * @param {Array} array - Массив элементов
  * @param {number} size - Размер чанков
  * @returns {Array}
*/
const chunk = (array, size) => {
  let newArr = [];
  for (let i = 0; i < array.length; i+=size) {
    newArr.push(array.slice(i, i+size));
  }
  return newArr;
};
 
 const data3 = [1, 2, 3, 4, 5, 6, 7];
 console.log(chunk(data3, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
 console.log(chunk(data3, 3)); // [[1, 2, 3], [4, 5, 6], [7]]



/**
  * Описание задачи: Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
  * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
  * Сложность задачи: 4 of 5
  * @param {?} arrays - Массив примитивных значений
  * @returns {Array}
*/
const intersection = (...arrays) => {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < arrays[0].length; i++) {
    for (let j = 1; j < arrays.length; j++) {
      if (arrays[j].includes(arrays[0][i])) {
        counter++;
      } else break;
    }
    if (counter == arrays.length - 1 && !newArr.includes(arrays[0][i])) newArr.push(arrays[0][i]); 
    counter = 0;
  }
  return newArr;
};
 
 const arr9 = [1, 2];
 const arr10 = [2, 3];
 const arr11 = ['a', 'b'];
 const arr12 = ['b', 'c'];
 const arr5 = ['b', 'e', 'c'];
 const arr6 = ['b', 'b', 'e'];
 const arr7 = ['b', 'c', 'e'];
 const arr8 = ['b', 'e', 'c'];
 console.log(intersection(arr9, arr10)); // [2]
 console.log(intersection(arr11, arr12, arr5)); // ['b']
 console.log(intersection(arr6, arr7, arr8)); // ['b', 'e']



///РЕКУРСИЯ И СВЯЗНЫЕ СПИСКИ

///Вычислить сумму чисел до данного

// function sumTo(n) {
//   if (n == 1) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// } // рекурсия

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
} // цикл

// function sumTo(n) {
  // return n * (n + 1) /2;
// } // арифметическая прогрессия

console.log(sumTo(100));


//factorial

function factorial(n) {
  if (n == 1) return n;
  else {
    return n * factorial(n - 1);
  }
}


console.log(factorial(5));


//fibona4i

function fib(n) { 
  let  a = 1;
  let  b = 1;
  let  c = 0;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      [a, b ] = [b, c];
    }
  return b;
}

// function fib(n) { 
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// } //rekursiya

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757



///Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// } //rekursiya

function printList(list) {
  let tmp = list;
  while(tmp) {
    console.log (tmp.value);
    tmp = tmp.next;
  }
}

printList(list);