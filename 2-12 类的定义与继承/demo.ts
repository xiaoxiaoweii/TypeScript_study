class Person {
  name = 'xiaoxiaoweii';
  getName() {
    return this.name;
  }
}
const person = new Person();
console.log(person.getName());

class Teacher extends Person {
  getTeacherName() {
    return 'xiaoxiaoweii';
  }
  getName() {
    return super.getName() + 'lee';
  }
}
const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
