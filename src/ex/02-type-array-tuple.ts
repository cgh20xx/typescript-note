/**
 * 陣列 array: 陣列元素沒有順序性，類型對了即可。
 * 元祖 tuple: 陣列元素類型有順序性且數量要一致。
 *
 * 陣列及元組的宣告方式不可混用
 */

// 單一元素陣列
const arr1: number[] = [1, 2, 3];
// arr1.push('1'); // 推入字串會報錯

const arr2 = [1, 2, 3]; // 自動推導為 number[]

// 多元素陣列 寫法1:
const arr3: (number | string)[] = [1, 2, '3'];
// 多元素陣列 寫法2:
const arr4: Array<number | string> = [1, 2, '3'];
// 多元素陣列 寫法3:(自動推導)
const arr5 = [1, 2, '3']; // 自動推導為 (string | number)[]
// 單一元素2維陣列
const arr6: number[][] = [[1], [1, 2], [1, 2, 3]];
// 多元素2維陣列
const arr7: (number | string)[][] = [[1], ['2', '2'], [1, 2, '3']];
// 多元素2維陣列 (實際應該不太會這樣寫)
const arr8: (number[] | string)[] = [[1], [2, 2], '3'];

// Tuple 元組
const tu1: [number, string, boolean] = [123, '456', true];
// Tuple 元組的陣列包陣列
const tu2: [number, number][] = [
  [1, 2],
  [3, 4],
];

// ======== 越界的元素 ========
// 當新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別：
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
// tom.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'.
console.log('tom:', tom);

// ======== 元組的指派性 ========
// 可變長度的陣列不能指派給元組

// 型別：(number | boolean)[]
const pairLoose = [false, 123];

// const pairTupleLoose: [boolean, number] = pairLoose;
// 錯誤：
// Type '(number | boolean)[]' is not assignable to type '[boolean, number]'.
// Target requires 2 element(s) but source may have fewer.ts(2322)
// 雖然 pairLoose 和 pairTupleLoose 看起來長度一樣，但是型別不同

// ======== 元組作為剩餘參數 ========
function logPair(name: string, age: number): void {
  console.log(`${name}: ${age}`);
}

// 類型：(string | number)[]
const pairArray = ['hank', 99];

// logPair(...pairArray);
// 錯誤：A spread argument must either have a tuple type or be passed to a rest parameter.ts
// 擴展引數必須具有元組類型或傳遞給剩餘參數。
// 嘗試傳入 (string | number)[] 給 logPair 函式是不安全的，可能是相同的型別或是數量不一致。

const pairTupleArray: [string, number] = ['hank', 99];
logPair(...pairTupleArray); // 正確

// ======== 沒有明確宣回傳型別 ========
// 回傳類別：(string | number)
function firstCharAndSize(str: string) {
  return [str[0], str.length];
}

// firstChar: string | number
// size: string | number
const [firstChar, size] = firstCharAndSize('hello');
// 這樣寫會有問題，因為 firstChar 及 size 的型別是 string | number

// ======== 明確宣告回傳元組型別 ========
function firstCharAndSizeExplicit(str: string): [string, number] {
  return [str[0], str.length];
}

// firstChar1: string
// size1: number
const [firstChar1, size1] = firstCharAndSizeExplicit('hello');
//

export {};
