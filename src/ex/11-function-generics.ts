// 泛型 Generics
// 使用 < > 符號包住
// 將函式參數的型別決定權，交由外部使用時才決定要傳入什麼型別。

// T 表示 type 的意思，可以是任何自訂的名稱，只是大家習慣用 T。

function print<T>(data: T) {
  console.log(data);
}

// 如果不使用泛型，就需要寫很多次
// function print1(data: string) {
//   console.log(data);
// }

// function print2(data: number) {
//   console.log(data);
// }

// function print3(data: boolean) {
//   console.log(data);
// }

// 使用 print 會自動推導傳入的參數型別
print('hank')
print(123)
print(true)

// 也可顯示的寫的泛型告訴傳入的參數型別
print<string>('hank')
print<number>(123)
print<boolean>(true)

export {}