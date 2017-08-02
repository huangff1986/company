import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Config from '../config/index';
import layout from '../component/layout/layout'; // 布局界面

import login from '../containers/login/login';

class Roots extends Component {
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
		return (
			<div>{this.props.children}</div>
		);
	}
}

// 模块的按需加载
// 页面需要访问的时候再加载
// require.ensure( [依赖模块]， 需要按需加载的callback, webpack为模块打包后的chunk文件名  )

// 首页
const home = (locationm, cb) => {
	require.ensure([], require => {
		cb(null, require('../containers/home/homeIndex').default)
	}, 'home');
}

// 新闻管理
const news = ( location, cb ) => {
	require.ensure([], require => {
		cb(null, require('../containers/news/lines').default)
	}, 'news')
}

// 用户管理
const user = ( location, cb ) => {
	require.ensure([], require => {
		cb(null, require('../containers/user/userIndex').default)
	}, 'user')
}

// 登录验证
const requireAuth = (nextState, replace) => {
	let token = (new Date()).getTime() - Config.localItem('USER_AUTHORIZATION');
	if(token > 7200000) {
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname }
		});
	}
}

const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/home" component={layout} onEnter={requireAuth}>
			<IndexRoute path="/home" getComponent={home} onEnter={requireAuth} />
		</Route>
	</Router>
);

export default RouteConfig;