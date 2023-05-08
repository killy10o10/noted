import { useState } from 'react';

export const useTodoForm = (addTodo) => {
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
        await addTodo(todos);
        setError('');
        setTodos({
          description: '',
          deadline: '',
          priority: '',
        });
      } catch (error) {
        setError('Failed to add todo');
        console.log(error);
      }
    }
  };

  return {
    todos,
    error,
    handleChange,
    handleSubmit,
  };
};
