import { createSlice } from '@reduxjs/toolkit';

export const muscleSlice = createSlice({
  name: 'muscle',
  initialState: {
    muscles: [
      {
        id: 1,
        description: "Peito",
      },
      {
        id: 2,
        description: "Costas",
      },
      {
        id: 3,
        description: "Ombros",
      },
      {
        id: 4,
        description: "Bíceps",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      // Add to database
      action.payload.id = state.muscles.slice(-1)[0].id + 1;
      state.muscles.push(action.payload);
    },
    remove: (state, action) => {
      const muscleIndex = state.muscles.findIndex(m => m.id == action.payload)
      if (muscleIndex !== -1) {
        // remove from database
        state.muscles.splice(muscleIndex, 1);
      }
    },
    update: (state, action) => {
      const muscleIndex = state.muscles.findIndex(m => m.id == action.payload.id)
      if (muscleIndex !== -1) {
        // update database
        state.muscles[muscleIndex] = action.payload;
      }
    },
  },
});

export const { add, remove, update } = muscleSlice.actions;

export default muscleSlice.reducer;