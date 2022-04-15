import { configureStore, combineReducers } from '@reduxjs/toolkit';
import transactionsReducer from './reducers/transactionsReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
  counter: transactionsReducer,
  todo: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// store.subscribe(() => {
//   localStorage.setItem('rSandbox', JSON.stringify(store.getState()));
// });

export default store;
