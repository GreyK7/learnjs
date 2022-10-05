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
            line[i] = (line[i-1] + line[i-2]);
        }
        for (let i = 0; i < line.length; i++) {
            res += line[i] + " ";
        }
        return res.trimEnd();
    } 
}

console.log(fiboLine(7));


/// TEST OBJECT

let user = {};

user["name"] = "John";
user["surname"] = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
delete user.surname;
console.log(user);

let isEmpthy = function(obj) {
    for (let key in obj) {
        if ( key ) {
            return false;
        }
    }
    return true;
};

console.log(isEmpthy(user));


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

function sumSalary(obj) {
    let sum = 0;
    for (let key in obj)  {
        sum += obj[key];
    }
    return sum;
}

console.log(sumSalary(salaries));


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);

///game
let innerHi = () => console.log(this.name);
const testObj = {
    name: 'gor',
    age: 19,
    obj: {
        color: "blue",
        width: "100px",
        newObj: {
            kek: 4
        }
    },
    sayHi() {
        
        innerHi(); 
    }
};



testObj.sayHi();

const br = Object.assign({}, testObj);

for (let key in testObj) {
    console.log(testObj[key]);
}

console.log(br === testObj);

br.obj["color"] = "white";

console.log(br["obj"]);
console.log(testObj["obj"]);


/// test "this"

// const calculator = {
//     read() {
//         this.first = +prompt("Enter first value: ", "");
//         this.second = +prompt("Enter second value: ", "");
//     },

//     sum() {
//         return this.first + this.second;
//     },

//     mul() {
//         return this.first * this.second; 
//     }
// };


function Calculator() {
    this.read = function() {
        this.first = +prompt("Enter first value: ", "");
        this.second = +prompt("Enter second value: ", "");
    };

    this.sum = function() {
        return this.first + this.second;
    };

    this.mul = function() {
        return this.first * this.second; 
    };
}

const calc = new Calculator();

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Enter new value", "");
    };
}

let tester = new Accumulator(5);

// Zada4a iz sobesedivaniya 2
const someString = 'This is some strange string';

function reverse(str) {
    let newString = '';
    for (let i = str.length - 1; i > -1; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverse(someString));

//Bankomat
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

let accessCurrencies = [];

function sumArr(sumArr, arr) {
    for (let elem of arr) {
        sumArr.push(elem);
    }
}

sumArr(accessCurrencies, baseCurrencies);
sumArr(accessCurrencies, additionalCurrencies);

// console.log(accessCurrencies);

function availableCurr(arr, missingCurr) {
    if (arr.length == 0) {
        return 'Нет доступных валют';
    }
    let answ = 'Доступные валюты:';
    for (let elem of arr) {
        if (elem != missingCurr) {
            answ += '\n' + elem;
        }
    }
    return answ;
}

console.log(availableCurr(accessCurrencies, 'CNY'));


//Ras4et plowadi pomeweniya massivi + object

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let area = 0;
    data.shops.forEach(value => {
        area += data.height * value.width * value.length;
    });
    return ((data.budget - area * data.moneyPer1m3) >= 0) ? 'Бюджета достаточно' : 'Бюджета недостаточно';
}

console.log(isBudgetEnough(shoppingMallData));

//zada4a na formirovnie komand po 3 4eloveka

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam'];

function sortStudentsByGroups(arr) {
    let a = [], b = [], c = [], d = [];
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            d.push(arr[i]);
        }
    }
    d = d.join(', ');
    return [a, b, c, (d.length === 0) ? 'Оставшиеся студенты: -' : `Оставшиеся студенты: ${d}`];
}

console.log(sortStudentsByGroups(students));
// function sortStudentsByGroups(arr) {
//     let result = [[], [], []];
//     let leftPeople = 'Оставшиеся студенты:';
//     let counterI = 0;
//     let counterJ = 0;
//     arr.sort();
//     arr.forEach(item => {
//         if (counterI < 3 && counterJ < 3) {
//             result[counterI].push(item);
//             counterJ++;
//         } else if (++counterI < 3) {
//             counterJ = 1;
//             result[counterI].push(item);
//         } else {
//             if (counterJ > 3) {
//                 leftPeople += `, ${item}`;
//             } else {
//                 leftPeople += ` ${item}`;
//             }
//             counterJ++;
//         }
//     });
//     if (leftPeople.length === 20) {
//         leftPeople += ' -';
//     } 
//     result.push(leftPeople);
//     return result;
// }

const family = {
    ivan: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal',
};

let names = [];

for (let key in family) {
    if (family[key] == 'person') {
        names.push(key);
    }
}

console.log(names);


const Names = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam'];

let newNames = [];

Names.forEach(item => {
    if (item[0] == 'A') {
        newNames.push(item);
    }
});

console.log(newNames);

const Numberss = [1, 2, 3, 4, 5];

console.log(Numberss.map(item => 7));


//cammelCASE

