import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodoList = createAsyncThunk(
  'todo/fetchTodoList',
  async (_, { getState }) => {
    const { user } = getState().auth;
    const token = user.token;

    const response = await axios.get('http://127.0.0.1:3000/todo-list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);
