// let
// const

// console.log(username);

// let username;
// const userAge = 30;

// username = 'mohammed'
// console.log(username);
// console.log(userAge);

// const user = {
//     name: 'ahmed',
//     age: 39
// }

// user.age = 40;

// const array = ['ahmed', 'mohammed', 'ali']

// array[0] = 'ibrahem'
// array.push('max')
// // array = Array()
// console.log(array)

// const contractorArray = Array(5).fill(0)

// contractorArray.push(10)

// console.log(contractorArray)

// const sayHi = function() {
//     console.log('hi')
// }

// sayHi = function() {
//     console.log('hello')
// }

// ****************************************************** //
// ******************* arrow function ******************* //
// ****************************************************** //
// function normalFunction() {
//     console.log("I'm Normal Function")
// }

// const arrowFunction = () => {
//     console.log("I'm Arrow Function")
// }

// (() => console.log('hi'))()

// const fun = function () {
//     console.log('I am a function')
// }

// const fun2 = () => {
//     console.log('I am a function 2')
// }

// const fun3 = () => console.log('I am a function 3')

// fun()
// fun2()
// fun3()

// function funWithParam(cb) {
//   cb();
// }

// funWithParam(function () {
//   console.log("I am a callback function");
// });

// funWithParam(() => {
//     console.log("I am a callback function")

// });

// funWithParam(() => console.log("I am a callback function"));

// function withDefParam(param1 = 15, param2 = false , cb = function () {console.log('hi')}) {
//     console.log(param1, param2)

//     cb()
// }

// withDefParam()

// ****************************************************** //
// ********************* FOR LOOPS ********************** //
// ****************************************************** //

// const items = ['ahmed', 'mohammed', 'ibrahem', 'ali']

// for (let i =0; i < items.length; i++) {
//     console.log(items[i])
// }

// console.log("// ****************************************************** //")

// // for of
// for (item of items) {
//     console.log(item)
// }
// console.log("// ****************************************************** //")

// // for in
// for (item in items) {
//     console.log(item)
// }

// console.log("// ****************************************************** //")

// // foreach

// items.forEach((item, index, items) => {
//   console.log(item, index);
//   console.log(items);
//   console.log("// ****************************************************** //");
// });

// ****************************************************** //
// ********************** CLASSES *********************** //
// ****************************************************** //

// JavaScript Classes

// const BMW = {
//     model: 2019,
//     price: 2000000,
//     print: () => {
//         console.log('BMW model is: ' + this.model + ' & it\'s price is '+ this.price)
//     }
// }

// const m = {
//   model: 2019,
//   price: 3000000,
//   print: () => {
//     console.log(
//       "M model is: " + this.model + " & it's price is " + this.price
//     );
//   },
// };

// class Car {
//     name;
//     price;
//     model;
//     available = true;
//     constructor (carName = 'Car Name', price = 100000, model = 2015) {
//         this.name = carName;
//         this.price = price;
//         this.model = model;
//     }

//     print() {
//         console.log('Is Available :' + this.available)
//         console.log(this.name + ' model is: ' + this.model + ' and it\'s price is ' + this.price)
//     }

// }

// const BMW = new Car()

// const Toyota = new Car('Toyota', 500000, 2021)

// const lancer = new Car('Lancer', 150000, 2018)

// console.log(BMW)
// BMW.print()
// console.log(Toyota)
// Toyota.print();
// console.log(lancer)
// lancer.print();

// ****************************************************** //
// ********************** PROMISE *********************** //
// ****************************************************** //
// JavaScript Promises

// const connect = new Promise((resolve, reject) => {
//     if success call resolve | resolve()
//     if error call reject | reject()
// })

// // ///////////////////////////

// connect
// .then(function (result) {
// })
// .catch(function (err) {
//     console.log(err)
// })

// const connect = new Promise((resolve, reject) => {
//     const result = false;
//     setTimeout(() => {
//         if (result) {
//             resolve(result)
//         } else {
//             reject('Connection Failed')
//         }
//     }, 1000);
// })

// // ///////////////////////////

// connect
// .then(function (final) {
//     console.log(final)
// })
// .catch(function (reason) {
//     console.log(reason)
// })

// function FETCH(url) {
//     return new Promise((resolve, reject) => {
//         let success = true // connect to that url and get data
//         const data = [
//             {
//             id: 1,
//             title: 'Todo 1',
//             completed: false
//         },
//             {
//             id: 1,
//             title: 'Todo 1',
//             completed: false
//         },
//             {
//             id: 1,
//             title: 'Todo 1',
//             completed: false
//         },
//             {
//             id: 1,
//             title: 'Todo 1',
//             completed: false
//         },
//         ]

//         setTimeout(() => {
//             if (success) {
//               resolve(data);
//             } else {
//               reject("Bad Connection");
//             }
//         }, 1000)

//         // if (success) {
//         //   resolve(data);
//         // } else {
//         //   reject("Bad Connection");
//         // }

