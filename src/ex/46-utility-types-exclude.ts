// Exclude<UnionType, ExcludedMembers>：
// 從型別 UnionType 中排除可以賦值給 ExcludedMembers 的型別。
// 簡單說就是：排除 Union 型別裡的某些型別

type T0 = Exclude<"a" | "b" | "c", "a">;
// type T0 = "b" | "c"
     
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// type T1 = "c"
     
type T2 = Exclude<string | number | (() => void), Function>;
// type T2 = string | number
     

export {}