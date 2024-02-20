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
const arr3: (number | string)[] = [1, 2, '3']
// 多元素陣列 寫法2:
const arr4: Array<number | string> = [1, 2, '3']
// 多元素陣列 寫法3:(自動推導)
const arr5 = [1, 2, '3'] // 自動推導為 (string | number)[]
// 單一元素2維陣列
const arr6: number[][] = [[1], [1, 2], [1, 2, 3]];
// 多元素2維陣列
const arr7: (number | string)[][] = [[1], ['2', '2'], [1, 2, '3']];
// 多元素2維陣列 (實際應該不太會這樣寫)
const arr8: ((number)[]| string)[] = [[1], [2, 2], '3'];

// Tuple 元組
const tu1: [number, string, boolean] = [123, '456', true];
// Tuple 元組的陣列包陣列
const tu2: [number, number][] = [[1, 2], [3, 4]];

// ======== 越界的元素 ========
// 當新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別：
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
// tom.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'.
console.log('tom:', tom);

// export {}
let num1: number = 100