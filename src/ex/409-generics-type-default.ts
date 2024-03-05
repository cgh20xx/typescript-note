// ========== 泛型參數預設值 ==========
// 重要：泛型型別在型別註記(:)後使用或作為 extends 類別或 implements 介面的時候，必須要`明確指定泛型的引數型別`至少一個。
// 注意：所有`預設參數`型別必須要排在宣告的最後位置，類似函式的參數預設值。

// 將 V 的型別`預設值`設定為 K
interface KeyValuePair<K, V = K> {
  key: K;
  value: V;
}

// 型別：KeyValuePair<string, number>
let allExplicit: KeyValuePair<string, number> = {
  key: 'rating',
  value: 10,
};

// 型別：KeyValuePair<string, string>
let oneDefault: KeyValuePair<string> = {
  key: 'rating',
  value: 'A',
};

// 在型別註記後使用泛型型別，必須要明確指定泛型的引數型別，否則會報錯。
// let firstMissing : KeyValuePair =  { // 錯誤：Generic type 'KeyValuePair<K, V>' requires between 1 and 2 type arguments.ts(2707)
//   key: 'rating',
//   value: 10
// }