function camelize(str) {
    let arr = str.split('-');
    for (let i = 1; i < arr.length; i++) {
        arr[i] = `${arr[i][0].toUpperCase() + arr[i].slice(1,)}`;
    }
    return arr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

//Фильтрация по диапазону

let arr = [5, 3, 8, 1];

let filterRange = function(arr, a, b) {
    return arr.filter((item => item >= a && item <= b));
};

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (совпадающие значения)
console.log( arr ); // 5,3,8,1 (без изменений)


//Фильтрация по диапазону "на месте"

let arrey = [5, 3, 8, 1, 5, 5];

let filterRangeInPlace = function(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
};

filterRangeInPlace(arrey, 1, 4); // удалены числа вне диапазона 1..4

console.log( arrey ); // [3, 1]


// Сортировать в порядке по убыванию
let arre = [5, 2, 1, -10, 8];

arre.sort(function(a, b) {
    return b - a;
});

console.log( arre ); // 8, 5, 2, 1, -10

// Рекурссия для развёртывания глубокого массива в один
const arrtem = [1, 2, [3, 4, [5, 6]]];

function reWork(arr, d) {
    return d > 0 ? arr.reduce((acc, value) => acc.concat(Array.isArray(value) ? 
    reWork(value, d - 1) : value), []) : arr.slice();
}

console.log(reWork(arrtem, Infinity));


//Скопировать и отсортировать

let massive = ["HTML", "JavaScript", "CSS"];

let copySorted = function (arr) {
    return [...arr].sort();
};

let sorted = copySorted(massive);

console.log(sorted);
console.log(massive);


//Создать расширяемый калькулятор

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.addMethod = function (op, method) {
        this.methods[op] = method;
    };

    this.calculate = function(str) {
        let arr = str.split(' ');     
        if (!this.methods[arr[1]] || isNaN(arr[0]) || isNaN(arr[2])) {
            return NaN;
        } else {

            return this.methods[arr[1]](+arr[0], +arr[2]);
        }
    };
}

let cal = new Calculator();

console.log(cal.calculate("3 + 7"));




//Отсортировать пользователей по возрасту

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let someAr = [ vasya, petya, masha ];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(someAr);

console.log(someAr[0].name); // Вася
console.log(someAr[1].name); // Маша
console.log(someAr[2].name);



//Трансформировать в массив имён

let users = [ vasya, petya, masha ];

let n = users.map( item => item.name);

console.log( n );


//Получить средний возраст

function getAverageAge(arr) {
    return arr.reduce((sum, value) => sum + value.age, 0) / arr.length;
}

console.log( getAverageAge(someAr) );






//Трансформировать в объекты

let Vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let Petya = { name: "Петя", surname: "Иванов", id: 2 };
let Masha = { name: "Маша", surname: "Петрова", id: 3 };

let Users = [ Vasya, Petya, Masha ];

let usersMapped = Users.map(item => ({ 
        fullName: `${item.name} ${item.surname}`,
        id: item.id,
    })
);

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ) ;// Вася Пупкин
console.log(Users);


//Создайте объект с ключами из массива

let userS = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];


function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item['id']] = item;
        return obj;
    }, {});
}


let usersById = groupById(userS);

console.log(usersById);


//Оставить уникальные элементы массива

function unique(arr) {
    let newArr = [];
    arr.forEach(item => !newArr.includes(item) && newArr.push(item));
    return newArr;    
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];

console.log(unique(strings));


//Фильтрация уникальных элементов массива

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) ); // Hare,Krishna,:-O


// Отфильтруйте анаграммы


let anagramm = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = function(arr) {
    let set = new Set();
    let answ = [];
    arr.forEach(value => {
        let trans = value.toUpperCase().split('').sort().join('');
        if (!set.has(trans)) {
            set.add(trans);
            answ.push(value);
        }
    });
    return answ;
};

console.log( aclean(anagramm) );


// Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log(keys);



//Сумма свойств объекта

let sal = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
const sumSalaries = function(obj) {
    let sum = 0;
    for (let val of Object.values(obj)) {
        sum += val;
    }
    return sum;
};

console.log( sumSalaries(sal) );


//


let us = {
    name: 'John',
    age: 30
  };
  

const count = function(obj) {
    return Object.keys(obj).length;
};


console.log( count(us) ); // 2


///Деструктурирующее присваивание

let useR = { namE: "John", years: 30 };

let {namE, years: age, isAdmin = false} = useR;

console.log( namE ); // John
console.log( age ); // 30
console.log( isAdmin ); // false


//Максимальная зарплата

let salarieS = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

// let tempArr = Object.entries(salarieS).sort((a,b) => a[1] - b[1]);
// console.log(tempArr.at(-1)[0]);
function maxSel (obj) {
    let max = 0;
    let answ = null;
    for (let [name, sal] of Object.entries(obj)) {
        if (sal > max) { 
            answ = name;
            max = sal;
        }
    }
    return answ;
}

console.log(maxSel({}));