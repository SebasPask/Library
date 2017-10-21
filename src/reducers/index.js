
import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';
import DvdsReducer from './reducer_dvd';
const rootReducer = combineReducers({
  books: BooksReducer,
    book: BooksReducer(sebas,asd)
});

export default rootReducer;
