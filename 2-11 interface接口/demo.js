/* interface Person {
  name: string;
  age: number;
} */
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
var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName = function (person, name) {
    person.name = name;
};
var getPersonName1 = function (person) {
    console.log(person.name);
};
var setPersonName1 = function (person, name) {
    person.name = name;
};
var person = {
    name: 'xiaoxiaoweii',
    age: 28,
    sex: 'male',
    say: function () {
        return 'say Hello';
    }
};
getPersonName(person);
setPersonName(person, person.name);
var Users = /** @class */ (function () {
    function Users() {
        this.name = '晓晓';
    }
    Users.prototype.say = function () {
        return 'hello';
    };
    return Users;
}());
var teacher1 = {
    name: 'xiaoxiaoweii',
    age: 28,
    sex: 'male',
    say: function () {
        return 'say Hello';
    },
    teach: function () {
        return 'sss';
    }
};
getPersonName1(teacher1);
setPersonName1(teacher1, teacher1.name);
