// Omit<Type, Keys>：從型別 Type 中排除指定的屬性 Keys (可以是 Union Types)。

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

// 從 Todo 裡排除 description 屬性並產生新的 type TodoPreview
type TodoPreview = Omit<Todo, 'description'>;
 
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};
 
todo; // 指標移到 todo 上會顯示 const todo: TodoPreview

// 從 Todo 裡排除 completed 及 createdAt 屬性並產生新的 type TodoPreview
type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;
// 注意：'completed' | 'createdAt' 是 TS 的 Union type 不是 JS 裡的 or
 
const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};
 
todoInfo; // 指標移到 todoInfo 上會顯示 const todoInfo: TodoInfo

export {}