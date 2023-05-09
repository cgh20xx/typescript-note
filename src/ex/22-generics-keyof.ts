// ========== keyof ==========
interface Person {
  name: string
  age: number
  addr?: string
}

type PersonKey = keyof Person
// 得到一個 Type 或 Union Type："name" | "age" | "addr"

const personKey: PersonKey = 'name' // 只能是 "name" | "age" | "addr" 之一


// ========== keyof 在泛型的應用 ==========
// 情境：建立一個 getValue function 可以傳入任意物件和該物件的 key 並取得值。

// ========== js verson ==========
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
// const person = {
//   name: 'hank',
//   age: 99,
// }
// function getValue(obj: Person, key: keyof Person) {
//   return obj[key]
// }
// let pname = getValue(person, 'name') // hank
// let pvalue = getValue(person, 'age') // 99


// ========== ts version ==========
// 使用泛型可支援多種物件類型
const person = {
  name: 'hank',
  age: 99,
}

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
let pname = getValue<Person, 'name'>(person, 'name') // hank
let pvalue = getValue<Person, 'age'>(person, 'age') // 99
console.log(pname, pvalue);


