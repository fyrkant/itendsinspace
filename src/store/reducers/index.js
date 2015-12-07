import {combineReducers} from 'redux';
import done from './done';
import writing from './writing';

let rootReducer = combineReducers({
    done,
    writing
});

export default rootReducer;