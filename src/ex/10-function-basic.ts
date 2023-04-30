// ========== function ========== 


// parameter
function add(a: number, b: string) {
 return a + b;
}

let resault = add(1, '2') // 自動推導為 string

// 可選的參數 ? (需從最後一個參數開始用)
function setUser(name: string, age?: number) {
  // 若 age 為可選，直接使用會報錯，需先判斷 type 或是否存在

  // age.toString(); // error

  // (typeof age === 'number') && age.toString() // ok 方法1

  age?.toString() // ok 方法2
}

// return type 指定型別
function getString(): string {
  return 'hank'
}

// return type 未指定，自動推導型別
function getNumber() {
  return 123
}

// return void 沒有回傳值  
function doSomething(): void {
  console.log('no return')
}