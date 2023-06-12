import { ToastContainer } from 'react-toastify';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <TodoList />
    </section>
  );
};
export default App;