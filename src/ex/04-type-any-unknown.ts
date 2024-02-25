/**
 * unknown 和 any 很像
 * unknown 是比較安全的 any
 * 使用 unknown 類型時，會要求明確處理類型檢查，不能像 any 隨意調用任何方法或屬性。
 * ts 用太多 any 不如直接就寫 js
 */

let name1: unknown = 'hank';
name1 = 123;

// any 與 unknown
// 若使用 any 則可能沒辦法在編譯時期檢查到錯誤
const flag = false;
function getFullName() {
  let myName: unknown; // 使用 unknown 會比較嚴格
  if (flag) {
    myName = 'hank hsiao';
  } else {
    myName = null;
  }
  return myName;
}
const fullName = getFullName();
// 因回傳的 fullName 是 unknown，若未使用 typeof 判斷型別，使用 fullName 會報錯。
if (typeof fullName === 'string') {
  fullName.split('');
}

export {};
