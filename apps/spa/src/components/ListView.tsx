import { TodoListDatum } from './TodoListDatum';

interface ListViewProps {
  todoListData: TodoListDatum[];
}

export function ListView({ todoListData: todos }: ListViewProps) {
  console.log({ todos });
  return (
    <div>
      <h1>hay {todos.length} todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}
