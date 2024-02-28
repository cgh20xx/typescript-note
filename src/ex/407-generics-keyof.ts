// ========== keyof ==========
interface Person {
  name: string;
  age: number;
  addr?: string;
}

type PersonKey = keyof Person;
// 得到一個 Type 或 Union Type："name" | "age" | "addr"

const personKey: PersonKey = 'name'; // 只能是 "name" | "age" | "addr" 之一

// ========== keyof 在泛型的應用 ==========
// 情境：建立一個 getValue function 可以傳入任意物件和該物件的 key 並取得值。

// ========== js version ==========
// const person = {
//   name: 'hank',
//   age: 99,
//   addr:
// }
// function getValue(obj, key) {
//   return obj[key]
// }
// let pname = getValue(person, 'name')

// ========== ts version ==========
// 缺點：傳入物件類型唯一
const person = {
  name: 'hank',
  age: 99,
  test: 123,
};

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

let pName = getValue(person, 'name'); // hank
let pValue = getValue(person, 'age'); // 99
// getValue(person, 'test'); // Error: Argument of type '"test"' is not assignable to parameter of type 'keyof Person'.

// ========== ts version ==========
// 使用泛型可支援多種物件類型
const person2 = {
  name: 'hank',
  age: 99,
  height: 180,
  weight: 70,
};

function getValue2<T>(obj: T, key: keyof T) {
  return obj[key];
}

let pName2 = getValue2<Person>(person2, 'name'); // hank
let pValue2 = getValue2<Person>(person2, 'age'); // 99
let pHeight2 = getValue2(person2, 'height'); // 180
console.log(pName2, pValue2, pHeight2);
