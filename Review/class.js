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
