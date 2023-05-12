// declaration files 宣告檔案
// 檔案格式：xxx.d.ts

// 當使用第三方函式庫時，我們需要參考它的宣告檔案，才能獲得對應的程式碼自動完成、介面提示等功能。
// 平常開發 ts 專案時，自己是不用特別寫 *.d.ts 的，
// 在 tsconfig 新增 compilerOptions.declaration 選項，就可以同時也產生 .d.ts 宣告檔案了。
// {
//   "compilerOptions": {
//     "declaration": true,
//   }
// }

// ========= 全域變數 ==========
// 全域變數是最簡單的一種場景，之前舉的例子就是透過 <script> 標籤引入 jQuery，注入全域變數 $ 和 jQuery。
// 使用全域變數的宣告檔案時，如果是以 npm install @types/xxx --save-dev 安裝的，則不需要任何配置。
// 如果是將宣告檔案直接存放於當前專案中，則建議和其他原始碼一起放到 src 目錄下（或者對應的原始碼目錄下）：

// /path/to/project
// ├── src
// |  ├── index.ts
// |  └── jQuery.d.ts
// └── tsconfig.json

// 如果沒有生效，可以檢查下 tsconfig.json 中的 files、include 和 exclude 配置，確保其包含了 jQuery.d.ts 檔案。
// 全域變數的宣告檔案主要有以下幾種語法：
// declare var 宣告全域變數
// declare function 宣告全域方法
// declare class 宣告全域類別
// declare enum 宣告全域列舉型別
// declare namespace 宣告全域變數(含有子屬性的)
// interface 和 type 宣告全域型別