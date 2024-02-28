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
