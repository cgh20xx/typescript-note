// 雖然是 .js 檔，但 TS 還是可以推斷出的回傳型別為 boolean，但是 text 的型別為 any
export function isTooLongFromModule(text) {
  if (text.length > 10) {
    return true;
  } else {
    return false;
  }
}
