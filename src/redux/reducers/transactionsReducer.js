/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// const data = JSON.parse(localStorage.getItem('rSandbox') || '{}');

const initialState = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
];

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    // decrement: (state) => {
    //   state.count -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload;
    // },
  },
});

export const { increment } = transactionsSlice.actions;

export default transactionsSlice.reducer;
