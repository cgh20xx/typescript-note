// ========== 使用 全域變數 ==========

// ex1. 可以直接呼叫，不可使用 window. 前綴
console.log(customVar.toUpperCase()); // OK
// console.log(window.customVar.toUpperCase()); // Error: Property 'customVar' does not exist on type 'Window & typeof globalThis'.ts(2339)

// ex2. 可以使用 window. 前綴呼叫，不可直接呼叫
console.log(window.customDog.toUpperCase()); // OK
// console.log(customDog.toUpperCase()); // Error: Cannot find name 'customDog'.ts(2304)

// ex3. 可以直接呼叫，也可以使用 window. 前綴呼叫
console.log(window.customCat.toUpperCase()); // OK
console.log(customCat.toUpperCase()); // OK

// 也可在 TS 檔案中使用 declare global 來擴充 window 全域變數
declare global {
  interface Window {
    customRat: string;
  }
}
console.log(window.customRat.toUpperCase()); // OK

// 沒有使用 declare global 則無法擴充 window 全域變數
// interface Window {
//   customBunny: string;
// }
// console.log(window.customBunny);
