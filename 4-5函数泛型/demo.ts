/* function join(first: string | number, second: string | number) {
  return `${first}${second}`
}

join('1', 1) */

/* 泛型 generic 泛指的类型 */
/* function join<T>(first: T, second: T) {
  return `${first}${second}`
}

join<string>('1', '1')
join<number>(1,1) */

/* function map<ABC>(params: ABC[]) {
  return params
} */
/* function map<T>(params: Array<T>) {
  return params
}

map<string>(["123"]) */

function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}

join<number, string>(1, '1')
join('1', 1)