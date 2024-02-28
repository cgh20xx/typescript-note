// ========= typeof ==========
// 用來取得一個物件的值的資料型別相當好用，因如果手動編輯值的型別會很麻煩。
// 看起來像 js 的 typeof，但是 ts 的 typeof 是用來取得值的型別的，
// 剛好與 js 使用同一個字，只能用在型別系統，不會編譯到 js 中。

const original = {
  medium: 'movie',
  title: 'Mean Girls',
};

// 型別: {
//   medium: string;
//   title: string;
// }
let adaptation: typeof original;

if (Math.random() > 0.5) {
  adaptation = { ...original, medium: 'book' };
} else {
  // adaptation = { ...original, medium: 2 };
  // Error: Type 'number' is not assignable to type 'string'.
}

// ========== keyof 與 typeof 應用 ==========
// keyof 是用來取得物件索引上的鍵值
// typeof 是用來取得物倬索引的值的型別

const ratings = {
  user: 7.5,
  google: 82,
};
// 若程式碼沒有建立 interface 時，可以使用 typeof 取得物件的值的型別
// 再搭配使用 keyof 取得物件的鍵值
function logRatings(key: keyof typeof ratings) {
  // key: "user" | "google"
  console.log(ratings[key]);
}

logRatings('user'); // 7.5
