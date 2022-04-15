import { configureStore, combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from './reducers/transactionsReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  localStorage.setItem('budget-tracker', JSON.stringify(store.getState()));
});

export default store;
