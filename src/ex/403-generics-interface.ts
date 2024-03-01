// interface generics

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

export {};
