// class BankAccount {
//   constructor(
//     public id: number,
//     public name: string,
//     private _balance: number
//   ) {}

//   getBalance(): number {
//     console.log(`My current balance is ${this._balance}`);
//     return this._balance;
//   }

//   //getter
//   get balance(): number {
//     return this._balance;
//   }

//   addMoney(amount: number) {
//     this._balance += amount;
//   }

//   //setter
//   set deposit(amount: number) {
//     this._balance += amount;
//   }
// }

// const myAccount = new BankAccount(444, "Persian", 20000);
// // console.log(myAccount.getBalance())
// myAccount.deposit = 15000
// console.log(myAccount.balance);

// console.log(myAccount);

// // class StudentAccount extends BankAccount {
// //   constructor(public id: number, public name: string, protected _balance: number) {
// //     super(id, name, _balance);
// //   }
// // }
