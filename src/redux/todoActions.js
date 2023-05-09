import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodoList = createAsyncThunk(
  'todo/fetchTodoList',
  async () => {
    const response = await axios.get('http://127.0.0.1:3000/todo-list', {
      withCredentials: true
    });
    return response.data;
  }
);

export const addTodo = createAsyncThunk('todo/addTodo', async (todoData) => {
  const response = await axios.post('http://127.0.0.1:3000/todo', todoData, {
    withCredentials: true
  });
  return response.data;
});
