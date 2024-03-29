// ========== 宣告 global 全域變數 ==========
// 全域宣告通常用於以下幾種情況：

// 1. 使用 JavaScript 寫的程式碼: 當 TypeScript 項目中要使用一些原本是用 JavaScript 寫的程式碼時，可以用這種方式告訴 TypeScript，這個變數是存在的，這樣就不會報錯。
// 2. 設定檔案: 如果專案中有一些全域的設定，比如版本號，可以這樣宣告它，這樣在 TypeScript 裡就可以直接使用這些設定了。
// 3. 擴展第三方函式庫: 當想要在一個第三方函式庫添加一些全域的變數或常數，可以用這種方式確保 TypeScript 知道這些新增的部分，並且保持類型正確。

// 總結來說，這種宣告是為了讓 TypeScript 知道某些全域變數的存在，以便在不同情境下使用，同時保持程式碼的類型安全。
declare const version: string;

// 注意：這個檔名為 703-declare-global1.d.ts，所以不會和 703-declare-global.ts 衝突，這只會發生在宣告全域變數時。
// 若是 .d.ts 含有 export，則會被視為模組，不會發生上述問題。

// 當一個 .ts 檔案和一個同名的 .d.ts 檔案存在於同一個專案中時，TypeScript 會優先使用 .ts 檔案，並忽略同名的 .d.ts 檔案。這是因為 .ts 檔案同時包含了類型資訊和實作，而 .d.ts 檔僅包含類型宣告。
// 這種設計讓開發者在開發階段可以使用 .ts 檔案，而將生成的 .d.ts 檔用於發布，以便其他項目在使用此庫時獲得類型資訊，而不需要包含實作代碼。但是，如果在項目中直接包含了同名的 .d.ts 檔，TypeScript 編譯器就會面臨衝突，因為它不確定應該使用哪個檔案中的類型資訊，最終導致它忽略了 .d.ts 檔案。

// 解決方法：
// 如果在 other.ts 中使用 other.d.ts 宣告的全域變數被忽略的問題，有幾種可能的解決方法：

// 1. 避免同名：最簡單的解決方案是避免 .ts 檔案和 .d.ts 檔案同名。將類型宣告檔重命名為不與任何 .ts 檔案同名的名稱，例如，將 other.d.ts 改名為 globals.d.ts 或其他任何不會與 .ts 檔案衝突的名稱。

// 2. 內部宣告：如果可能，直接在使用變數的 .ts 檔案中宣告變數，或者在一個全域宣告檔中宣告所有需要的全域變數，而不是分散在多個 .d.ts 檔案中。

// 3. 模組化：考慮將全域變數轉換為模組的一部分，透過 export 和 import 明確地管理依賴關係，這樣可以更好地利用 TypeScript 的模組系統，同時避免全域汙染。

// 透過上述任一方法，都可以解決因 .ts 檔案與 .d.ts 檔案同名導致的宣告被忽略的問題，從而確保專案中的類型宣告正確地被 TypeScript 編譯器識別和使用。
