// =========== 非 null 斷言 ===========
// 加上 ! 斷言運算子，告訴 ts 這個值一定不是 null 或 undefined

const seasonCounts = new Map([
  ['spring', 1],
  ['summer', 2],
  ['autumn', 3],
  ['winter', 4],
]);

// 型別：number | undefined
const maybeValue = seasonCounts.get('spring');

// 型別：number
const knownValue = seasonCounts.get('sumer')!; // 最後加上 ! 斷言運算子

// 注意：型別斷言是 TypeScript 型別系統的必要逃出口，因 any 型別一樣，應盡可能避免使用。
// 非 null 斷言仍然可能使程式碼逃過 TypeScript 的型別檢查，造成執行時期錯誤。(如下範例)

// 型別：number
const unknownValue = seasonCounts.get('nobody')!; // 取得不存在的 key，非 null 斷言應為 number，但實際上是 undefined
console.log('unknownValue:', unknownValue.toFixed()); // 雖然非 null 斷言了，不會報錯，但在執行時期會報錯
// 執行時期 Uncaught TypeError: unknownValue is undefined
