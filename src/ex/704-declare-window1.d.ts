// ========== 宣告 window 全域變數 ==========
// 有 2 種方式可以擴充 window 全域變數：

// 1. 擴充 window 全域變數，只能使用 window 關鍵字呼叫，不能直接呼叫。
interface Window {
  customDog: string;
}

// 注意：使用 declare global 也是可以的，但要是在模組系統中才可使用，否則會報錯。
// declare global {
//   interface Window {
//     customDog: string;
//   }
// }

// 2. 使用 declare var 宣告全域變數，也會被視為 window 的屬性
declare var customCat: string;

// 兩種的差異：
// - 明確性：擴充 interface Window 更明確地指出了變數是 window 對象的一部分，而 declare var 則僅僅聲明一個全域變數的存在。對於添加到 window 的屬性，使用 interface Window 是一種更好的做法，因為這提供了更清晰的意圖表達和更好的類型安全。

// - 擴展性：如果需要聲明多個擴充到 window 的屬性，擴充 interface Window 可以在一處完成所有這些聲明，使得代碼更加整潔。而使用 declare var 則需要為每個全域變數單獨聲明。

// - 適用性：對於那些不一定屬於 window 對象的全域變數，或者在非瀏覽器環境中的全域變數（如 Node.js 中的全域變數），使用 declare var 會是更合適的選擇。

// 總的來說，選擇哪種方式取決於具體的使用場景和意圖。在擴充 window 對象時，建議使用擴充 interface Window 的方法，因為這提供了更好的類型安全和清晰度。对于不属于 window 对象的全局变量，或者在非浏览器环境中，则可以使用 declare var。
