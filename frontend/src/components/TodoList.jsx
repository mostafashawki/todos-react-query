import React from 'react';
import { useGetTodos } from '../hooks/customHooks';
import Item from './TodoItem'

function TodoList() {
  // Fetch all todos
  const { data: todos, isLoading, isError } = useGetTodos();

  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>;
  }
  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>There was an error...</p>;
  }


  return (
    <div className='items'>
      {todos.map((item) => {
        return <Item key={item._id} item={item} />;
      })}
    </div>
  );

}
export default TodoList;

