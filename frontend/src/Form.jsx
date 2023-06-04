import { useState } from 'react';
import { useCreateTodo } from './hooks/useCrudHooks';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');

  const { isLoading, createTask } = useCreateTodo();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   createTask(newItemName, {
  //     onSuccess: () => {
  //       setNewItemName('');
  //     },
  //   });
  // };
  return (
    // <form onSubmit={handleSubmit}>
    //   <h4>task bud</h4>
    //   <div className='form-control'>
    //     <input
    //       type='text '
    //       className='form-input'
    //       value={newItemName}
    //       onChange={(event) => setNewItemName(event.target.value)}
    //     />
    //     <button type='submit' className='btn' disabled={isLoading}>
    //       add task
    //     </button>
    //   </div>
    // </form>
    <div>hi from form</div>
  );
};
export default Form;
