import {  useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList, addTodo } from '../redux/todoActions';
import TodoList from './TodoList';

function Todos() {
  const location = useLocation();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo);
  const isLoading = useSelector((state) => state.todo.status);
  const [todos, setTodos] = useState({
    description: '',
    deadline: '',
    priority: '',
  });
  const [error, setError] = useState('')

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  const { username } = location.state.user;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodos((prevTodo) => ({
      ...prevTodo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { description, deadline, priority } = todos;
    if (!description || !deadline || !priority) {
      setError('Please provide a todo description, deadline and priority!');
    } else {
      try{
        await dispatch(addTodo(todos)).unwrap();
        setError('')
        setTodos({
          description: "",
          deadline: "",
          priority: "",
        });
      }catch(error) {
        setError('Failed to add todo');
        console.log(error)
      }
    }
  };

  return (
    <>
      <section className="todo-section">
        <h3>
          What&apos;s up, <span className="user">{username}</span>
        </h3>
        <small>Add a todo</small>
        <div className="todo-input">
          <form className="todo-form">
            <input
              type="text"
              placeholder="eg. Walk the dog"
              name="description"
              onChange={handleChange}
            />
            <input type="date" name="deadline" onChange={handleChange} />
            <div className="priority-container">
              <div className="priorities">
                <label htmlFor="low-priority">
                  Low
                  <input
                    type="radio"
                    name="priority"
                    id="low-priority"
                    value="low"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="medium-priority">
                  Medium
                  <input
                    type="radio"
                    name="priority"
                    id="medium-priority"
                    value="medium"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="high-priority">
                  High
                  <input
                    type="radio"
                    name="priority"
                    id="high-priority"
                    value="high"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <small>Task Priority</small>
            </div>
            {error && <p className="error-msg">{error}</p>}
            <button onClick={handleSubmit} type="button" className="button">
              Add todo
            </button>
          </form>
        </div>
        {isLoading === 'loading' ? (
          <p className="text-center">Loading...</p>
        ) : (
          <TodoList list={todoList} />
        )}
      </section>
    </>
  );
}

export default Todos;
