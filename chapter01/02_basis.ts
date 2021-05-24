let a: number = 1
let c: boolean = true
let b: string = '1'
let d = true

// js中的函数是不考虑参数的类型和个数的
function sum(a: number,b: number): number {
    return a + b
}

let result =  sum(111,222)