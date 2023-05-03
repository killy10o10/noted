import { useState } from 'react';
// import { postTodo } from "../auth/todo"

function Todos() {
  const [todos, setTodos] = useState({
    description: '',
    deadline: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setTodos((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, deadline } = todos;
    if (!description || !deadline) {
      onsubmit = false;
      setMessage('Please provide a todo description and deadline');
    } else {
      setMessage('');
      console.log(todos);
      // postTodo(todos)
    }
  };

  return (
    <>
      <section className="todo-section">
        <h3>What&apos;s up, Quami</h3>
        <small>Add a todo</small>
        <div className="todo-input">
          <form onSubmit={handleSubmit} className="todo-form">
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
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="medium-priority">
                  Medium
                  <input
                    type="radio"
                    name="priority"
                    id="medium-priority"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="high-priority">
                  High
                  <input
                    type="radio"
                    name="priority"
                    id="high-priority"
                    onChange={handleChange}
                  />
                </label>
              </div>
                <small>Task Priority</small>
            </div>
            <button type="button" className="button">
              Add todo
            </button>
            {message && <p className="error-msg">{message}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

export default Todos;
