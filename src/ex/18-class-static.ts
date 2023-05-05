// ts 的 static 修飾子 (可被共用)
// 加了 static 的變數或方法不用 new 就可使用


class Bank {
  private static balance: number = 2000
  // 注意：只有 static 方法才可以呼叫 static 變數
  static getBalence() {
    return this.balance
  }

  static setBalence(balance: number) {
    this.balance = balance
  }
}
Bank.setBalence(999)
console.log(Bank.getBalence())

// 以上程式轉為 ES5 如下
// "use strict";
// var Bank = /** @class */ (function () {
//     function Bank() {
//     }
//     // 注意：只有 static 方法才可以呼叫 static 變數
//     Bank.getBalence = function () {
//         return this.balance;
//     };
//     Bank.setBalence = function (balance) {
//         this.balance = balance;
//     };
//     Bank.balance = 2000;
//     return Bank;
// }());
// Bank.setBalence(999);
// console.log(Bank.getBalence());

export {}