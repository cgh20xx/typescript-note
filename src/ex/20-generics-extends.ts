// ========== 一般的 extends 用法 ==========

// interface B 繼承 A
interface A {
  name: string;
}
interface B extends A {}

const b: B = {
  name: 'hank',
};

// ========== class ==========
class ClassA {}
class ClassB extends ClassA {}

// ========== 在修件判斷上的 extends ==========
// 判斷 child 是否 extends father?
// 好像只能用在 type XX = 後面，並要使用三元運算子，不能在一般的程式中用，如下一行：
// console.log(B extends A ? string : number); // error
type T1 = B extends A ? string : number; // type T1 = string
type T2 = ClassB extends ClassA ? string : number; // type T2 = string

// 誰能滿足誰？只要子擁有父所有的屬性就成立！(鴨子類型)
// 介面 C 和 D 沒有繼承的父子關係
interface C {
  name: string;
}
interface D {
  name: string;
  age: number;
}
type T3 = D extends C ? string : number; // type T3 = string

// ========== 基本泛型用法 ==========
// type TT1 = string extends string ? string : number
type TT1<T> = T extends string ? T : number;
type R1 = TT1<boolean>; // type res = number

// ========== 進階 Union 泛型用法 ==========
// 'hank1' | 'hank2' 為 Union 類型，所以不是 'hank1' 的子類別。
type TT2 = 'hank1' | 'hank2' extends 'hank1' ? string : number; // type TT2 = number
// 注意：將上面這行改成 Union 泛型結果會不太一樣
type TT3<T> = T extends 'hank1' ? string : number;
type R2 = TT3<'hank1' | 'hank2'>; // type R2 = string | number
// TT3 會將泛型的參數分別帶入一一比較並回傳，流程如下：
// 第1步： 'hank1' -> T = string
// 第2步： 'hank2' -> T = number
// 第3步： type R2 = string | number

// 若要將上面的 TT3 的泛型符合原本期待像 TT2 泛型，
// 可以在 TT4 裡使用 []，將整個 'hank1' | 'hank2' 拿來比較，而非一一比較。
type TT4<T> = [T] extends ['hank1'] ? string : number;
type R3 = TT4<'hank1' | 'hank2'>; // type R3 = number

// ========== never 是所有類型的子類別 ==========
type N1 = never extends 'hank' ? string : number; // type N1 = string
// 注意：將上面這行改成泛型結果會不太一樣
type N2<T> = T extends 'hank' ? string : number;
// never 放入泛型只會是 never
type R4 = N2<never>; // 注意：type R3 = never

export {};
