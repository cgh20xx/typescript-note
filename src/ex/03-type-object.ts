/**
 * 物件及屬性的型別
 * 屬性後面加?表示可選
 */
let obj: { name: string, age?: number }

// 以下這樣是合法的
obj = {
  name: 'Hank',
  age: 99
}

// 以下這樣是合法的, age 為可省略的屬性
obj = {
  name: 'Hank',
}

/**
 * 結構化型別 (structurally typed)
 * 
 * 任何滿足型別的數值，都可以作該型別。
 */

const hank = {
  name: 'Hank',
  age: 99
}

type withName = {
  name: string,
}

/**
 * `物件字面量賦值`時的類型檢查，
 * 當你直接將一個`物件字面量`賦值給一個變數時（如 obj2 的案例），
 * TypeScript 會進行過剩屬性檢查（Excess Property Checking）。
 * 直接指定 object literal 會出現錯誤
 * 
 */
// let obj2: withName = {
//   name: 'Hank',
//   age: 99 //  error: Object literal may only specify known properties, and 'age' does not exist in type 'withName'.
// }

/**
 * `變數賦值`時的類型檢查，來源變數的類型是目標類型的子集，
 * TypeScript 就認為這是合法的，不會執行過剩屬性檢查。
 * 以下這樣不會出現錯誤
 */
let obj3: withName = hank

/**
 * 以上總結
 * 這種行為的設計旨在提高類型安全性，
 * 防止在使用物件字面量進行賦值時不小心引入未聲明的屬性。
 * 它鼓勵開發者在定義物件時就明確地指出其類型，從而避免潛在的錯誤。
 * 而對於已存在的變數賦值，只要來源類型滿足目標類型的要求（即是其子集），TypeScript 就允許這種賦值，給予了一定程度的靈活性。
 */

export {}