import C from '../constants';
import Firebase from 'firebase';

let storiesRef = new Firebase(C.FIREBASE).child('stories/done');

export default {
    startListeningToStories() {
        return (dispatch, getState) => {
            storiesRef.on('value',
                snapshot => dispatch({type: C.RECEIVE_STORIES_DATA, data: snapshot.val()})
            );
        };
    }
};