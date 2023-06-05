import { useUpdateTodo, useDeleteTodo } from './hooks/customHooks';


const Item = ({ item }) => {

   // Update an existing todo
   const updateTodoMutation = useUpdateTodo();
 
   // Delete a todo
   const deleteTodoMutation = useDeleteTodo();

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await updateTodoMutation.mutateAsync(updatedTodo);
    } catch (error) {
      console.error('Failed to update todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => handleUpdateTodo({ ...item, completed: !item.completed })}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.todo}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        // disabled={deleteTaskLoading}
        onClick={() => handleDeleteTodo(item._id)}
      >
        delete
      </button>
      <pre>{item._id}</pre>
    </div>
  );
};
export default Item;
