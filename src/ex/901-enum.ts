// ========== enum 自動賦值 ==========
// ts 幫我們定義枚舉值不用去想數字，會們動產生不重覆的流水號。
// 列舉成員會被賦值為從 0 開始遞增的數字，同時也會對列舉值到列舉名進行反向對映
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

// ========== enum 手動賦值 ==========
// 注意：如果未手動賦值的列舉項與手動賦值的重複了，TypeScript 是不會察覺到，
// 所以手動賦值要注意不要跟自動賦值產生的流水號重覆了
enum Key {
  Up = 1, // 手動編號 1
  Down, // 自動編號從 2 開始
  Left = 5, // 手動編號 5
  Right, // 自動編號從 6 開始
}

// =============================
enum STRING_GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

type T1 = STRING_GENDER extends string ? true : false; // true
type T2 = string extends STRING_GENDER ? true : false; // false
type T3 = string extends STRING_GENDER.MALE ? true : false; // false
type T4 = 'male' extends STRING_GENDER ? true : false; // false
type T5 = 'male' extends STRING_GENDER.MALE ? true : false; // false
type T6 = STRING_GENDER.MALE extends STRING_GENDER ? true : false; // true
type T7 = STRING_GENDER.MALE extends string ? true : false; // true
type T8 = STRING_GENDER extends STRING_GENDER.MALE ? true : false; // false

enum NUMERIC_GENDER {
  MALE,
  FEMALE,
}

type T11 = NUMERIC_GENDER extends number ? true : false; // true
type T12 = number extends NUMERIC_GENDER ? true : false; // true
type T13 = number extends NUMERIC_GENDER.MALE ? true : false; // true
type T14 = 10 extends NUMERIC_GENDER ? true : false; // true
type T15 = 10 extends NUMERIC_GENDER.MALE ? true : false; // true
type T16 = NUMERIC_GENDER.MALE extends NUMERIC_GENDER ? true : false; // true
type T17 = NUMERIC_GENDER.MALE extends number ? true : false; // true
type T18 = NUMERIC_GENDER extends NUMERIC_GENDER.MALE ? true : false; // false
type T19 = NUMERIC_GENDER.MALE extends NUMERIC_GENDER.FEMALE ? true : false; // false

// ========= 常數列舉 =========
// 常數列舉是使用 const enum 定義的列舉型別：
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
// 常數列舉與普通列舉的區別是，它會在編譯階段被刪除，並且不能包含計算成員。
// 上例的編譯結果是
// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

export {};
