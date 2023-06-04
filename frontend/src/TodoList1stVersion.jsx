import React from 'react';
import { useFetchTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from './hooks/useCrudHooks';

function TodoList() {
  const todos = useFetchTodos();
  const { todo, createTodo } = useCreateTodo();
  const { updatedTodo, updateTodo } = useUpdateTodo();
  const { deletedTodoId, deleteTodo } = useDeleteTodo();

  const handleCreateTodo = () => {
    const newTodo = {
      todo: "Do something nice for someone I care about",
      completed: true,
      userId: 26,
    };
    createTodo(newTodo);
  };

  const handleUpdateTodo = (id) => {
    const updatedFields = {
      completed: false,
    };
    updateTodo(id, updatedFields);
  };

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  return (
    <div>
      <button onClick={handleCreateTodo}>Create Todo</button>
      {todo && <p>New todo created with ID: {todo.id}</p>}

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.todo}</p>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}

      {updatedTodo && <p>Todo updated: {updatedTodo.id}</p>}
      {deletedTodoId && <p>Todo deleted with ID: {deletedTodoId}</p>}
    </div>
  );
}
export default TodoList;

