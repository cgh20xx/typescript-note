/**
 * union: 符號為 | 可支援多個型別
 * never: 永遠不會發生
 * 強制斷言: as unknown as 其它型別
 */

// union
let arr9: (string | number)[] = []
arr9.push('hank')
arr9.push(123)

let text1: string | number
text1 = 'hank' // pass
text1 = 123 // pass
// text1 = true // error

// never
// if (typeof text1 === 'string') {
//   // 因 text1 被改為 number 了，永遠進不到這行
//   text1.split(''); // 這行的 text1 會變成 never 類型
// }

// 強制斷言
let text2 = 123
// 假設有特殊需求要將 text3 強制改為其它型別(如打API回來型別不同?)
// 可先斷言成 any 或 unknow(推薦) 再斷言成其它型別
// let text3 = text2 as unknown as string
let text3 = text2.toString()
text3 = 'abc'