/**
 * unknown 和 any 很像
 * unknown 是比較安全的 any
 * ts 用太多 any 不如直接就寫 js
 */


let name1: unknown = 'hank'
name1 = 123

// 斷言 Assertions ?
// 使用 as 關鍵字來指定型別
let name2: unknown = 'hank2'
let name3 = name2 as string

// 斷言 as 的應用
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  // 使用 as 關鍵字強制給 data 添加物件型別
  const data = await res.json() as { 
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  console.log(data)
}

getData()

// any 與 unknown
// 若使用 any 則可能沒辦法在編譯時期檢查到錯誤
const flag = false
function getFullName() {
  let myName: unknown // 使用 unknown 會比較嚴格
  if (flag) {
    myName = 'hank hsiao'
  } else {
    myName = null
  }
  return myName;
}
const fullName = getFullName();
// 因回傳的 fullName 是 unknown，若未使用 typof 判斷型別，使用 fullName 會報錯。
if (typeof fullName === 'string') {
  fullName.split('')
}

