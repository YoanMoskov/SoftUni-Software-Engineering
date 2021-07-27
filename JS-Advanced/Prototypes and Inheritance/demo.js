//Inheritance
//Всички пропъртита и методи се наследяват.

class Person {
  constructor(name, canFly) {
    this.name = name;
    this.canFly = canFly;
  }
  speak() {
    console.log(`Hello! My name is ${this.name}`);
  }
}
let firstPerson = new Person('Adam');
//extends
class Programmer extends Person {
  constructor(name) {
    //super
    super(name, true);
  }
  coding() {
    console.log(`Hello World! My name is ${this.name}`);
  }
}
let peshoProgramista = new Programmer('Pesho');
peshoProgramista.coding();
peshoProgramista.speak();

//Prototypal inheritance instead of classical inheritance
// Does not automatically create copies
// Common keys and values are shared by reference
// Delegates not blueprints!

//The Prototype Chain
//protorype is an Object

let student2 = {
  name: 'Pesho',
  hasPen: true,
  write: function () {
    console.log(`My name is ${this.name}`);
  },
};
let student1 = {
  name: 'Ivan',
};
Object.setPrototypeOf(student1, student2);

Object.getPrototypeOf(student1); //returns proto - student2

let newStudent = Object.create(student2); //copies and attaches the prototype - reference

let newStudentAssign = Object.assign(student2); //clones exactly the same object - clones all the props (uses more time/space)

console.log(student1.hasPen);
student1.write();

//Prototype
//-Constructor creation - ref to proto
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.speak = function () {
  //     console.log(`Hello my name is ${this.firstName} ${this.lastName}`); //every time that this is created it attaches speak to the instances
  //   };
}
Person.prototype.speak = function () {
  //every instance has a ref to speak
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

let personObj = new Person('Pesho', 'Georgiev');
personObj.speak();
console.log(personObj);

//__proto__ - props of Objects
//prototype - props of functions

//NEW keyword

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.speak = function () {
  //every instance has a ref to speak
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};
function createNew(constructor, ...args) {
  //NEW implementation
  //-create new obj
  let newObj = {};
  //-set prototype
  Object.setPrototypeOf(newObj, constructor.prototype);
  //-call constructor with context
  constructor.apply(newObj, args);
  //-return new obj
  return newObj;
}
let person1 = new Person('Gosho', 'Petrov');
let person2 = createNew(Person, 'Pesho', 'Georgiev');
person1.speak();
person2.speak();

//Private

Point.prototype.getX = function () {
  return this.#x;
};

Point.prototype.setX = function (x) {
  this.#x = x;
};

Point.prototype.getY = function () {
  return this.#y;
};

Point.prototype.setY = function (y) {
  this.#y = y;
};
