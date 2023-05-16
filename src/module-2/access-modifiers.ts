// class BankAccount {
//   constructor(
//     public id: number,
//     public name: string,
//     protected _balance: number
//   ) {}

//   getBalance(): void {
//     console.log(`My current balance is ${this._balance}`);
//   }

//   addMoney(amount: number) {
//     this._balance += amount;
//   }
// }

// const myAccount = new BankAccount(444, "Persian", 20000);
// console.log(myAccount);

// class StudentAccount extends BankAccount {
//   constructor(public id: number, public name: string, protected _balance: number) {
//     super(id, name, _balance);
//   }
// }
