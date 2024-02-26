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

export {};
