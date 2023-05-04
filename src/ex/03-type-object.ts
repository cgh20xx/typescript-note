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

export {}