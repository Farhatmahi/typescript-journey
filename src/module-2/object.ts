// // class Animal {
// //   //commenting for repititive process
// //   //   public name: string;
// //   //   public species: string;
// //   //   public sound: string;

// //   //parameter properties
// //   constructor(
// //     public name: string,
// //     public species: string,
// //     public sound: string
// //   ) {
// //     //commenting for repititive process
// //     // this.name = name;
// //     // this.species = species;
// //     // this.sound = sound;
// //   }

// //   makeSound() {
// //     console.log(`The ${this.name} says ${this.sound}`); //German Shephard says Ghew Ghews
// //   }
// // }


// //optimised code
// class Animal {
//   constructor(
//     public name: string,
//     public species: string,
//     public sound: string
//   ) {}
//   makeSound() {
//     console.log(`The ${this.name} says ${this.sound}`); 
//   }
// }

// const dog = new Animal("German Shephard", "Dog", "Ghew Ghew");
// const cat = new Animal("Hapi", "Cat", "Meow Meow");
// dog.makeSound();
// cat.makeSound();

// cat.name = "Persian";
