import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk('auth/signIn', async (credentials) => {
  const response = await axios.post('http://127.0.0.1:3000/sign-in', credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoading: false,
    error: null
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  }
})

export default authSlice.reducer;