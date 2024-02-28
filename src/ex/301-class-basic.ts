// 物件導向的 class

class User {
  // Public class fields: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
  // 在 ts 一定要先定義 Public class fields 的 type 才能在 constructor 或 method 中使用，但在 js 中可以不定義。
  name: string;
  age: number;
  addr: string = '沒有地址'; // 除了宣告實例屬性的 type，也可直接定義實例屬性的值
  // test: string; 當 tsconfig 中 strict 或是 strictPropertyInitialization 為 true 時，會報錯，因為沒有被指定初始值或在 constructor 中初始化

  constructor(name: string, age: number, addr?: string) {
    this.name = name;
    this.age = age;
    addr && (this.addr = addr);
  }
  add() {}
  update() {}
}

const user1 = new User('Hank', 11);
const user2 = new User('Hank1', 22, '我住天龍國');
console.log('user1:', user1);
console.log('user2:', user2);

// 傳入物件的寫法

type Obj = {
  name: string;
  age: number;
  addr?: string;
};

class User2 {
  name: string;
  age: number;
  addr: string = '沒有地址';

  constructor(obj: Obj) {
    this.name = obj.name;
    this.age = obj.age;
    obj.addr && (this.addr = obj.addr);
  }
  add() {}
  update() {}
}

const user3 = new User2({
  name: 'hank3',
  age: 123,
  addr: '全家就是我家',
});
console.log('user3:', user3);

// =========== 類別的函數屬性 ===========

// 在成員名稱後面加上()的方法，將函數指派給類別的 prototype 屬性
class WithMethod {
  myMethod() {}
}
console.log(new WithMethod().myMethod === new WithMethod().myMethod); // true

// 宣告一個屬性，其值恰好是一個函數，這將為類別的每個實體建立一個新函數
class WithProperty {
  myProperty = () => {};
}

console.log(new WithProperty().myProperty === new WithProperty().myProperty); // false

// =========== 使用 ! 符號關閉嚴格的初始化檢查 ===========
// 僅管嚴格的初始化檢查，在大多數的情況下很有用，但可能會遇到一些問題，
// 也就是在類別建構函數之後，故意取消能夠指派的類別屬性，如果絕對確保一個屬性不需要套用嚴格的初始化檢查，
// 可以在屬性後面加上 ! 符號，這樣 ts 即可關閉檢查。
// 增加一個 ! 斷言並降低屬性的型別安全性，這並非一個好的方式，應考慮重構，避免這樣的斷言使用。
class ActivitiesQueue {
  // pending: string[]; // 錯誤：Property 'pending' has no initializer and is not definitely assigned in the constructor.ts(2564)
  pending!: string[]; // 正確：使用 ! 能關閉嚴格的初始化檢查

  init(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

const activities = new ActivitiesQueue();
activities.init(['hi', 'hello']);

// =========== 唯讀屬性 readonly ===========
// 注意：宣告為具有本初始數值的唯讀屬性與其它屬性相比，比較特殊。
// 若未明確的定義型別，它們可能被推斷為經過數值窄化的`字面`型別，類似 const。
class RandomQuote {
  // 型別: string
  readonly explicit: string = 'abc'; // 明確定義型別
  // 型別: 窄化為 "def" 的字面型別，並非 string
  readonly implicit = 'def'; // 未明確定義型別

  constructor() {
    if (Math.random() > 0.5) {
      this.explicit = '123'; // ok
      // this.implicit = '456' // error: Type "456" is not assignable to type '"def"'.ts(2322)
    }
  }
}

export {};
