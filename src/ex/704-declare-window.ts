// ========== 使用 window 全域變數 ==========

console.log(window.customDog.toUpperCase()); // OK
// console.log(customDog.toUpperCase()); // Error: Cannot find name 'customDog'.ts(2304)

console.log(window.customCat.toUpperCase()); // OK
console.log(customCat.toUpperCase()); // OK

// 也可在 TS 檔案中使用 declare global 來擴充 window 全域變數
// 但比較少見
declare global {
  interface Window {
    customRat: string;
  }
}
console.log(window.customRat);

// 沒有使用 declare global 則無法使用
// interface Window {
//   customBunny: string;
// }
// console.log(window.customBunny);
