import {applyMiddleWare, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialstate';

export default applyMiddleWare(thunk)(createStore)(rootReducer, initialState);