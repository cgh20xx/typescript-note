// 當在 TypeScript 專案中包含了一個 .d.ts 檔案時，這個檔案被視為一個宣告檔（Declaration File）。
// 宣告檔的主要目的是為了提供 TypeScript 環境中不存在的 JavaScript 代碼的類型資訊。
// 這樣做可以讓 TypeScript 編譯器理解並檢查這些外部或自定義的 JavaScript 實作的類型。

// 這邊有加 export 表示這個函式被視為模組，是可以被 import 的
export declare function isTooLongFromModule(text: string): boolean;
