// ========== enum ========== 
// ts 幫我們定義枚舉值不用去想數字，會們動產生不重覆的流水號。
// 官方文件: https://www.typescriptlang.org/docs/handbook/enums.html
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 以上 ts 編譯成 js 會自動編號，從 0 開始。如下

// var Direction;
// (function (Direction) {
//     Direction[Direction["Up"] = 0] = "Up";
//     Direction[Direction["Down"] = 1] = "Down";
//     Direction[Direction["Left"] = 2] = "Left";
//     Direction[Direction["Right"] = 3] = "Right";
// })(Direction || (Direction = {}));

enum Key {
  Up = 1, // 手動編號 1
  Down, // 自動編號從 2 開始
  Left = 5, // 手動編號 5
  Right,// 自動編號從 6 開始
}