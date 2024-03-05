// ========= 泛型約束 Generic Constraints =========
// 受限制的泛型型別，是將 extends 關鍵字放在泛型參數型別的名稱後面，然後是限制它的型別。

// 在函式內部使用泛型變數的時候，由於事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length); // error TS2339: Property 'length' does not exist on type 'T'.
//   return arg;
// }

// 我們可以對泛型進行約束，只允許這個函式傳入那些包含 length 屬性的變數。這就是泛型約束
interface Lengthwise {
  length: number;
}

// T 的型別被 Lengthwise 限制，所以它一定會有 length 屬性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 上例中，我們使用了 extends 約束了泛型 T 必須符合介面 Lengthwise 的形狀，也就是必須包含 length 屬性。

loggingIdentity([1, 2, 3]);
loggingIdentity('abc');
// loggingIdentity(123) // error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.ts(2345)

// 多個型別引數之間也可以互相約束：
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (source as T)[id]; // *注釋1
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

let res = copyFields(x, { b: 10, d: 20 });
console.log(res); // Object { a: 1, b: 10, c: 3, d: 20 }
// 上例中，我們使用了兩個型別引數，其中要求 T extends(被限制於) U，這樣就保證了 U 上不會出現 T 中不存在的欄位。(換句話說：T 一定要存在著 U 上的欄位)

// *注釋1：
// 使用了 as 類型斷言（Type Assertion）的語法，
// 用於告訴 TypeScript 編譯器將 source 視為 T 型別。
// 這樣做是為了確保 target 和 source 具有相同的屬性，
// 以便將 source 的值複製到 target 中。

// ========== keyof 和限制參數型別 ==========
// 一起使用 extends 和 keyof，允許參數型別限制為前一個參數型別的鍵值，這也是指定泛型型別鍵值的唯一方法。
// 以下有二個範例，都不會有錯誤，但是回傳的型別會有所不同。

// Good 寫法：使用 extends 限制參數型別，回傳準確的型別
function getUseExtends<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Bad 寫法：沒有使用 K extends 限制參數型別，回傳型別會是所有屬性值的聯集型別(Union Type)
function getNoExtends<T>(obj: T, key: keyof T) {
  return obj[key];
}

const drink = {
  favorite: '五十嵐',
  others: ['清心', '迷克夏'],
  soldOut: false,
};

console.log(getUseExtends(drink, 'favorite')); // Good 返回型別：string
console.log(getUseExtends(drink, 'others')); // Good 返回型別：string[]
console.log(getUseExtends(drink, 'soldOut')); // Good 返回型別：boolean

console.log(getNoExtends(drink, 'favorite')); // 返回型別：string | boolean | string[]
console.log(getNoExtends(drink, 'others')); // 返回型別：string | boolean | string[]
console.log(getNoExtends(drink, 'soldOut')); // 返回型別：string | boolean | string[]

export {};
