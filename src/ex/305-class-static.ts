// ts 的 static 修飾子 (可被共用)
// 加了 static 的變數或方法不用 new 就可使用

class Bank {
  private static balance: number = 2000;
  // 注意：只有 static 方法才可以呼叫 static 變數
  static getBalence() {
    return this.balance;
  }

  static setBalence(balance: number) {
    this.balance = balance;
  }
}
Bank.setBalence(999);
console.log(Bank.getBalence());

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

// ========= readonly ==========
// 只讀屬性關鍵字，只允許出現在屬性宣告或索引簽名中。
class Animal {
  readonly name;
  public constructor(name: string) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
// a.name = 'Tom';
// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.

// 注意如果 readonly 和其他訪問修飾符同時存在的話，需要寫在其後面。
class Animal2 {
  public readonly name;
  public constructor(name: string) {
    this.name = name;
  }
}
export {};
