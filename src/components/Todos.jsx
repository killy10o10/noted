import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {AiTwotoneThunderbolt} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoList } from '../redux/todoActions';


function Todos() {
  const location = useLocation();
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo)

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch])

  console.log(todoList);
  const { username } = location.state.user
  const [todos, setTodos] = useState({
    description: '',
    deadline: '',
    priority: ''
  });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodos((prevTodo) => ({
      ...prevTodo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, deadline, priority } = todos;
    if (!description || !deadline || !priority) {
      onsubmit = false;
      setMessage('Please provide a todo description, deadline and priority!');
    } else {
      setMessage('');
      // console.log(todos)
      // postTodo(todos)
    }
  };

  return (
    <>
      <section className="todo-section">
        <h3>What&apos;s up, <span className="user">{username}</span></h3>
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
            {message && <p className="error-msg">{message}</p>}
            <button onClick={handleSubmit} type="button" className="button">
              Add todo
            </button>
          </form>
        </div>
        <div className="todo-list-container">
          <ul className="todo-list">
            <li><span className="high">Buy bread</span> <AiTwotoneThunderbolt /></li>
            <li><span className="low">walk the dog</span> <AiTwotoneThunderbolt /></li>
            <li><span className="medium">Eat fufu</span> <AiTwotoneThunderbolt /></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Todos;
