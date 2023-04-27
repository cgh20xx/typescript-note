/**
 * 陣列與元祖
 */

// 單一元素陣列
const arr1: number[] = [1, 2, 3];
// arr1.push('1'); // 推入字串會報錯
// arr1.push(null) // 推入 null 不會報錯
// arr1.push(undefined) // 推入 null 不會報錯
// console.log(arr1);

const arr2 = [1, 2, 3]; // 自動推導為 number[]
 
// 多元素陣列 寫法1:
const arr3: (number | string)[] = [1, 2, '3']
// 多元素陣列 寫法2:
const arr4: Array<number | string> = [1, 2, '3']
// 多元素陣列 寫法3:(自動推導)
const arr5 = [1, 2, '3'] // 自動推導為 (string | number)[]