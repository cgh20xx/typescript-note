// function Rest 參數

// 多個參數
function calculate1(...nums: number[]) {
  console.log(nums);
}

const nums1 = [1, 2, 3]
calculate1(...nums1);


function calculate2(a: number, b: number, c: number) {
  console.log(a);
  console.log(b);
  console.log(c);
}
// 這樣寫會出現錯誤：
// const nums2 = [1, 2, 3];
// calculate(...nums); // error: A spread argument must either have a tuple type or be passed to a rest parameter.

// 以下皆正常：
const nums2 = [1, 2, 3] as const;
// 什麼是 as const: 
// 官方說明：The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.
// chat-gpt：當你使用 as const 斷言時，TypeScript 會將所有的字面量類型（例如字符串、數字、布爾值、陣列等）都轉換為對應的「字面量類型」，而不是一般的「變量類型」。使用 as const 斷言時，TypeScript 會自動推斷出適當的類型，並且將它們轉換為常量。這樣做可以讓 TypeScript 編譯器進行更嚴格的類型檢查，避免出現一些潛在的錯誤。

// const nums2 = [1, 2, 3] as [number, number, number];
calculate2(...nums2);
