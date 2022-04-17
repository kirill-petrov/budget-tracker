import { configureStore, combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from './reducers/transactionsReducer';

const rootReducer = combineReducers({
  transactions: transactionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  localStorage.setItem('budget-tracker', JSON.stringify(store.getState()));
});

export default store;
