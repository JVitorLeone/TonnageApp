import { configureStore } from '@reduxjs/toolkit';

import muscleReducer from './muscleSlice';

export default configureStore({
  reducer: {
    muscle: muscleReducer,
  },
});