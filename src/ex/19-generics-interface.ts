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
    desc
  }
  return data
}

console.log(printCardInfo<string>('my desc'));

// 範例2：
// 定義介面 IPerson 的 name 類型是由外部決定
interface IPerson<T> {
  name: T;
  age: number;
}

class Person<T> implements IPerson<T> {
  // 注意：Person 裡面的 T 和 IPerson 的 T 是在不同的 scope 只是剛好同名
  name: T
  age: number
  constructor(name: T) {
    this.name = name;
  }
}

// const person = new Person('hank'); // 沒手動寫泛型會根據參數自動推導為該參數的型別，無法檢查參數型別是否正確。
const person = new Person<string>('hank'); // 有手動寫泛型就可檢查到第一個參數是否符合泛型型別
console.log('person:', person);