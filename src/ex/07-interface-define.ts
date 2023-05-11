/**
 * interface: 介面
 * TypeScript 使用介面（Interfaces）來定義物件的型別。
 * 在物件導向程式語言中，介面（Interfaces）是一個很重要的概念，它是對行為的一種抽象，而具體如何行動則需要由類別（classes）去實現（implement）。
 * TypeScript 中的介面是一個非常靈活的概念，也常用於對「物件的形狀（Shape）」進行描述。
 */

interface People {
  name: string
  age: number
}

const people: People = {
  name: 'hank',
  age: 10
}

// 上面的例子中，我們定義了一個介面 People tom，它的型別是 People 。這樣，我們就約束了 people 的形狀必須和介面 People 一致。
// 多一些屬性也是不允許的

// =========== 可選屬性 ===========
// 有時我們希望不要完全匹配一個形狀，那麼可以用可選屬性 (?)：
// 可選屬性的含義是該屬性可以不存在。仍然不允許新增未定義的屬性：
interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom'
};


// =========== 任意屬性 ===========
// 有時候我們希望一個介面允許有任意的屬性，可以使用如下方式：
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom2: Person2 = {
  name: 'Tom',
  gender: 'male',
};

// 使用 [propName: string] 定義了任意屬性取 string 型別的值。
// 需要注意的是，一旦定義了任意屬性，那麼確定屬性和可選屬性的型別都必須是它的型別的子集：
// interface Person3 {
//   name: string;
//   age?: number; // Property 'age' of type 'number | undefined' is not assignable to 'string' index type 'string'.ts(2411)
//   [propName: string]: string;
// }

// let tom3: Person3 = { // Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person3'.
//   name: 'Tom',
//   age: 25,
//   gender: 'male',
// };

// 上例中，任意屬性的值允許是 string，但是可選屬性 age 的值卻是 number，number 不是 string 的子屬性，所以報錯了。



// =========== 唯讀屬性 ===========
// 有時候我們希望物件中的一些欄位只能在建立的時候被賦值，那麼可以用 readonly 定義唯讀屬性：
interface Person4 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom4: Person4 = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};
// tom4.id = 9527; // Cannot assign to 'id' because it is a read-only property.ts(2540)

// 上例中，使用 readonly 定義的屬性 id 初始化後，又被賦值了，所以報錯了。
// 注意：唯讀的約束存在於第一次給「物件」賦值的時候，而不是第一次給「唯讀屬性」賦值的時候：


// =========== 用介面表示陣列 ===========
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
// NumberArray 表示：只要索引的型別是數字時，那麼值的型別必須是數字。
// 雖然介面也可以用來描述陣列，但是我們一般不會這麼做，因為這種方式比前兩種方式複雜多了。
// 不過有一種情況例外，那就是它常用來表示類陣列（Array-like Object)。


// =========== 用介面定義函式的形狀 ===========
// 我們也可以使用介面的方式來定義一個函式需要符合的形狀：
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

export {}