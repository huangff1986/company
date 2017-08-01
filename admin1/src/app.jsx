import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import route from './router/route';

import 'babel-polyfill';

import './style/common.less';

store.subscribe(() => {

});

// 创建根组件
render(
	<Provider store={store}>
		{route}
	</Provider>,
	document.body.appendChild(document.createElement('div'))
);