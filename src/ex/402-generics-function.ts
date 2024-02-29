// ========== 泛型 Generics ==========
// 泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。

// function generics

function identity<T>(input: T) {
  return input;
}

// 注意：泛型若未指定型別，則會自動推導。推導如下：

// 型別：123
const numeric = identity(123);
// 型別：number
const numericExplicit = identity<number>(123);
// 型別：'abc'
const stringy = identity('abc');
// 型別：string
const stringyExplicit = identity<string>('abc');

// 首先，我們來實現一個函式 createArray，它可以建立一個指定長度的陣列，同時將每一項都填充一個預設值
function createArray1(length: number, value: any): any[] {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

createArray1(3, 'x'); // ['x', 'x', 'x']
// 以上程式碼編譯不會報錯，但是缺陷是，它並沒有準確的定義返回值的型別。

// 使用泛型來改寫
function createArray2<T>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray2<string>(3, 'x')); // ['x', 'x', 'x']

// 若不指定傳入的泛型，則會自動推導。推導如下：
// function createArray2<number>(length: number, value: number): number[]
console.log(createArray2(2, 0)); // [0, 0]

// ========= 泛型引數的預設型別 =========
// 在 TypeScript 2.3 以後，我們可以為泛型中的型別引數指定預設型別。
// 當使用泛型時沒有在程式碼中直接指定型別引數，從實際值引數中也無法推測出時，這個預設型別就會起作用。

// 使用泛型來改寫
function createArray3<T = string>(length: number, value: T): T[] {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

// ========= 明確的泛型呼叫 =========

function logWrapper<T>(callback: (input: T) => void) {
  return (input: T) => {
    console.log('Input:', input);
    callback(input);
  };
}

// Bad 寫法：
// 注意：TypeScript 無法推斷的任何'引數型別'，預設假定為 unknown
// 回傳型別：(input: unknown) => void
logWrapper((input) => {
  // console.log('input.length:', input.length);
  // 錯誤：'input' is of type 'unknown'.ts(18046)
});

// Good 寫法1：(二擇一)
// 回傳型別：(input: string) => void
logWrapper((input: string) => {
  console.log('input.length:', input.length);
});

// Good 寫法2：(二擇一)
// 明確的指出引數型別為 string
// 回傳型別：(input: string) => void
logWrapper<string>((input) => {
  console.log('input.length:', input.length);
});

// ========= 多個函數參數型別 =========
// 注意：要馬直接省略不寫泛型引數，讓 TypeScript 自動推導，要馬就要明確指定所有泛型引數，一個都不能少。

// 此範例中，我們定義了一個函式 makeTuple，它接受兩個參數，並將它們作為元組返回。
function makeTuple<First, Second>(arg1: First, arg2: Second) {
  return [arg1, arg2] as const;
}

// 型別：[boolean, string]
makeTuple(true, 'abc');

export {};
