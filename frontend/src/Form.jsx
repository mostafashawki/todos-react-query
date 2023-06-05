import { useState } from 'react';
import { useCreateTodo } from './hooks/customHooks';

const Form = () => {
  const [newTodo, setNewTodo] = useState('');

    // Create a new todo
    const createTodoMutation = useCreateTodo();

    const handleCreateTodo = async (e) => {
      e.preventDefault();
      const todoItem = {
        todo: newTodo,
        completed: false,
        userId: 26
      };
  
      try {
        await createTodoMutation.mutateAsync(todoItem);
        setNewTodo('');
      } catch (error) {
        console.error('Failed to create todo:', error);
      }
    };

 
  return (
    <form onSubmit={handleCreateTodo}>
      <h4>New Todo</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type='submit' className='btn' >
          add task
        </button>
      </div>
    </form>
  
  );
};
export default Form;
