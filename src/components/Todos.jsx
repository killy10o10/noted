import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoActions';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { useTodoForm } from '../hooks/useTodoForm';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todos() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, todoList } = useFetchTodos();
  const { todos} = useTodoForm(handleAddTodo);
  const [addTodoError, setAddTodoError] = useState('');

  const { username } = location.state.user;
  async function handleAddTodo() {
    try {
      await dispatch(addTodo(todos)).unwrap();
      setAddTodoError('');
    } catch (error) {
      setAddTodoError('Failed to add todo');
      console.log(error);
    }
  }

  return (
    <>
      <section className="todo-section">
        <h3>
          What&apos;s up, <span className="user">{username}</span>
        </h3>
        <small>Add a todo</small>
        <TodoForm handleAddTodo={handleAddTodo} />
        {addTodoError && <p className="error-msg">{addTodoError}</p>}
        {isLoading === 'loading' ? 
          <p className="text-center">Loading...</p>
         :
         isLoading === 'failed' ?
         <p className="text-center error-msg">An error occured! Failed to load list items</p>
         : 
          <TodoList list={todoList} />
        }
      </section>
    </>
  );
}

export default Todos;

