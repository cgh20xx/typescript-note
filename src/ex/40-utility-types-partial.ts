// ======== Utility Types =========
// Utility Types 可以幫助我們操作和轉換型別。
// 40 ~ 49 系列是一些常用的 Utility Types：

// Partial<T>：將型別 T 的所有屬性變為可選。

interface Todo {
  title: string;
  description: string;
}

// 由於 fieldsToUpdate 需要跟 todo 一樣的屬性，但屬性是可選的。
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log(todo2);

export {}