import C from '../../constants';
import initialState from '../initialstate';

export default (currentState, action) => {
    //let newState;

    switch(action.type) {
    case C.RECEIVE_STORIES_DATA:
        return Object.assign({}, currentState, {
            hasReceivedData: true,
            data: action.data
        });
    default: return currentState || initialState.done;
    }
};