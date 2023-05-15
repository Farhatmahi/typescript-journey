// // arrow function

// const createArrayOld = (param: string): string[] => {
//   return [param];
// };

// const createArray = <T>(param: T): T[] => {
//   return [param];
// };

// const result = createArray<string>("Farhat");
// const result2 = createArray<boolean>(true);
// const result3 = createArray<{ name: string; wife: string }>({
//   name: "Farhat",
//   wife: "Sana",
// });

// const createTupleArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };

// const newResult1 = createTupleArray<string, number>("Farhat", 22);
// const newResult2 = createTupleArray<string, Array<string>>("Sana", ["21"]);

// const addMyDataInMyCrush = <T>(param: T) => {
//   const crush = "Sana Zain Rahman";
//   const newData = { ...param, crush };
//   return newData;
// };

// const myInfo = {
//   name: "Farhat",
//   age: 22,
//   salary: 15000,
// };

// const resultAddMyDataInMyCrush = addMyDataInMyCrush(myInfo);
