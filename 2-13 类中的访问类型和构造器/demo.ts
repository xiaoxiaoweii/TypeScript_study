// // private protected public 访问类型
// /* class Person {
//   name: string;
//   sayHi() {
//     console.log('hi');
//   }
// } */
// /* class Person {
//   public name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
// } */
// /* class Person {
//   private name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
// } */
// class Person {
//   private name: string;
//   public sayHi() {
//     this.name;
//     console.log('hi');
//   }
// }
// /* const person = new Person();
// person.name = 'xiaoxiaoweii';
// console.log(person.name);
// person.sayHi(); */

// const person = new Person();
// /* person.name = 'xiaoxiaoweii';
// console.log(person.name); */
// person.sayHi();

// constructor
/* class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
} */
// class Person {
//   // private name: string;
//   constructor(public name: string) {
//     /* this.name = name; */
//   }
// }
// const person = new Person('xiaoxiaoweii')
// console.log(Person.name);

class Person {
  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super('xiaoxiaoweii');
  }
}
const teacher = new Teacher(28)
console.log(teacher.age)
console.log(teacher.name)