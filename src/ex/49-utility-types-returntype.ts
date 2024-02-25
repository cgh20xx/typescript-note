// ReturnType<Type>
// 獲取函數類型 Type 的返回值型別。

type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// type T3 = number[]

declare function f1(): { a: number; b: string };
type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never

// type T7 = ReturnType<string>;
// error: Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T7 = any

// type T8 = ReturnType<Function>;
// error: Type 'Function' does not satisfy the constraint '(...args: any) => any'.
// error: Type 'Function' provides no match for the signature '(...args: any): any'.
// type T8 = any

export {};
