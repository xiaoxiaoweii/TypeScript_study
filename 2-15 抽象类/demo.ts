//  readonly
/* class Person {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const person = new Person('xiaoxiaoweii');
console.log(person.name); */

// 抽象类
/* abstract class Geo {
  width: number;
  radius: number;
  getType() {
    return 'Gemo';
  }
  abstract getArea(): number;
}

class Circle extends Geo {
  getArea() {
    return 123;
  }
}

class Square {
  getArea() {}
}

class Triangle {
  getArea() {}
} */

interface teacher {
  name: string
}
interface student {
  name: string,
  age: number
}
const teacher = {
  name: "xiaoxiaoweii"
}

const student = {
  name: 'xiaoxiao',
  age: 18
}

const getUserInfo = (user: teacher | student) => {
  console.log(user.name);
}
 
getUserInfo(teacher)
getUserInfo(student)