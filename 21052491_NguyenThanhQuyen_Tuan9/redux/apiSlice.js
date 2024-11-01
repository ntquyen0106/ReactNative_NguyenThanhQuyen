// src/redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch todos from an API
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://671a3dbbacf9aa94f6a9ccd8.mockapi.io/job');
  if (!response.ok) {
    throw new Error('Failed to fetch data from MockAPI');
  }
  const data = await response.json();
  console.log('Fetched data:', data); // Kiểm tra dữ liệu nhận được
  return data; // Trả về dữ liệu mới
});

const apiSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    editTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) state[index].jobName = action.payload.jobName;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      return action.payload; // Trả về tất cả công việc từ API
    });
  }
});

export const { addTodo, editTodo, deleteTodo } = apiSlice.actions;
export default apiSlice.reducer;
