// ========== 泛型型別別名 ==========

type Nullish<T> = T | null | undefined;

// 泛型型別別名通常與函數搭配使用，用來描述函數的型別。
type CreateValue<Input, Output> = (input: Input) => Output;

// 型別：(input: Input) => Output
let creator: CreateValue<string, number>; // 一定要指定型別，無法自動推斷

creator = (text) => text.length; // 正確

// creator = (text) => text.toUpperCase(); // 錯誤：Type 'string' is not assignable to type 'number'.
