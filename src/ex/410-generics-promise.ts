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
