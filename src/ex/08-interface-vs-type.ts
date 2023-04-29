// ========== type ========== 
// type 擴充屬性使用 & 符號

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
// interface 擴充屬性使用 extends (繼承)
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

// ========== interface 擴充 ========== 
// 擴充 interface 屬性需使用同名
// type 則無法同名擴充屬性
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