// ============ 型別斷言（Type Assertion） ============
// 可以用來手動指定一個值的型別。
// 語法1：值 as 型別
// 語法2：<型別>值

let name2: unknown = 'hank2'
let name3 = name2 as string

// 有時候，我們需要在還不確定型別的時候就訪問其中一個型別的屬性或方法，比如
// function getLength(something: string | number): number {
//   if (something.length) {
//       return something.length;
//   } else {
//       return something.toString().length;
//   }
// }

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
// index.ts(3,26): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.

// 上例中，存取 something.length 的時候會報錯。
// 此時可以使用型別斷言，將 something 斷言成 string：
// 型別斷言不是型別轉換，斷言成一個聯合型別中不存在的型別是不允許的：
function getLength(something: string | number): number {
  // 第一種寫法
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
  // 第二種寫法
  // if ((something as string).length) {
  //   return (something as string).length;
  // } else {
  //     return something.toString().length;
  // }
}
let len = getLength('abcde')
console.log('len abcde:', len);
len = getLength(123)
console.log('len 123:', len);


// 斷言 as 的應用
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // 使用 as 關鍵字強制給 data 添加物件型別
  const data = await res.json() as { 
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  console.log(data)
}

getData()