import { combineReducers } from 'redux';
import bookReducer from './reducer_book'
import ActiveBook from './reducer_active_book'
const rootReducer = combineReducers({
  books: bookReducer,
  activeBook: ActiveBook
});

export default rootReducer;
