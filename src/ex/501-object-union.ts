// ========== 可辨識的聯集 ==========
// 在 JS 和 TS 中，聯集型別的另一種常見型式是在物件上，
// 會用一個屬性來指示物件的型態，這種型態被稱為`可辨識的聯集`(discriminant union)。
// 其值表示物件的型別屬性是`可被分辨的`，能夠提供 TS 作為識別，進行程式碼型別防護的窄化。

type PoemWithPages = {
  name: string;
  type: 'pages';
  pages: number; // 不同的屬性
};

type PoemWithRhymes = {
  name: string;
  type: 'rhymes';
  rhymes: boolean; // 不同的屬性
};

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: 'poem1', type: 'pages', pages: 10 }
    : { name: 'poem2', type: 'rhymes', rhymes: true };

// 型別窄化：只有在 type 為 'pages' 時，才能存取 pages 屬性，否則不
if (poem.type === 'pages') {
  console.log(`It pages: ${poem.pages}`);
} else {
  console.log(`It rhymes: ${poem.rhymes}`); // poem.rhymes: boolean
}

poem.type; // "pages" | "rhymes"

// 未經過型別窄化，無法存取 pages 屬性
// poem.pages; // Error: Property 'pages' does not exist on type 'PoemWithRhymes'.

// ========= 泛型可辨識的聯集 =========
// 此例 Result 泛型型別具有一個 succeeded 屬性，用來辨識成功或失敗的狀態，
// 並需使用判斷式來進行型別窄化，限縮為成功或失敗。

type Result<Data> = FailureResult | SuccessfulResult<Data>;

type SuccessfulResult<Data> = {
  succeeded: true;
  data: Data;
};

type FailureResult = {
  succeeded: false;
  error: Error;
};

function handleResult(result: Result<string>) {
  if (result.succeeded) {
    // result 型別被窄化為 SuccessfulResult<string>
    console.log(result.data);
  } else {
    // result 型別被窄化為 FailureResult
    console.error(result.error);
  }

  // 未窄化就直接存取 data 屬性，會出現 2 個錯誤
  // result.data
  // 錯誤：Property 'data' does not exist on type 'Result<string>'.
  // 錯誤：Property 'data' does not exist on type 'FailureResult'.
}
