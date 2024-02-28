// NonNullable<Type>
// 從型別 Type 中排除 null 和 undefined。

type T0 = NonNullable<string | number | undefined>;
// type T0 = string | number

type T1 = NonNullable<string[] | null | undefined>;
// type T1 = string[]

export {};
