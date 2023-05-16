type a1 = number;
type a3 = undefined;
type a4 = number;

// if a1 is string, a2 will be string, otherwise it will be null
type a2 = a1 extends string ? string : null;

type d = a1 extends null
  ? null
  : a3 extends number
  ? number
  : a4 extends null
  ? null
  : never;

type Sheikh = {
  wife1: string;
  wife2: string;
  wife3: string;
};

type A = keyof Sheikh; // wife1 | wife2

type checkProperty<T, K> = K extends keyof Sheikh ? true : false;
//check korbe if sheikh type has wife1 property
type checkWife1 = checkProperty<Sheikh, "wife1">;

type Bandhubi = "Monika" | "Rachel" | "Pheobe";
type RemoveBandhubi<T, K> = T extends K ? never : T;
type CurrentBandhubi = RemoveBandhubi<Bandhubi, 'Pheobe'>
