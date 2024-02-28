// ============ 型別斷言 Type Assertion ============
// 可以用來手動指定一個值的型別。
// 語法1：值 as 型別
// 語法2：<型別>值

// 這兩種語法形式都用於告訴 TypeScript 編譯器將某個值斷言為特定的型別，以便在編譯時進行更嚴格的類型檢查或獲得更具體的型別提示。然而，這兩種語法形式在某些情況下有一些微妙的差異。

//     1. 型別斷言 值 as 型別：
//         建議使用這種形式，特別是在使用 JSX 或 TSX 語法的代碼中，因為 <型別>值 的語法與 JSX/TSX 的語法可能衝突。
//         這種語法形式在 TypeScript 中被推薦使用，因為它與 JSX 和 TSX 語法兼容，且更具可讀性。

//     2. 型別斷言 <型別>值：
//         在 TypeScript 中，這種語法形式與 值 as 型別 是等價的，它也可以將值斷言為特定的型別。
//         然而，在使用 JSX 或 TSX 語法的代碼中，這種語法形式可能與語法衝突，因為 <型別> 在 JSX/TSX 中通常用於表示元素類型，可能會被誤解為元素標籤的開始。

// 總體而言，兩種語法形式在大多數情況下是等價的，可以根據個人喜好和代碼風格選擇使用。然而，在使用 JSX 或 TSX 語法的代碼中，建議使用 值 as 型別 的語法形式，以避免與 JSX/TSX 語法的衝突。

let name2: unknown = 'hank2';
let name3 = name2 as string;

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
  // 第一種寫法(泛型)
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
  // 第二種寫法(as)
  // if ((something as string).length) {
  //   return (something as string).length;
  // } else {
  //     return something.toString().length;
  // }
}
let len = getLength('abcde');
console.log('len abcde:', len);
len = getLength(123);
console.log('len 123:', len);

// ========== 斷言的應用 ===========

type ApiData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// 寫法1 (泛型)
async function getData1() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // 使用 <ApiData> 強制給 data 指定物件型別
  const data = <ApiData>await res.json();
  return data;
}

// 寫法2 (as)
async function getData2() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // 使用 as 關鍵字強制給 data 指定物件型別
  const data = (await res.json()) as ApiData;
  return data;
}

getData1().then((data) => console.log(data));
getData2().then((data) => console.log(data));
