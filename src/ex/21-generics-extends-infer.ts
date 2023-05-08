// 在 infer 之前，補充 extends 用法 (Array)
// function sliceArr<T>(a: T) {
//   console.log(a.length); // error
// }
function sliceArr<T extends Array<string>>(a: T) {
  console.log(a.length);
}
// 這種做法只能寫死傳入 string
sliceArr(['aaa']) // function sliceArr<string[]>(a: string[]): void



// infer 用法 (在 extends 後再宣告一個新變數 P 的概念，自動推導 P)
type TT1<T> = T extends Array<infer P> ? P : never;
// 流程：
// 1. 先判斷 T 是否為 Array 類型
// 2. 若 T 為 Array 類型，則推導 Array 裡面的類型以 P 表示
type R1 = TT1<['aaa']> // type R1 = "aaa"
type R2 = TT1<[123]> // type R2 = 123
type R3 = TT1<'aaa'> // type R3 = never
type R4 = TT1<['aaa', 123]> // type R4 = "aaa" | 123



// function 用法
type ParamType<T> = T extends (param1: infer P) => any ? P : never
type R10 = ParamType<(a: number) => void> // type R10 = number

interface UserCard { name: string }
type R11 = ParamType<(a: UserCard) => void> // type R11 = UserCard

type R12 = ParamType<[]> // type R12 = never


export {}