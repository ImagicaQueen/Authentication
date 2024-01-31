import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerReducer from "../slices/registerSlice"
import { verify } from 'crypto';

export const store = configureStore({
  reducer: {
    register:registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
