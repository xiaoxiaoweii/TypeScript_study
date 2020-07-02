/* interface Person {
  name: string;
  age: number;
} */

interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}

interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string
}
/* type Person1 = {
  name: string;
};
type Person2 = string; */
/* const getPersonName = (person: { name: string }) => {
  console.log(person.name);
}

const setPersonName = (person: { name: string },name: string) => {
  person.name = name;
} */

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Person, name: string): void => {
  person.name = name;
};

const getPersonName1 = (person: Teacher): void => {
  console.log(person.name);
};

const setPersonName1 = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'xiaoxiaoweii',
  age: 28,
  sex: 'male',
  say() {
    return 'say Hello';
  },
};

getPersonName(person);
setPersonName(person, person.name);

class Users implements Person {
  name = '晓晓';
  say()  {
    return 'hello';
  }
}
const teacher1 = {
  name: 'xiaoxiaoweii',
  age: 28,
  sex: 'male',
  say() {
    return 'say Hello';
  },
  teach() {
    return 'sss'
  }
};

getPersonName1(teacher1);
setPersonName1(teacher1, teacher1.name);

const say: SayHi = (word: string) => {
  return word;
}
