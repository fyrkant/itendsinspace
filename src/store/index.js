import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialstate';

export default applyMiddleware(thunk)(createStore)(rootReducer, initialState);