//     })
// }

// FETCH('http://www.todos.com/todos').then(function (data) {
//     console.log(data)
// }).catch(function (error) {
//     console.log(error)
// })

// ****************************************************** //
// ********************** SYMBOL ************************ //
// ****************************************************** //

// const users = [
//     {
//         id: 1,
//         name: 'ibrahem',
//         age: 30,
//         salary: 20000
//     },
//     {
//         id: 2,
//         name: 'ibrahem',
//         age: 25,
//         salary: 15000
//     },
//     {
//         id: 3,
//         name: 'ahmed',
//         age: 30,
//         salary: 20000
//     },
//     {
//         id: 3,
//         name: 'mohammed',
//         age: 30,
//         salary: 20000
//     },
// ]

// // get user with name ibrahem and his age is 25

// const user = users.find((user) => user.id === 2);
// console.log(user)

// const id1 = Symbol('ahmed')
// const id2 = Symbol('2')

// const name = String('ahmed')

// console.log(id1, id2)
// console.log(typeof id1)

// const users = [
//     {
//         id: id1,
//         name:"ibrahem",
//         age: 30
//     },
//     {
//         id: id2,
//         name:"ibrahem",
//         age: 25
//     },
// ]

// const user = users.find((user) => user.id == id2)
// console.log(user)

// const Pasta = Symbol('Pasta')
// const MacDonald = Symbol('MacDonald')
// const Drinks = Symbol('Drinks')

// const products = [
//   {
//     flag: Pasta,
//     type: "food",
//     name: "pasta",
//   },
//   {
//     flag: Pasta,
//     type: "food",
//     name: "pasta 2",
//   },
//   {
//     flag: Pasta,
//     type: "food",
//     name: "pasta 3",
//   },
//   {
//     flag: Pasta,
//     type: "food",
//     name: "pasta 4",
//   },
//   {
//     flag: MacDonald,
//     type: "food",
//     name: "macDonald 1",
//   },
//   {
//     flag: MacDonald,
//     type: "food",
//     name: "macDonald 2",
//   },
//   {
//     flag: MacDonald,
//     type: "food",
//     name: "macDonald 3",
//   },
//   {
//     flag: Drinks,
//     type: "drinks",
//     name: "Cola",
//   },
//   {
//     flag: Drinks,
//     type: "drinks",
//     name: "SevenUp",
//   },
//   {
//     flag: Drinks,
//     type: "drinks",
//     name: "redB",
//   },
// ];

// const pasta = products.filter((p) => p.flag == MacDonald);
// console.log(pasta)

// JavaScript Symbol
// string
// number
// boolean
// object
// Symbol

// ****************************************************** //
// ************* FUNCTION REST PARAMETERS *************** //
// ****************************************************** //
// Function Rest Parameter

// function print(p1, p2, ...params) {
//     console.log('First Paramter: ' + p1)
//     console.log('Second Paramter: ' + p2)
//     console.log(params)
// }

// print(1, 2, 3, 'ahmed', 5, true)

// printList(1,2,3,4, 5, 6, 7, 8, 9, 'ahmed', true, 'mohammed', 245)

// function printList(p1, p2, ...rest) {
//     console.log('First Parameter: ' + p1)
//     console.log('Second Parameter: ' + p2)
//     console.log(Array.isArray(rest))
// }

// ****************************************************** //
// ******************* ARRAY METHODS ******************** //
// ****************************************************** //

const items = [1, 2, 3, 4, 5, 6, 7, 8];

const num = items[4];

// console.log(0 == "");
// console.log(0 === "");


// const obj1 = { name: "Mario", age: 43 };
// const obj2 = { name: "Mario", age: 43 };

// console.log(obj1 === obj2)

// console.log({ name: "Mario", age: 43 } == { name: "Mario", age: 43 });

// console.log(items.indexOf(5));
// console.log(num);

const objItems = [
    { name: "ahmed", age: 20 },
    { name: "mohammed", age: 25 },
    { name: "Mario", age: 43 },
    { name: "ziad", age: 29 },
];

console.log(objItems.indexOf({ name: "Mario", age: 43 }));


// Array.find()

const item = objItems.find((item) => {
    return item.age == 43
})

console.log(item)


// Array.findIndex()
const itemIndex = objItems.findIndex((item) => {
    return item.age == 43
})

console.log(itemIndex)

// Array.filter()
const filteredItems = objItems.filter(item => item.age < 40)
console.log(filteredItems)
console.log(objItems)

// ADDITIONAL THINGS
// setTimeout

// setTimeout( function () {
//     console.log('This Is Me After 1 Sec')
// },  1000)

// console.log('Hello')

// setInterval
// let counter = 0;
// const interval = setInterval(() => {
//     counter++
//     console.log('This Is Me After ' + counter+ ' Sec')
//     console.log('=======================')

//     if (counter == 5) {
//         clearInterval(interval)
//     }
// }, 1000);
