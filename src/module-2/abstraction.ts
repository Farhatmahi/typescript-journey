//interface

// interface IVehicle {
//   name: string;
//   brand: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Car",
//   brand: "BMW",
//   model: "2000",
// };

interface IVehicle {
  startEngine(): void;
  stopEnginge(): void;
  move(): void;
}

class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {} 

  startEngine(): void {
    console.log("I am starting the engine");
  }

  stopEnginge(): void {
    console.log("I am stopping the engine");
  }

  move(): void {
    console.log("I am moving");
  }

  test() {
    console.log("I am for testing purpose");
  }
}

const vehicle1 = new Vehicle("Car", "Volkswagen", "2022");











//abstract class

// abstract class Vehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: string
//   ) {}

//   abstract startEngine(): void;
//   abstract stopEnginge(): void;
//   abstract move(): void;
// }

// class Car extends Vehicle {
//   startEngine(): void {
//     console.log("I am starting the engine");
//   }

//   stopEnginge(): void {
//     console.log("I am stopping the engine");
//   }

//   move(): void {
//     console.log("I am moving");
//   }
// }

// const car1 = new Car("Car", "Toyota", "2020");
