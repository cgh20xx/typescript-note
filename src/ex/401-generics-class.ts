// ========== class generics 泛型類別 ============
// 類別實體也可以透過明確的引數型別來避免預設為 unknown，就像其它泛型函數呼叫一樣。

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

// 明確型別：GenericNumber<number>
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
let sum = myGenericNumber.add(2, 3);
console.log(sum);

// 推斷型別：GenericNumber<unknown>
let myGenericUnknown = new GenericNumber();

export {};
