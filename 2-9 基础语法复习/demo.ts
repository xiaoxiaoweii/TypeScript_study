// 基础类型 boolen number string void undfined symbol null

const cont = 123;

let cont1: number;
cont1 = 123



// 对象类型 {} Class function [] 

/* const func = (str:string): number => {
  return parseInt(str, 10)
} */
const func = (str:string) => {
  return parseInt(str, 10)
}

const func1: (str: string) => number = (str) => {
  return parseInt(str, 10)
}

const date = new Date();

// 其他的点
interface Person {
  name: 'string'
}
const rawData = '{"name": "dell"}';
const newData: Person = JSON.parse(rawData);


// -------------
let temp: number | string = 123;
temp = '456';