/**
 * 基本型別可自動推導
 * 但 null 及 undefined 會自動推導為 any
 */

// Type Annotation (型別註記)
// 在變數後使用：即可
let num1: number = 100
let num2 = 100 // 自動推導型別為 number
const num3 = 100 // 自動推導型別為 100

let str1: string = 'hank'
let str2 = 'hank' // 自動推導型別為 string
const str3 = 'hank' // 自動推導型別為 "hank"

let boo1: boolean = false
let boo2 = false // 自動推導型別為 boolean
const boo3 = false // 自動推導型別為 false

let syb1: symbol = Symbol(1)
let syb2 = Symbol(1) // 自動推導型別為 symbol
const syb3 = Symbol(1) // 自動推導型別為 typeof syb3

// 宣告一個 void 型別的變數沒有什麼用，因為你只能將它賦值為 undefined：
let unusable: void = undefined;

// 注意：在 tsconfig.json strictNullChecks = false (預設為 false)的情況，
// 若已指定型別但又手動給值為 null 或 undefined 是給過的，如下：
// let num3: number = null
// let str3: string = null
// let boo3: boolean = null
// let syb3: symbol = null

// 注意：在 tsconfig.json strictNullChecks = false (預設為 false)的情況，
// 若手動指定 undefined 或 null 系統會自動推斷 type 為 any
let un1 = undefined // 注意: un1 type 為 any
let un2: undefined  // type 為 undefined
let nu1 = null // 注意: nu1 type 為 any
let nu2: null  // type 為 null

// 與 void 的區別是，undefined 和 null 是所有型別的子型別。也就是說 undefined 型別的變數，可以賦值給 number 型別的變數：
// 注意：在 tsconfig.json strictNullChecks = false (預設為 false)的情況，這樣不會報錯
// let num: number = undefined;

// 變數如果在宣告的時候，未指定其型別，也沒有指定值，那麼它會被識別為任意值型別：
let something;
something = 7;

//export {} // 新增 export {} 到所有檔案，使 ts 能將每個檔案視為獨立的模組，避免變數名稱衝突。
// 若有在 tsconfig 設定 "moduleDetection": "force" 上面就不用 export {}