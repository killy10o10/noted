/* eslint-disable react/prop-types */
import { useTodoForm } from "../hooks/useTodoForm";

function TodoForm({ handleAddTodo }) {
  const {todos, error, handleChange, handleSubmit} = useTodoForm(handleAddTodo)

  return (
    <div className="todo-input">
      <form className="todo-form">
        <input
          type="text"
          placeholder="eg. Walk the dog"
          name="description"
          value={todos.description}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          value={todos.deadline}
          onChange={handleChange}
        />
        <div className="priority-container">
          <div className="priorities">
            <label htmlFor="low-priority">
              Low
              <input
                type="radio"
                name="priority"
                id="low-priority"
                value="low"
                checked={todos.priority === 'low'}
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
                checked={todos.priority === 'medium'}
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
                checked={todos.priority === 'high'}
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
  );
}

export default TodoForm;
