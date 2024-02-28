// Extract<Type, Union>
// 從型別 Type 中提取可以賦值給 Union 的型別。
// 簡單說就是：提取 Type 和 Union 有交集的型別

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'z'>;
// type T0 = "a"

type T1 = Extract<'a' | 'b' | 'c', 'a' | 'b'>;
// type T0 = "a" | "b"

type T2 = Extract<string | number | (() => void), Function>;
// type T1 = () => void

type T3 = Extract<'a' | 'b', 'c'>;
// type T0 = never

export {};
