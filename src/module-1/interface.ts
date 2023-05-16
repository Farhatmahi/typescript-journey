// //type should be used in primitive type
// type User = {
//   name: string;
//   age: number;
// };

// //intersection
// type ExtendedUser = User & {
//   role: string;
// };

// //interface should be used in object type
// interface IUser {
//   name: string;
//   age: number;
// }

// //interface can be extended
// interface IExtendedUser extends IUser {
//   role: string;
// }

// // const userWithTypeAlias : User = {
// //     name : "Farhat",
// //     age : 22
// // }

// // const userWithInterface : IUser = {
// //     name : "Sana",
// //     age : 22
// // }

// const User: IExtendedUser = {
//   name: "Alan Shopon",
//   age: 40,
//   role: "Villain",
// };

// type addNumbersType = (num1: number, num2: number) => number;
// interface IAddNumbers {
//   (num1: number, num2: number): number;
// }

// const addNumber: addNumbersType = (num1, num2) => num1 + num2;
// const addNumber2: IAddNumbers = (num1, num2) => num1 + num2;
