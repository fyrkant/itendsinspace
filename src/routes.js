import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Wrapper from './pages/wrapper';
import MultiRoute from './pages/components/multiroute';
import ReadHome from './pages/readhome';
import ReadNodes from './pages/components/readnodes';

export default (
	<Route path="/" component={Wrapper} >
		<IndexRoute component={ReadHome} />
	</Route>
);


// <Route path="read" component={MultiRoute}>
// 			<Route path=":key" component={ReadNodes}>
// 				<Route path=":choice" component={ReadNodes}/>
// 			</Route>
// 			<IndexRoute component={ReadHome} />
// 		</Route>