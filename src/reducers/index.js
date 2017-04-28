import { combineReducers } from 'redux';
import bookReducer from './reducer_book'
const rootReducer = combineReducers({
  books: bookReducer
});

export default rootReducer;
