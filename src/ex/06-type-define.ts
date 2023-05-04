/**
 * type: 自定義類型，可以共用。
 */

// 基本型別
type CustomType = string | number

let str3: CustomType = '123'
let num3: CustomType = 123

// 物件型別
type Person = {
  name: string,
  age: number
}

let people1: Person = {
  name: 'hank',
  age: 5
}

let people2: Person
people2 = {
  name: 'apple',
  age: 10
}

let people3 = {} as Person
people3.name = 'tom'
people3.age = 20

export {}