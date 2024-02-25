// ========== function ==========

// 在 JavaScript 中，有兩種常見的定義函式的方式——函式宣告（Function Declaration）和函式表示式（Function Expression）：

// ===== 函式宣告 =====

// parameter
function add(a: number, b: string) {
  return a + b;
}

let resault = add(1, '2'); // 自動推導為 string

// 可選的參數 ?:
// 需要注意的是，可選參數必須接在必需參數後面。換句話說，可選參數後面不允許再出現必需參數了：
function setUser(name: string, age?: number) {
  // 若 age 為可選，直接使用會報錯，需先判斷 type 或是否存在

  // age.toString(); // error

  // (typeof age === 'number') && age.toString() // ok 方法1

  age?.toString(); // ok 方法2
}

// return type 指定型別
function getString(): string {
  return 'hank';
}

// return type 未指定，自動推導型別
function getNumber() {
  return 123;
}

// void: 沒有手動 return 任何值，或是沒有寫 return，預設就是 void
// 在 js 中沒有 return 任何值，將隱式返回 undefined，然而在 TS 中 void 和 undefined 是不同的。
function doSomething(): void {
  console.log('no return');
  // return undefined
  return;
}

// never: Some functions never return a value:
function doSomething2(): never {
  throw new Error('xxx error');
}

// ===== 函式表示式 =====

// 如果要我們現在寫一個對函式表示式（Function Expression）的定義，可能會寫成這樣：
let mySum1 = function (x: number, y: number): number {
  return x + y;
};
// 這是可以透過編譯的，不過事實上，上面的程式碼只對等號右側的匿名函式進行了型別定義，
// 而等號左邊的 mySum，是透過賦值操作進行型別推論而推斷出來的。
// 如果需要我們手動給 mySum 新增型別，則應該是這樣：
let mySum2: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// ** 注意 **  不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
// 在 TypeScript 的型別定義中，=> 用來表示函式的定義，左邊是輸入型別，需要用括號括起來，右邊是輸出型別。

// ===== 使用建構函式建立物件 =====

// (感覺問題很多，用 class 建立物件較好)
type PersonObj = {
  name: string;
  age: number;
};

type PersonObjConstructor = {
  new (name: string): PersonObj;
};

function createPerson(Person: PersonObjConstructor) {
  let person1 = new Person('hank');
}

// 使用 class 建立物件
class Person2 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let person2 = new Person2('hank');

// return [] 注意避免 union 情況發生
function getArr() {
  // 這樣寫預設會自動推導為 function getArr(): (string | number)[]
  // 導致解構後的變數都變成 string 或 number 都可以
  // return [0, 1, 'hank']
  // 改使用 assertion 為 tuple 的方式即可
  return [0, 1, 'hank'] as [number, number, string];
}
// 現在 id age 都是 number 且 userName 為 string，都正確了。
const [id, age, userName] = getArr();

export {};
