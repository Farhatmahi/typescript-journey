const arrOfNum = [1, 2, 3];
const arrOfStr = arrOfNum.map((num) => num.toString());

// console.log(arrOfStr)

type Volume = {
  height: number;
  width: string;
  depth: number;
};

type AreaString = {
  height: string;
  width: string;
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  // volume['height'] = number, volume['width'] = string
  [key in keyof T]: T[key];
};

const Area1 : Area<{height : string}> = {
    height : '20'
}


const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
};

// rectangularArea.width = 10;

// type Aa = AreaNumber["height"]; //lookup types
// type Bb = keyof AreaNumber; // height | width

// const obj = {
//     name : "Farhat"
// }

// obj['name']
