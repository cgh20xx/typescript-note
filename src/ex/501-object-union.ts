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
