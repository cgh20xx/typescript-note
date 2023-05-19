// Readonly<T>：將型別 T 的所有屬性變為只讀。

interface Todo {
  title: string;
}
 
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
 
// todo.title = "Hello"; // error: Cannot assign to 'title' because it is a read-only property.

export {}