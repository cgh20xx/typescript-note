/**
 * 回傳 void 型別
 * 
 * 有些函式並不帶有任何回傳值，一程是沒有 return 語句，另一種是 return 語句上沒有回傳的數值。
 * 
 */

// 有 return 語法，但沒東西
function logSong(song?: string): void {
  if (!song) {
    
    return; // 正確
  }

  // return true; // 錯誤：Type 'boolean' is not assignable to type 'void'.
}
logSong('abc')


let songLogger: (song: string) => void;
songLogger = (song) => {
  console.log(`${song}`)
  // 沒有 return 語法
}
songLogger('Hear of Glass'); // 正確 


/**
 * 注意：如果是用 type 宣告一個回傳 void 的函式，則會忽略函式內的 return。
 */
type ReturnVoid = () => void
let returnVoid: ReturnVoid = function() {
  return 123
}
returnVoid();


/**
 * 注意：儘管 js 函數在沒有實際數值回傳的情況下，預設是回傳 undefined，
 * 但 void 與 undefined 是不一樣的，void 表函數的回傳型別將被忽略，而 undefined 是回傳的字面數值！
 */
const records: string[] = []
function saveRecords(newRecords: string[]) {
  newRecords.forEach(item => {
    // forEach 接受一個回傳 void 的函式
    // 所以 records.push() 雖回傳 number 但被忽略了，沒有報錯！
    return records.push(item) // number
  })
}
saveRecords(['aa', 'bb', 'cc'])



export {}