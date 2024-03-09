// ========== 使用 declare 宣告型別 ==========
// 使用 declare 關鍵字宣告一個函式、變數、類別或其他任何東西時，
// 您實際上是在告訴 TypeScript 這個東西存在，且這是它的類型簽名，但不要擔心在哪裡可以找到它的實現。
// 一般來會，會在 .d.ts 檔案中使用 declare 來宣告型別，這裡只是為了示範，定義在同一個檔案中。

// 宣告 addNum 函式的參數和回傳值的型別
declare function addNum(a: number, b: number): number;

// 實際沒有這個函式，只是為了示範，不存在任何的 JS 或 TS 檔案中
addNum(2, 3); // 型別：number
