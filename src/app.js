import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
import actions from './actions';

// Styles for Wenbpack to process and spit out .css
import '../_sass/style.scss';

ReactDOM.render(
	<Provider store={store} >
		<Router routes={routes} />
	</Provider>,
	document.getElementByID('root')
);

setTimeout(() => store.dispatch(actions.startListeningToStories()));