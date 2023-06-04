import { ToastContainer } from 'react-toastify';
import Form from './Form';
import TodoList from './TodoList';

const App = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <TodoList />
      hi
    </section>
  );
};
export default App;