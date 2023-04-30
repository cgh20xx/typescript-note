// ========== function ========== 


// parameter
function add(a: number, b: string) {
 return a + b;
}

let resault = add(1, '2') // 自動推導為 string

// 可選的參數 ? (需從最後一個參數開始用)
function setUser(name: string, age?: number) {
  // 若 age 為可選，直接使用會報錯，需先判斷 type 或是否存在

  // age.toString(); // error

  // (typeof age === 'number') && age.toString() // ok 方法1

  age?.toString() // ok 方法2
}

// return type 指定型別
function getString(): string {
  return 'hank'
}

// return type 未指定，自動推導型別
function getNumber() {
  return 123
}

// void: 沒有手動 return 任何值，或是沒有寫 return，預設就是 void
// 在 js 中沒有 return 任何值，將隱式返回 undefined，然而在 TS 中 void 和 undefined 是不同的。  
function doSomething(): void {
  console.log('no return')
  // return undefined
  return;
}

// never: Some functions never return a value:
function doSomething2(): never {
  throw new Error('xxx error')
}

// 使用建構函式建立物件 (感覺問題很多，用 class 建立物件較好)
type PersonObj = {
  name: string,
  age: number
}

type PersonObjConstructor = {
  new(name: string): PersonObj
}

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
  return [0, 1, 'hank'] as [number, number, string]
}
// 現在 id age 都是 number 且 userName 為 string，都正確了。
const [id, age, userName ] = getArr();



