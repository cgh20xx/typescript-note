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

// ========== 擴充泛型類別 extends Class ============
// TypeScript 不會嘗試從使用的情況中推薦基本類別(父類別)的引數型別。
// 任何沒有預設值的引數型別，都需要使用一個明確的型別註記來指定。

class Quote<T> {
  lines: T;
  constructor(line: T) {
    this.lines = line;
  }
}

new Quote('hello world').lines; // 型別：string
new Quote([1, 2, 3]).lines; // 型別：number[]

// 正確範例：擴充泛型類別明確指定型別(但子類別以後就只能接受固定的型別)
class SpokenQuote extends Quote<string[]> {
  speak() {
    console.log(this.lines.join('\n'));
  }
}

// 錯誤範例：擴充泛型類別未明確指定型別
// 錯誤：Generic type 'Quote<T>' requires 1 type argument(s).ts(2314)
// class SpokenQuote extends Quote {
//   speak() {
//     // 錯誤：Property 'lines' does not exist on type 'SpokenQuote'.ts(2339)
//     console.log(this.lines.join('\n'));
//   }
// }

new SpokenQuote(['hello', 'world']).lines; // 型別：string[]
// new SpokenQuote([1, 2, 3]).speak(); // 錯誤：Type 'number' is not assignable to type 'string'.ts(2322)

// 泛型衍生類別(子類別)可以將它自的引數類型傳遞給基本類別(父類別)，
// 型別名稱不需要相同，這邊用 T2 來表示，避免混淆，要用 T 也是可以的。
class AttributeQuote<T2> extends Quote<T2> {
  speaker: string;
  constructor(line: T2, speaker: string) {
    super(line);
    this.speaker = speaker;
  }
}

new AttributeQuote('hello world', 'hank').lines; // 型別：string
new AttributeQuote(123, 'hank').lines; // 型別：number
new AttributeQuote([1, 2, 3], 'hank').lines; // 型別：number[]
// 這樣子類別就可讓 TypeScript 自動推導出屬性的型別，不需要再手動指定型別，跟上個例子 SpokenQuote 比，更為靈活。

// ========== 泛型方法 ============
class CreatePairFactory<Key> {
  key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  // 這邊建議手動返回 tuple 型別，不然會被自動推導為 (Key | Value)[]
  createPair<Value>(value: Value): [Key, Value] {
    return [this.key, value];
  }
}

// 型別：CreatePairFactory<string>
const factory = new CreatePairFactory('role');
// 型別：[string, string]
factory.createPair('hank');
// 型別：[string, number]
factory.createPair(123);

// ========== 靜態類別方法的泛型 ============
// 注意：靜態類別方法可以宣告自已的泛型參數，但不能使用類別的泛型參數。

class BothLogger<OnInstance> {
  /**
   * 成員方法
   */
  instanceLog(value: OnInstance) {
    console.log(value);
    return value;
  }

  /**
   * 靜態方法
   */
  static staticLog<OnStatic>(value: OnStatic) {
    // let fromInstance = OnInstance; // 錯誤：Cannot find name 'OnInstance'.ts(2304)
    console.log(value);
    return value;
  }
}

// 成員方法
const logger1 = new BothLogger(); // 未明確指定型別，自動推斷型別：BothLogger<unknown>
logger1.instanceLog([1, 2, 3]); // 型別：unknown

const logger2 = new BothLogger<string>(); // 明確指定型別：BothLogger<string>
logger2.instanceLog('hello world'); // 型別：string

// 靜態方法
// 靜態方法未明確指定型別，則會自動推斷型別
BothLogger.staticLog('hello world'); // 型別："hello world"
BothLogger.staticLog<string>('hello world'); // 型別：string

BothLogger.staticLog([1, 2, 3]); // 型別：number[]
BothLogger.staticLog<number[]>([1, 2, 3]); // 型別：number[]

BothLogger.staticLog(123); // 型別：321
BothLogger.staticLog<number>(321); // 型別：number

let num = 456;
BothLogger.staticLog(num); // 型別：number

export {};
