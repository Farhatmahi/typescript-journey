// class Person {
//   takeNap(): void {
//     console.log("I sleep for 8 hours everyday");
//   }
// }

// class Student extends Person {
//   takeNap(): void {
//     console.log("I slee for 6 hour everyday");
//   }
// }

// class Developer extends Person {
//   takeNap(): void {
//     console.log("I sleep for 7 hours everyday");
//   }
// }

// function getNap(param: Person) {
//   param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();
// getNap(person1);
// getNap(person2);
// getNap(person3);



// //example 2

// class Shape {
//   getArea(): number {
//     return 0;
//   }
// }

// class Circle extends Shape {
//   radius: number;
//   constructor(radius: number) {
//     super();
//     this.radius = radius;
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;
//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// function getAreaOfShape(param : Shape){
//     console.log(param.getArea())
// }

// getAreaOfShape(new Circle(10))
// getAreaOfShape(new Rectangle(10, 5))