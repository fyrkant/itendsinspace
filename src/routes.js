import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Wrapper} from './pages/wrapper';
import MultiRoute from './pages/components/multiroute';
import ReadHome from './pages/readhome';
import ReadNodes from './pages/components/readnodes';

export default (
	<Route component={Wrapper} path="/" >
		<IndexRoute component={ReadHome} />
	</Route>
);