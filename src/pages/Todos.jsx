import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addTodo } from '../redux/todoActions';

function Todos() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.todo.status)
  const [todos, setTodos] = useState({
    description: '',
    deadline: '',
    priority: '',
  });
  const [error, setError] = useState('');
 
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
      try {
        await dispatch(addTodo(todos)).unwrap();
        console.log(todos)
        setError('');
        setTodos({
          description: '',
          deadline: '',
          priority: '',
        });
      } catch (error) {
        console.log(todos)
        setError('Failed to add todo');
        console.log(error);
      }
    }
  };

  return (
    <>
      <section className="todo-section">
        <div className="todo-input">
          <nav>
            <NavLink to="/todos" className={({isActive}) => (isActive ? "link-active" : "")}>Add a Todo</NavLink>
            <NavLink to="/todo-list" className={({isActive}) => (isActive ? "link-active" : "")}>Todo List</NavLink>
          </nav>
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
            <button disabled={isLoading === "loading"} onClick={handleSubmit} type="button" className="button">
              {isLoading === "loading" ? "Adding todo..." : "Add todo"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Todos;
