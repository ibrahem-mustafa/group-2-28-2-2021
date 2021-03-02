// includes (string & array)
// const text = 'ahmed went to his school'
// console.log(text.includes('ahmed'))

// const array = [1, 2, 3, 4, 5, 6];
// console.log(array.includes(0))
// *********** EXAMPLE
// get element from dom (Document Object Model || document.*)
// get element Classes
// check if that element have a spec class
// *********** END EXAMPLE

// trim
// const email = ' ahmed@gmail.com '
// console.log(email)
// console.log(email.trim())

// *********** EXAMPLE
// const email = ''

// if (email.trim()) {
//     console.log('Email Is Found')
// } else {
//     console.log('Email Not Found')
// }
// *********** END EXAMPLE

// substr
const username = "ibrahem mustafa";
// console.log(username.substr(0, 7))

// *********** EXAMPLE
const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const p = document.querySelector("#main");
p.textContent = paragraph.substr(0, 5);
// *********** END EXAMPLE

// repeat
const str = "ha";
// console.log(str.repeat(10))

// replace
const name = "ibrahem ib mustafa";
// console.log(name.replace('ib', 'IB'))

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// every

const arr = [1, 1, 1, 1, 1, 1, 1];
// console.log(arr.every((num) => num === 1))

// *********** EXAMPLE
const usersAges = [21, 20, 30, 29, 17];
const allU18 = usersAges.every((num) => num >= 18);
// console.log(allU18)
// *********** END EXAMPLE

// some
const usersAges2 = [21, 20, 30, 29, 17];
// console.log(usersAges2.some((num) => num >= 18));

// reduce
const employeesSalary = [1500, 2000, 16000, 150000];
// S1 :: prev = 1500, current = 2000
// S2 :: prev = 3500, current = 16000
// S3 :: prev = 19500, current = 150000
// final :: 169500

const sum = employeesSalary.reduce((prev, current) => {
  //   console.log(prev);
  return prev + current;
});
// console.log(sum);

const employees = [
  { name: "ahmed", salary: 2000 },
  { name: "mario", salary: 15000 },
  { name: "mohammed", salary: 6000 },
  { name: "ali", salary: 1200 },
];

const sum2 = employees.reduce((prev, current) => {
  //   console.log(prev);
  //   console.log(current);
  //   console.log(prev + current.salary);
  //   console.log("====================");
  return prev + current.salary;
}, 0);

// console.log(sum2);

// map

// let initArray = new Array(20).fill(null).map((num, index) => index);
// console.log(initArray);
let initArray = new Array(3).fill(1);
//   0     1      2
// [1, 1, 1]
// console.log(initArray);

const newArray = [];
for (let i = 0; i < initArray.length; i++) {
  newArray.push({
    number: initArray[i],
    index: i,
  });
}

// console.log(newArray)

const newArrayWithForEach = [];
initArray.forEach((item, index) => {
  newArrayWithForEach.push({
    number: item,
    index: index,
  });
});
// console.log(newArrayWithForEach)

// |-----|
// |     | =>  ()
// |-----|

const newArrayWithMap = initArray.map((item, index) => ({
  number: item,
  index: index,
}));
// console.log(newArrayWithMap)

// concat
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14];

// const concatedArray = arr1.concat(arr2)
// console.log(concatedArray)
// const concatedArray2 = concatedArray.concat(arr3);
// console.log(concatedArray2)

const concatedArray = arr1.concat(
  arr2,
  arr3,
  [true, false],
  ["string 1", "string 2"]
);
// console.log(concatedArray)

// splice vs slice
const names = ["ahmed", "ziad", "magdy", "michael", "ali"];

const namesArrayWithSlice = names.slice();

namesArrayWithSlice.push("bla bla bla");

// console.log(names)
// console.log(namesArrayWithSlice);

const namesArrayWithSplice = names.splice(0, 3);
// console.log(names)
// console.log(namesArrayWithSplice);

// spread operator (...)

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const finalArray = [...array1, true, false, ...array2];

// console.log(finalArray)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

const user = {
  name: "ahmed",
  age: 30,
};

// Object.keys
// Object.values

const keys = Object.keys(user);
// console.log(keys)

const values = Object.values(user);
// console.log(values)

const styles = {
  color: "red",
  padding: "10px",
  margin: "10px",
  backgroundColor: "green",
};

// function setStyles(styles) {
//     const keys = Object.keys(styles);
//     keys.forEach(key => {
//         console.log('set ' + key + ' with value :' + styles[key])
//     })
// }

// setStyles(styles)

// attributes = [ ['class',  'main test bla '], ['id', 'mainH1], ['style', 'color: red; font-size: 60px'] ]

const attributes = {
  class: "main test bla ",
  id: "mainH1",
  style: "color: red; font-size: 60px",
};

const h1 = document.querySelector("h1");

function setAttributes(attributes) {
  const attributeList = Object.keys(attributes);
  attributeList.forEach((attribute) =>
    h1.setAttribute(attribute, attributes[attribute])
  );
}

setAttributes(attributes);

// Object.entries
const objToArray = Object.entries(attributes);
console.log(objToArray);

// spread operator
const obj1 = {
  name: "ahmed",
  salary: 3000,
  age: 30,
};

const obj2 = {
  ...obj1,
  age: 26,
  name: "Mohammed",
};

/** 
 * {
 *  name: "ahmed", (remove)
    salary: 3000,
    age: 30, (remove)
    age: 26 (new value)
    name: 'Mohammed' (new Value)
 * }
 * 
 * **/

console.log(obj2);

// async function and await

// const ok1 = new Promise((resolve, reject) => {
//   const result = false;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 1");
//     } else {
//       reject("OK 1 Failed");
//     }
//   }, 1000);
// });

// const ok2 = new Promise((resolve, reject) => {
//   const result = true;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 2");
//     } else {
//       reject("OK 2 Failed");
//     }
//   }, 500);
// });

// const ok3 = new Promise((resolve, reject) => {
//   const result = true;
//   setTimeout(() => {
//     if (result) {
//       resolve("OK 3");
//     } else {
//       reject("OK 3 Failed");
//     }
//   }, 300);
// });


// ok1.then(result => {
//     console.log(result);
    

//     ok2.then(ok2Result => {
//         console.log(ok2Result);
        

//         ok3.then(ok3Result => {
//             console.log(ok3Result);
            

//         }).catch(err => console.log(err))
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))

// try {

// } catch (err) {

// }

async function executePromises() {
    try {
        const ok1Result = await ok1;
        console.log(ok1Result);
        const ok2Result = await ok2;
        console.log(ok2Result);
        const ok3Result = await ok3;
        console.log(ok3Result);
    } catch(err) {
        console.log(err)
    }
    
}
// executePromises()

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));


async function fetchTodos() {
   try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        console.log(response);
        const data = await response.json();

        console.log(data);
   } catch(err) {
       console.log(err)
   }
}

fetchTodos()




