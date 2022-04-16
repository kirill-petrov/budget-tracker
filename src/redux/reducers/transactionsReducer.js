/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const data = JSON.parse(localStorage.getItem('budget-tracker') || '{}');

const initialState = data.transactions ? data.transactions : [];

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    transactionDelete: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
    transactionAdd: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { transactionAdd, transactionDelete } = transactionsSlice.actions;

export default transactionsSlice.reducer;
