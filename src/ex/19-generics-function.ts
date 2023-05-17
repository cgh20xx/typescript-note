// ========== 泛型 Generics ==========
// 泛型（Generics）是指在定義函式、介面或類別的時候，不預先指定具體的型別，而在使用的時候再指定型別的一種特性。

// function generics

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
