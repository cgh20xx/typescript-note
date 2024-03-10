// ========== 模組宣告 declare module ==========
// 可以在模組名稱的字串之前使用 declare 關鍵字，告告知型別系統該模組的內容。

// 檔案：module.d.ts
// declare module "my-example-lib" {
//   export const someValue: number;
// }

// 檔案：index.ts
// import { someValue } from "my-example-lib";

// ========== 擴充 pixi.js 模組範例 ==========

/**
 * 擴充 PIXI.Rectangle 的函式庫
 *
 * 注意：這邊以 pixi.js v7.3.1 為例，pixi.js 在 v8 版本做法有所不同。
 */

import { Rectangle } from 'pixi.js';
// 侵入 pixi.js 模組，在模組裡為 Rectangle 增加新的方法。
declare module 'pixi.js' {
  interface Rectangle {
    /**
     * 檢查另一個矩形是否在這個矩形內
     * @param other 另一個矩形
     * @returns boolean
     */
    containsRect(other: Rectangle): boolean;
  }
}

Rectangle.prototype.containsRect = function (other) {
  return (
    other.x >= this.x &&
    other.y >= this.y &&
    other.right <= this.right &&
    other.bottom <= this.bottom
  );
};
