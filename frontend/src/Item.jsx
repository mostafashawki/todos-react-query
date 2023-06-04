// import { useDeleteTask, useEditTask } from './hooks/useCrudHooks';

// import { useFetchTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from './hooks/useCrudHooks';
import { useGetTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from './hooks/customHooks';


const Item = ({ item }) => {
  // const { editTask } = useEditTask();
  // const { deleteTask, deleteTaskLoading } = useDeleteTask();

  // const { updatedTodo, updateTodo } = useUpdateTodo();
  // const { deletedTodoId, deleteTodo } = useDeleteTodo();

   // Create a new todo
   const createTodoMutation = useCreateTodo();

   // Update an existing todo
   const updateTodoMutation = useUpdateTodo();
 
   // Delete a todo
   const deleteTodoMutation = useDeleteTodo();

  // const handleUpdateTodo = (id) => {
  //   const updatedFields = {
  //     completed: false,
  //   };
  //   updateTodo(id, updatedFields);
  // };

  // const handleDeleteTodo = (id) => {
  //   deleteTodo(id);
  // };

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
        onClick={() => handleDeleteTodo(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default Item;
