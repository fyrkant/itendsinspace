import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Wrapper} from './pages/wrapper';
import {ReadIndex} from './pages/readindex';
import ReadNodes from './pages/components/readnodes';

export default (
	<Route path="/" component={Wrapper} >
		<Route path="read">
			<Route path=":key" component={ReadNodes}>
				<Route path=":choice" component={ReadNodes}/>
			</Route>
			<IndexRoute component={ReadIndex} />
		</Route>
	</Route>
);