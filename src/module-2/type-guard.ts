//keyof guard

// type AlphaNeumeric = string | number;
// function add(param1: string | number, param2: string | number): AlphaNeumeric {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }

// console.log(add("1", "2"));
// console.log(add(1, 2));

//key in guard

// type User = {
//   name: string;
// };

// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// const User1: User = {
//   name: "Farhat",
// };

// const Admin1: AdminUserType = {
//   name: "Sana",
//   role: "admin",
// };

// const getUser = (user: User | AdminUserType) => {
//   if ("role" in user) {
//     return `I am admin and my role is ${user.role}`;
//   } else {
//     return `I am a normal user`;
//   }
// };

// console.log(getUser(User1))
// console.log(getUser(Admin1))

//instanceof guard

class Animals {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    console.log("I am making sound...");
  }
}

class Dog extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am barking...");
  }
}

class Cat extends Animals {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log("I am meowing...");
  }
}

function isDog(animal: Animals): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animals): animal is Cat {
  return animal instanceof Cat;
}

function getAnimal(animal: Animals) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
}

const animal1 = new Dog("German Shephard", "Dog"); //instance of Dog
const animal2 = new Cat("Persian", "Cat"); //instance of Cat
