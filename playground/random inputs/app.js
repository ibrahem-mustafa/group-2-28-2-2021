// creat function to print user name, age and availability to work
// function will take 3 parameters (string, number, boolean)
// parameters will be random (name, age, av) || (age, av, name) || (av, age, name)
// result must be in form of (Hello {name}, Your Age Is {age}, av ? {You Are Available For Hire} : {You Are Not Available For Hire})

print("ahmed", 30, true);
print(39, true, "mohammed");
print(false, "mario", 23);

// function print(a, b, c) {
//     let name,age,av;

//     if (typeof a === 'string') {
//         name = a
//     } else if (typeof a === 'number') {
//         age = a
//     } else if (typeof a === 'boolean') {
//         av = a;
//     }
//     if (typeof b === 'string') {
//         name = b
//     } else if (typeof b === 'number') {
//         age = b
//     } else if (typeof b === 'boolean') {
//         av = b;
//     }

//     if (typeof c === 'string') {
//         name = c
//     } else if (typeof c === 'number') {
//         age = c
//     } else if (typeof c === 'boolean') {
//         av = c;
//     }

//     console.log(
//       "Hello " + name + " , Your Age Is " + age + (av
//         ? ", You Are Available For Hire"
//         : ", You Are Not Available For Hire")
//     );
// }

// function print(a, b, c) {
//   let name, age, av;

//   switch (typeof a) {
//     case "string":
//       name = a;
//       break;
//     case "number":
//       age = a;
//       break;
//     case "boolean":
//       av = a;
//       break;
//   }

//   switch (typeof b) {
//     case "string":
//       name = b;
//       break;
//     case "number":
//       age = b;
//       break;
//     case "boolean":
//       av = b;
//       break;
//   }

//   switch (typeof c) {
//     case "string":
//       name = c;
//       break;
//     case "number":
//       age = c;
//       break;
//     case "boolean":
//       av = c;
//       break;
//   }

//   console.log(
//     "Hello " +
//       name +
//       " , Your Age Is " +
//       age +
//       (av ? ", You Are Available For Hire" : ", You Are Not Available For Hire")
//   );
// }
function print(...params) {
  let name, age, av;

  params.forEach((p) => {
    switch (typeof p) {
      case "string":
        name = p;
        break;
      case "number":
        age = p;
        break;
      case "boolean":
        av = p;
        break;
    }
  });

  console.log(
    "Hello " +
      name +
      " , Your Age Is " +
      age +
      (av ? ", You Are Available For Hire" : ", You Are Not Available For Hire")
  );

  console.log(
    `Hello ${name}, Your Age Is ${age}, 
    ${av ? 
        ", You Are Available For Hire" : 
        ", You Are Not Available For Hire"}`
  );
}
