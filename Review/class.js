// this is a revision of class and object

/* 
Class -> Object

Instance Properties: what they have
-name
-age
-height

Instance Methods:
-talk
-run
-jump

**/

// the basic

class Rectangle {
  // Setup object
  constructor(_width, _height, _color) {
    console.log('The Rectangle is bening created');

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  // Methods
  getArea() {
    return this.width * this.height;
  }

  printDescription() {
    return `I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`;
  }
}

let myRectangle1 = new Rectangle(5, 3, 'blue');
let myRectangle2 = new Rectangle(10, 5, 'red');
let myRectangle3 = new Rectangle(3, 6, 'yellow');

console.log(myRectangle1);
console.log(myRectangle2.getArea());
console.log(myRectangle3.printDescription());

// getter and setter methods

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
    this.count = 0;
  }

  get area() {
    this.count++;
    return this.width * this.height;
  }

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }
}

let square1 = new Square(4);
// console.log(square1.area);

square1.area = 25;
// console.log(square1.width);
// console.log(square1.height);

// method for request count
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);

console.log(square1.count);

// Classes Static Methods
class SquareS {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDiemnsions(width, height) {
    return width === height;
  }
}

let squareOne = new SquareS(8);
let squareTwo = new SquareS(9);
console.log(squareOne);

console.log(SquareS.equals(squareOne, squareTwo));
console.log(SquareS.isValidDiemnsions(squareOne, squareTwo));

// Inheritance & Extends

// Parent and Child Class

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    return `I am ${this.name} and ${this.age} years old`;
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age);

    // Custom behaviour
    this._yearsOfExperience = _yearsOfExperience;
  }

  code() {
    return `${this.name} is coding`;
  }
}

const programmers = [
  new Programmer('Alex', 40, 5),
  new Programmer('Ryan', 30, 2),
];

// let person1 = new Person('Ryan', 30);
// let programmer1 = new Programmer('Alex', 40, 5);

// console.log(person1);
// console.log(programmer1);

function developSoftware(programmers) {
  // Develop software
  for (let programmer of programmers) {
    return programmer.code();
  }
  // return programmers.map((e) => e.code());
}

console.log(developSoftware(programmers));

// Polymorphism

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return `Generic Animal Sounds!`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    // super.makeSound();
    return 'woof! woof!';
  }
}

const a1 = new Animal('Dom');
const a2 = new Dog('Jeff');

console.log(a1.makeSound());
console.log(a2.makeSound());
