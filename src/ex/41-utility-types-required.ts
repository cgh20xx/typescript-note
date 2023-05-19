// Required<T>：將型別 T 的所有屬性變為必填。

interface Props {
  a?: number;
  b?: string;
}

// 將所有屬性為可選的 Props 轉為為必填的 Props
type RequiredProps = Required<Props>;

// const obj2: RequiredProps = { a: 5 }; // error: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

export {}