// ========== 型別敘述 type predicate ===========
// 型別敘述：回傳型別用參數名稱 + is + 型別名稱
// function 回傳值用型別敘述的方式告訴 ts 這是一個型別斷言函數

// 先來看一個`型別窄化`例子：
// 1. 若在 if 中，對一個聯合型別的值進行了 typeof 檢查，那麼 TypeScript 會在 if 語句內中將值的型別縮小為檢查過的型別。
function logValueIfExists1(value: number | string | null | undefined) {
  if (typeof value === 'number' || typeof value === 'string') {
    // value: string | number
    value.toString(); // OK
  }
}

// 2. 改寫上個例子，將判斷邏輯抽取成一個函數
function isNumberOrString2(value: unknown) {
  return typeof value === 'number' || typeof value === 'string';
}

// 要注意的是 ts 只知道 logValueIfExists2 返回的是 boolean，並不知道是為了窄化型別！
function logValueIfExists2(value: number | string | null | undefined) {
  if (isNumberOrString2(value)) {
    // value.toString(); // Error: 'value' is possibly 'null' or 'undefined'.ts(18049)
  }
}

// !!! 重點來了 !!!
// 3. 回傳型別用參數名稱 + is + 型別名稱，告訴 ts 這是一個型別斷言函數
function isNumberOrString3(value: unknown): value is number | string {
  return typeof value === 'number' || typeof value === 'string';
}

function logValueIfExists3(value: number | string | null | undefined) {
  if (isNumberOrString3(value)) {
    // value: string | number
    value.toString(); // OK
  }
}

// 要注意的是，因為型別敘述在錯誤的情況下也會窄化型別，如果型別敘述檢查的不僅僅是其輸入型別，可能會得到意想不到的結果。
// 故意將 input 的型別多加一個 undefined
function isLongString(input: string | undefined): input is string {
  return !!(input && input.length > 10);
}

function workWithText(text: string | undefined) {
  if (isLongString(text)) {
    // text: string
    console.log('Long text:', text.length); // OK
  } else {
    // text 不如預期，並非為 string，而是 undefined
    // text: undefined
    console.log('Short text:', text); // OK
  }
}

// 補充：如最後一個例子，驗証屬性或數值很容易讓型別敘述被誤用。通常建議盡可能避免使用它，對於大多數的情況，簡單的型別敘述就足夠了！
