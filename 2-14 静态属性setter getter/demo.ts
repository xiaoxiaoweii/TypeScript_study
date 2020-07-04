// getter setter
class Person {
  constructor(private _name: string) { }
  get name() {
    return this.name + 'xiaoxiaoweii';
  }
  set name(name: string) {
    const realName = name.split(' ')[0];
    this._name = realName;
  }
}

const person = new Person('xiaoxiaoweii');
person.name;
console.log(person.name)
person.name = 'xiaoxiaoweii xiaoxiaoweii';
console.log(person.name)
