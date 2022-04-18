import { configureStore, combineReducers } from '@reduxjs/toolkit';
import transactionsSlice from './reducers/transactionsSlice';

const rootReducer = combineReducers({
  transactions: transactionsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  localStorage.setItem('budget-tracker', JSON.stringify(store.getState()));
});

export default store;
