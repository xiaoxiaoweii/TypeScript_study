// !数组
// const numberArr: number[] = [1, 2, 3]
const numberArr = [1, 2, 3];
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined, undefined];
// type alias 类型别名
type User = { name: string; age: number };
class Teacher {
  name: string;
  age: number;
}
/* const objectArr: {name: string, age: number}[] = [{
  name: 'xiaoxiaoweii',
  age: 28
}] */
/* const objectArr: User[] = [
  {
    name: 'xiaoxiaoweii',
    age: 28,
  }
]; */

const objectArr: Teacher[] = [
  new Teacher(),
  {
    name: 'xiaoxiaoweii',
    age: 28,
  },
];

// !元组 tuple

// const teacherInfo: (number | string)[] = ['xiaoxiaoweii', 'male', 18];

const teacherInfo: [string, string, number] = ['xiaoxiaoweii', 'male', 18];

// csv
const userList: [string, string, number][] = [
  ['xiaoxiaoweii', 'male', 22],
  ['sun', 'female', 22],
  ['jeny', 'female', 11],
];
