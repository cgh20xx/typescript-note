/**
 * 基本型別可自動推導
 * 但 null 及 undefined 會自動推導為 any
 */

let num1: number = 100
let num2 = 100 // 自動推導型別為 number
let str1: string = 'hank'
let str2 = 'hank' // 自動推導型別為 string
let boo1: boolean = false
let boo2 = false // 自動推導型別為 boolean
let syb1: symbol = Symbol(1)
let syb2 = Symbol(1) // 自動推導型別為 symbol

// 注意：若已指定型別但又手動給值為 null 或 undefined 是給過的，如下：
let num3: number = null
let str3: string = null
let boo3: boolean = null
let syb3: symbol = null

// 注意：以下若手動指定 undefined 或 null 系統會自動推斷 type 為 any
let un1 = undefined // 注意: un1 type 為 any
let un2: undefined  // type 為 undefined
let nu1 = null // 注意: nu1 type 為 any
let nu2: null  // type 為 null