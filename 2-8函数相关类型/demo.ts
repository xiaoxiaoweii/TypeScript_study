// function hello() {

// }

// const hello1 = function () {

// }

// const hello2 = () => {}

function add(first: number, second: number): number {
  return first + second;
}

const totalss = add(1, 2);

/* function sayHello(): void {
  console.log('hello')
} */

function sayHello(): number {
  console.log('hello');
  return 123;
}

function errorEmtter(): never {
  throw new Error();
  console.log('hello');
}

function errorEmtter1(): never {
  while (true) {}
}

function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total3 = add1({ first: 1, second: 2 });

function getNumber({ first }: { first: number }) {
  return first;
}
const total = add1({ first: 1, second: 2 })
const count = getNumber( { first: 1 } ) 
