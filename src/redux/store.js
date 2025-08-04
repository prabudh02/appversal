import { configureStore } from '@reduxjs/toolkit';
import membersReducer from './slices/membersSlice';
import roleReducer from './slices/roleslice.js';
import tasksReducer from './slices/tasksSlice';

export default configureStore({
  reducer: {
    members: membersReducer,
    role: roleReducer,
    tasks: tasksReducer
  }
});
// This store configuration combines the members, role, and tasks slices into a single Redux store.