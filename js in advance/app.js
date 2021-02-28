
// Var

// var firstName  = 'ahmed'


// Function

// function getUserData() {
//     return {
//       name: "ahmed",
//       age: 25,
//       salary: 2000,
//     };
// }

// function analysis() {
//     var userData = getUserData();// get user
//     var userOrders = []
    
// }

// var sayHi = function () {}

// var fun = () => {
//     console.log('hi')
// }


// (function sayHi() {})()


// Every Thing Is An Object 1
// var profile = {
//     name: 'ahmed',
//     age: 39,
//     email: 'ex@gmail.com',
//     phoneNumber: '0101010101010',
//     orders: [
//         {
//             orderNo: 1,
//             cost: 150
//         }
//     ]
// }

// var obj = {
//     value: "ahmed",
//     sayName: function () {
//         console.log(this.name)
//      }
// }


// console.log(obj.name);
// obj.sayName();

// var name = 'ahmed'
// console.log(name)
// function sayHi () {
//     console.log('hi')
// }


// Array
// var items = Array(20).fill(0).map((v ,i)=> v + i )

// var items = [1,2, 3, 4, 5].fill(0)

// console.log(items)

// Loops
// => for
// for (var i =0; i < items.length; i++) {
//     if (i === 10) {
//         continue
//     }
    
//     console.log(i)
// }

// console.log(items)

// => while


// var user = {
//     name: 'ahmed',
//     age: 15
    
// }


// while ( user.age < 30) {
//     console.log(user.age)
//     user.age++
// }

// => do while

// do {
//     console.log(user.age)
//     user.age++
// } while (user.age < 10)

// console.log(user.age)


// var role = 'user';

// if (age < 15) {
//     console.log('User Age Is Under Requirement')
// } else if (age > 16) {
//     console.log('Yah You Are Ok')
// } else {
//     console.log('invalid user age')
// }

// Switch

// switch (role) {
//     case 'user':
//         console.log("You Cant Access This Part Of Our Service");
//         break;
//     case 'admin':
//         console.log("You Have Valid Role");
//         break;
//     default:
//         console.log("invalid user role");
//         break;
// }



// recursive function
// send request to server and get user info (Failed)
// var requestTimes = 0;

// var result = false;
// function sendRequest() {
//     requestTimes++
    

//     if (result) {
//         console.log('Request Sended Successfully')
//     } else {
//         if (requestTimes < 3) {
//             console.log('Try To Connect No: '+ requestTimes)
//             sendRequest()
//         } else {
//             result = true
//             sendRequest();
//         }
//     }
// }
// sendRequest()

// var num = 0

// function countTo100() {
//     num++;
//     console.log(num)
//     if (num < 100) {
//         countTo100()
//     }
// }

// countTo100()

// function arguments

// function add(x, y, printResult) {
//     // console.log(x + y)
//     var finalResult = x + y;
//     if (printResult) {
//         printResult(finalResult)
//     }
// }


// add(
//     2,
//     4,
//     function (result) {

//         console.log( 'Result: ' + result )
//     }
// )

// Self Invoking

var num = 0;
(function count () {
    num ++
    console.log(num)
    if (num < 100) {
        count()
    }
})()


// (function () {
//     console.log('hi')
// })()




// this keyword
// Every Thing Is An Object 2
// HOISTING
// fetch from api
// fetch('https:www.google.com')
// API