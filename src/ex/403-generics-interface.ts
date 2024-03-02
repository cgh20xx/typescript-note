// ========== 泛型介面的實作 ============
// 不論是繼承泛型類別，或是實作泛型介面，子類別或子介面都需要`明確指定泛型的型別`。

interface ActingCredit<Role> {
  role: Role;
}

class MoviePart implements ActingCredit<string> {
  role: string;
  speaking: boolean;
  constructor(role: string, speaking: boolean) {
    this.role = role;
    this.speaking = speaking;
  }
}

const role = new MoviePart('hank', true).role; // 型別：string

// 錯誤屬性型別範例：
// class IncorrectExtension implements ActingCredit<string> {
//   role: boolean; // 錯誤：Property 'role' in type 'IncorrectExtension' is not assignable to the same property in base type 'ActingCredit<string>'.
// }

// ========== 泛型介面 ============

// 範例1：
// 定義介面 Card 的 desc 屬性類型是由外部決定
interface Card<T> {
  title: string;
  desc: T;
}

// printCardInfo 用 TT 是避免與 Card 的 T 搞混，就算 T 也是可以，只要知道與上面的 T 是不同的 scope 就好。
function printCardInfo<TT>(desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: 'hank',
    desc,
  };
  return data;
}

console.log(printCardInfo<string>('my desc'));

// 範例2：
// 定義介面 IPerson 的 name 類型是由外部決定
interface IPerson<T> {
  name: T;
  age: number;
}

class Person<T> implements IPerson<T> {
  name: T;
  age: number;
  constructor(name: T) {
    this.name = name;
    this.age = 0;
  }
}
// 手動寫泛型會根據參數自動推導為該參數的型別，無法檢查參數型別是否正確。
const person1 = new Person('hank'); // OK
const person2 = new Person(123); // OK：但是這樣就不符合預期
// 有手動寫泛型就可檢查到第一個參數是否符合泛型型別
const person3 = new Person<string>('hank'); // OK：有手動寫泛型就可檢查到第一個參數是否符合泛型型別
// const person4 = new Person<string>(123); // Error：Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// ========== TS 內建的 Array<T> 就是泛型介面 ============
interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
   */
  length: number;
  /**
   * Returns a string representation of an array.
   */
  toString(): string;
  /**
   * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
   */
  toLocaleString(): string;
  /**
   * Removes the last element from an array and returns it.
   * If the array is empty, undefined is returned and the array is not modified.
   */
  pop(): T | undefined;
  /**
   * Appends new elements to the end of an array, and returns the new length of the array.
   * @param items New elements to add to the array.
   */
  push(...items: T[]): number;
  // 以下省略
}

const arr = [1, 2, 3];
arr.push(4); // OK
// arr.push('abc'); // Error：Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

export {};
