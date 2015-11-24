import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloworld';
import '../_sass/style.scss';

ReactDOM.render(
	<HelloWorld message="Howdy y'all!!" />,
	document.getElementById('root')
);