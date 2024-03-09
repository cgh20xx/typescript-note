// ========== 宣告 JS 模組檔案型別 ==========

import { isTooLongFromModule } from './702-declare-js';
// isTooLongFromModule 這個 function 是從 JS 檔案中 import 進來的
// 但是因為有 702-declare-js.d.ts 這個檔案，所以可以正確的獲得型別提示。

const result = isTooLongFromModule('I wish I could fly');
console.log('result', result);
