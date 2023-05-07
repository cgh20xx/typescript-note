// 一般的 extends 用法

// interface B 繼承 A
interface A {
  name: string
}
interface B extends A {}

const b: B = {
  name: 'hank'
}

// class
class ClassA {}
class ClassB extends ClassA {}

// 在修件判斷上的 extends
// 判斷 child 是否 extends fahter?
// 好像只能用在 type XX = 後面，並要使用三元運算子，不能在一般的程式中用，如下一行：
// console.log(B extends A ? string : number); // error
type T1 =  B extends A ? string : number // type T1 = string
type T2 =  ClassB extends ClassA ? string : number // type T2 = string

// 誰能滿足誰？只要子擁有父所有的屬性就成立！(鴨子類型)
// 介面 C 和 D 沒有繼承的父子關係
interface C { name: string }
interface D { name: string, age: number }
type T3 = D extends C ? string : number // type T3 = string

// 基本泛型用法
// type TT1 = string extends string ? string : number
type TT1<T> = T extends string ? T : number
type res = TT1<boolean> // type res = number