// ========== type ========== 
// type 合併屬性使用 & 符號
// type 能表示任何類別組合
// type 不支持聲明合併，一個作用域內不允許有多個同名 type
// interface 只能表示物件結構的類型
// interface 可以有多個同名 interface 但屬性會被合併，但同名屬性不行覆蓋，會報錯。

type ID = string | number;

type Animal1 = {
  name: string,
}

type Dog1 = Animal1 & {
  age: number
}

let dog1: Dog1 = {
  name: 'juby',
  age: 3,
}

// ========== interface ========== 
// interface 可以繼承 extends (繼承) 另一個 interface
// interface 也可以繼承 type ，但只能是物件結構
interface Animal2 {
  name: string
}

interface Dog2 extends Animal2 {
  age: number
}

let dog2: Dog2 = {
  name: 'juby',
  age: 3,
}

// ========== interface 合併 ========== 
// 合併 interface 屬性需使用同名
// type 則無法同名合併屬性
// 注意：interface 裡的同名屬性不行覆蓋修改
interface Animal3 {
  name: string
}

interface Animal3 {
  age: number
}

let dog3: Animal3 = {
  name: 'juby',
  age: 3,
}

// ========== 結論 ========== 
// 1. type 後面有 = ，interface 使用 {}
// 2. type 可以描述任何類別組合，inteface 只能描述物件結構。
// 3. interface 可以繼承 interface 或物件結構的 type，type 也可通過 & 符號做物件結構的繼承。 
// 4. 多次聲明的同名 interface 會進行聲名合併，type 則不充許多次聲明。

// 大多情況下，更推薦用 interface ，因為它擴充起來更方便，提示也更友好，interface 的 & 較難用。

export {}