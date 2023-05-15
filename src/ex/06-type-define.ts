/**
 * type: 型別別名
 * 用來給一個型別起個新名字。
 * type 常用於聯合型別。
 */

// 基本型別
type CustomType = string

// 基本型別以聯合型別為例
type TwoType = string | number

let str3: TwoType = '123'
let num3: TwoType = 123

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