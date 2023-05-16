// class ParentClass {
//   constructor(
//     public name: string,
//     public age: number,
//     public address: string
//   ) {}

//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours}`;
//   }
// }

// class Student extends ParentClass {
//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//   }
// }

// const student1 = new Student("Farhat Omar", 22, "Bayezid");
// console.log(student1);

// class Teacher extends ParentClass {
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     this.designation = designation;
//   }

//   takeClasses(classes: number) {
//     return `This ${this.name} will take ${classes}`;
//   }
// }

// const teacher1 = new Teacher(
//   "Sana",
//   22,
//   "Bhuiyan Goli",
//   "Hot Substitute Teacher"
// );
// console.log(teacher1);
