// let userName;

// userName = 15

// userName = 'ali';


// let isAdmin: boolean = true
// let age: number = 15

// function plus(x: number, y: number) {
//   console.log(x + y)
// }

// plus(15, 30)


// plus(5, 15)

const userName: string = 'ahmed'
const userAge: number = 30
const isAdmin: boolean = true
// const bla: any = 'ahmed'
let bla: any = 5516
bla = 'string'


// ARRAY
const numArray: number[] = [15, 20, 36]
const strArray: string[] = ['ahmed', 'ali', '15', 'true']
const anyArray: any[] = ['ahmed', 'ali', 15, true]

numArray.push(15)

// OBJECT

// const
// var
// let
// type

type USER_TYPE = {
  name: string,
  age: number,
  salary: number,
  av ?: boolean
}

const user: USER_TYPE = {
  name: "ahmed",
  age: 16,
  salary: 2000,
  av: false
};

user.av= true

const anotherUser: USER_TYPE = {
  name: "mohammed",
  age: 16,
  salary: 2000,
};


// FUNCTIONS
function plus(x: number, y: number, print ?: boolean) {

  const result = x + y;

  if (print) {
    console.log(result)
  }
}

plus (10, 20 )