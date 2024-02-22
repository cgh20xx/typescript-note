// function overloads 中文翻譯成：重載 | 多載 | 過載

// 過載允許一個函式接受不同數量或型別的引數時，作出不同的處理。

// 比如，我們需要實現一個函式 reverse，輸入數字 123 的時候，輸出反轉的數字 321，
// 輸入字串 'hello' 的時候，輸出反轉的字串 'olleh'。

// 之前使用用聯合型別 (union)，可以這麼做：
// function reverse(x: number | string): number | string {
//   if (typeof x === 'number') {
//       return Number(x.toString().split('').reverse().join(''));
//   } else {
//       return x.split('').reverse().join('');
//   }
// }
// reverse(123)
// reverse('hank')

// 然而這樣有一個缺點，就是不能夠精確的表達，輸入為數字的時候，
// 輸出也應該為數字，輸入為字串的時候，輸出也應該為字串。

// 這時，我們可以使用重載特徵(overload signatures) 宣告多個不同版本的函數名稱、參數和回傳型別
function reverse(x: number): number;
function reverse(x: string): string;
// 最後再一個實作特徵(implementation signature)，實作特徵必預與所有重載特徵相容
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''));
  } else {
      return x.split('').reverse().join('');
  }
}
reverse(123)
reverse('hank')

// 上例中，我們重複定義了多次函式 reverse，前幾次都是函式定義，最後一次是函式實現。在編輯器的程式碼提示中，可以正確的看到前兩個提示。
// 注意，TypeScript 會優先從最前面的函式定義開始匹配，所以多個函式定義如果有包含關係，需要優先把精確的定義寫在前面(上面)。

//  Do sort overloads by putting the more general signatures after more specific signatures:
/* OK */
// declare function fn(x: HTMLDivElement): string;
// declare function fn(x: HTMLElement): number;
// declare function fn(x: unknown): unknown;
// var myElem: HTMLDivElement;
// var x = fn(myElem); // x: string, :)

export {}