import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import counterReducer from './slice/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});
