// Pick<Type, Keys>：從型別 Type 中挑選指定的屬性 Keys (可多選)。

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 從 Todo 裡只挑選出 title completed 屬性並產生新的 type TodoPreview
type TodoPreview = Pick<Todo, 'title' | 'completed'>;
 
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
 
todo; // 指標移到 todo 上會顯示 const todo: TodoPreview

export {}