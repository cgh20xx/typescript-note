// ========== resolveJsonModule ==========
// 如果將 tsconfig.json 中的 resolveJsonModule 設定為 true，
// 則 TypeScript 會將 JSON 檔案視為模組，並且可以使用 import 來載入 JSON 檔案。

// import 物件型別的 JSON 檔案
import { version } from './906-resolve-json-obj.json';
// import 陣列型別的 JSON 檔案，要使用 * as 來載入
import * as words from './906-resolve-json-array.json';

console.log('version:', version); // 1.0.0
console.log('words:', words[0]); // alpha