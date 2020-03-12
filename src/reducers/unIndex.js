import { combineReducers } from 'redux';
import BooksReducer from './reducersLibri';
import ActiveBook from './red_libro_attivo'


const rootReducer = combineReducers({
    books: BooksReducer,
    ActiveBook: ActiveBook
});

export default rootReducer;