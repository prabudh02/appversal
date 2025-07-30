import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ 
        ...action.payload, 
        id: Date.now(),
        progress: 0,
        completed: false 
      });
    },
    updateProgress: (state, action) => {
      const { id, amount } = action.payload;
      const task = state.find(t => t.id === id);
      if (task) {
        task.progress = Math.min(100, Math.max(0, task.progress + amount));
        task.completed = task.progress >= 100;
      }
    }
  }
});

export const { addTask, updateProgress } = tasksSlice.actions;
export default tasksSlice.reducer;