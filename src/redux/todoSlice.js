import { createSlice } from '@reduxjs/toolkit';
import { fetchTodoList } from './todoActions';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    });
    builder.addCase(fetchTodoList.rejected, (state, action) => {
      state.status = 'failed';
      state.list = action.error.message;
    });
  },
});

export default todoSlice.reducer;
