//1

const userInfo: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

// console.log(userInfo)

//2
const commonNumbers = (arr1: number[], arr2: number[]): number[] => {
  const newArr: number[] = [];

  for (const x of arr1) {
    if (arr2.includes(x)) {
      newArr.push(x);
    }
  }

  return newArr;
};

// console.log(commonNumbers([1, 2, 3, 4], [2, 3, 4, 5]));

//3

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

const filterProducts = <T, K extends keyof T>(
  products: T[],
  criterion: K,
  value: T[K]
) => {
  return products.filter((product) => product[criterion] === value);
};

//4

type ProductsTuple = {
  name: string;
  price: number;
  quantity: number;
};

const calculate = <T extends ProductsTuple>(products: T[]): number => {
  let totalCost = 0;
  products.forEach((product) => {
    totalCost += product.price * product.quantity;
  });
  return totalCost;
};

console.log(
  calculate([
    { name: "Apple", price: 1.99, quantity: 10 },
    { name: "Banana", price: 0.99, quantity: 5 },
    { name: "Orange", price: 2.49, quantity: 8 },
    { name: "Mango", price: 3.99, quantity: 12 },
  ])
);
