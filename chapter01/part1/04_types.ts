// object表示一个js对象
let a1: object
a1 = {};
a1 = function () { }
// {} 用来指定对象中可以包含哪些属性
// 语法: {属性名:属性值}
let b1: { name: string, age?: number };
b1 = { name: 'hahaha' }
b1 = { name: 'hahaha', age: 16 }

// [propName: string]: any 表示任意类型的属性
let c1: { name: string, [propName: string]: any }
c1 = { name: 'hahaha', a: 1, b: 2 }

/*
* 设置函数的类型声明
* 语法: (形参:类型) => 返回值
*/
let d1: (a: number, b: number) => number;
d1 = function (n1, n2): number {
  return n1 + n2
}
/* 
   数组的类型说明
   类型[]
   Array<类型>
*/
// string[] 表示字符串数组
let e1: string[];
e1 = ['a', 'b', 'c']

// number[] 表示数值数组
let f1: number[]
let g1: Array<number>


/* 
  元组 元组就是固定长度的数组
*/
let h1: [string, string]
h1 = ['hello', 'abc']

/* 
  enum 枚举
*/
enum Gender {
  Male = 0,
  Female = 1
}
let i1: { name: string, gender: Gender }
i1 = {
  name: '哈哈哈',
  gender: Gender.Female
}
// &
let j1: { name: string } & { age: number }
j1 = { name: '哈哈哈', age: 2 }
// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k1: myType