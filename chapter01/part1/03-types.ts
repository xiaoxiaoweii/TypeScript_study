// 直接使用字面量进行类型声明 不能修改
let a: 10;
a = 10;

// 可以使用竖线连接多个类型
let b: 'male' | "female";
b = 'male'
b = 'female'

let c: boolean | string;
c = true;
c = 'hello'

// any表示的是任意类型 一个变量设置类型为any后相当于对该变量关闭了ts的类型检测
// 使用ts不建议使用any
let d: any
d = 10;
d = 'hello'
d = true

// 声明变量如果不指定类型 则ts解析器会自动判断变量的类型为any(隐式的any)
let e
e = 20
e = true

// unknown 未知类型的值
let f: unknown
f = 10;
f = true

// 将any类型的值赋值给其他指定类型的值 不会报错
let g: string
g = d
// 将unknown类型的值赋值给其他类型的值 会报错 
// g = f
// unknown 类型的变量 实际上就是一个类型安全的any

// 类型判断
if (typeof f === 'string') {
  g = f
}
// 类型断言 用来告诉解析器变量的实际类型
g = f as string // 写法1
g = <string>f  // 写法2

// void 用来表示空 以函数为例 就表示没有返回值的函数
function fn(): void{
  console.log('hahaha')
}

// never 表示永远没有返回结果
function fn2(): never{
  throw new Error('报错了')
}