// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// };

// type NewType = "name" | "age" | "address";
// //same thing as above
// type NewTypeUsingKeyOf = keyof PersonType;

// // const a: NewType = "name";
// // const b: NewTypeUsingKeyOf = "address";

// const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
//     obj[key]
// };

// const property = getProperty({name : "Farhat", age : 22}, "name")



// const A = {
//   name: "Mr. X",
//   age: 21,
// };
