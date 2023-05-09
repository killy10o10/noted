import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList } from '../redux/todoActions';
import { NavLink } from 'react-router-dom';
import TodoList from '../components/TodoList';

function ShowTodo() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todo.status);
  const todoList = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <>
      <div className="todo-input">
        <nav>
          <NavLink
            to="/todos"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            Add a Todo
          </NavLink>
          <NavLink
            to="/todo-list"
            className={({ isActive }) => (isActive ? 'link-active' : '')}
          >
            Todo List
          </NavLink>
        </nav>
        {isLoading === 'loading' ? (
          <p className="text-center">Loading...</p>
        ) : isLoading === 'failed' ? (
          <p className="text-center error-msg">Failed to load List items</p>
        ) : (
          <TodoList list={todoList} />
        )}
      </div>
    </>
  );
}

export default ShowTodo;
