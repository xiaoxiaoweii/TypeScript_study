// type annotation 类型注解 告诉TS变量是什么类型
let countss: number;
countss = 123;

// type inference 类型推断 TS自动尝试分析变量的类型
// 如果TS能够自动分析变量类型 我们就不用做什么
// 如果TS无法分析变量类型的话 就需要使用类型注解

let countInfer = 123;

function getTotals(first: number,second: number) {
  return first + second;
}

const total = getTotals(1, 2)

const obj = { name: 'xiaoxiaoweii', age: 18 }