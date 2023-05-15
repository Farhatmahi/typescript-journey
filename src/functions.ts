// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// add(2, 3);

// const addArrow = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// const arr2 = [1, 2, 3, 4, 5];

// const newArr = arr2.map((element: number) => element * element);

// const person2: {
//   name: string;
//   balance: number;
//   addBalance(money: number): string;
// } = {
//   name: "Farhat Omar Mahi",
//   balance: 5,
//   addBalance(money: number) {
//     return `My new balance is ${this.balance + money}`;
//   },
// };

// //default parameter
// function addNumbers(num1: number, num2: number = 20): number {
//   return num1 + num2;
// }
// addNumbers(10);

// const myFriends = ["Chandler", "Joey", "Ross"];
// const newFriends = ["Monica", "Rachel"];

// myFriends.push(...newFriends);
// // console.log(myFriends);

// const greetFriends = (...friends: string[]): void => {
//   friends.forEach((friend) => console.log(`Hi ${friend}`));
// };

// // greetFriends(...myFriends)

// type OperationType = (num1: number, num2: number) => number;
// const calculate = (num1: number, num2: number, operation: OperationType) => {
//   return operation(num1, num2);
// };

// calculate(10, 20, (x, y) => x + y);
// calculate(10, 20, (x, y) => x - y);
// calculate(10, 20, (x, y) => x * y);