import { createSlice } from '@reduxjs/toolkit';

const membersSlice = createSlice({
  name: 'members',
  initialState: [
    { id: 1, name: 'John Doe', status: 'Working' },
    { id: 2, name: 'Jane Smith', status: 'Meeting' },
    { id: 3, name: 'Bob Johnson', status: 'Break' },
    { id: 4, name: 'Alice Williams', status: 'Offline' }
  ],
  reducers: {
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const member = state.find(m => m.id === id);
      if (member) member.status = status;
    },
    addMember: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { updateStatus, addMember } = membersSlice.actions;
export default membersSlice.reducer;