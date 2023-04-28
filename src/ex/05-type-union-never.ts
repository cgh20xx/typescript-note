/**
 * union 符號為 | 可支援多個型別
 * never 永遠不會發生
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
if (typeof text1 === 'string') {
  // 因 text1 被改為 number 了，永遠進不到這行
  text1.split(''); // 這行的 text1 會變成 never 類型
}
