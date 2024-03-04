import EventEmitter from 'eventemitter3';
// ========== 手動指定 this 型別 ==========
// 有時候，TypeScript 無法自動推斷 this 的型別，這時候可以手動指定 this 的型別
// 放在函式參數的最前面，使用 this: 型別，這樣就可以在函式內部使用 this 了，
// 不會影響原本函數的參數。

class MyClass extends EventEmitter {
  name: string = 'hank';
  constructor() {
    super();
  }
  init() {
    this.emit('init', 123);
  }
}

const myClassOk = new MyClass();
myClassOk.on('init', function (this: MyClass, num: number) {
  // 手動指定 this 型別，不影響 arguments
  // arguments 不會包含 this 參數
  console.log('myClassOk init', arguments); // Arguments { 0: 123, … }
  console.log(this.name); // hank
  console.log(num); // 123
});
myClassOk.init();

const myClassError = new MyClass();
myClassError.on('init', function (num: number) {
  // arguments 不會包含 this 參數
  console.log('myClassError init', arguments); // Arguments { 0: 123, … }
  // console.log(this.name); // Error: 'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
  console.log(num); // 123
});
myClassError.init();
