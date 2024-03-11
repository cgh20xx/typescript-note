// ========== 使用 global 全域變數 ==========

// 這裡 version 是全域變數，所以不用 import 也不會報錯，但實際在執行的時候，還是要能呼叫的到它才行。
// 因為在 703-declare-global1.d.ts 中已經宣告過了
console.log(version);
