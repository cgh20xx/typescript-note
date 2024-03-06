// ========== Promise 的泛型 ==========
// 通常需要明確的宣告 Promise 的泛型引數型別
// 如果沒有明確的泛型引數型別，TypeScript 會預設引數型別為 unknown。

// 簡化的 Promise 實作大概如下：
class PromiseLike<T> {
  constructor(
    executor: (
      resolve: (value: T) => void,
      reject: (reason?: unknown) => void
    ) => void
  ) {
    /* ... */
  }
}

// 型別：Promise<unknown>
const resolvedUnknown = new Promise((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

// 型別：Promise<string>
const resolvedString = new Promise<string>((resolve) => {
  setTimeout(() => resolve('Done!'), 1000);
});

// 型別：Promise<number>
const resolvedNumber = resolvedString.then((text) => text.length);

// ========== 非同步函數 ==========
// 在 JS 中使用 async 關鍵字宣告的函數會回傳 Promise，
// 如果 JS 中的非同步函數回傳的數值不具有 Then 能力(即具有 then 方法)，則會被包裝成 Promise。
// TS 瞭解這一點，並推斷非同步函數，無論回傳什麼數值，型別始終是 Promise。

// 型別：function lengthAfterSecond(text: string): Promise<number>
async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return text.length;
}

// 型別：function lengthImmediately(text: string): Promise<number>
async function lengthImmediately(text: string) {
  return text.length;
}

// 因此，在任何 async 的函數上，手動宣告的回傳型別都必須是 Promise，即時該函數在其定義中沒有明確提及 Promise。

// 正確
async function givesPromiseForString(): Promise<string> {
  return 'Done!';
}

// 錯誤：
// async function givesString(): string {
//   return 'Done!';
// }
// The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<string>'?ts(1064)
