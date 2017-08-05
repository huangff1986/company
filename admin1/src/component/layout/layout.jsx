/* layout 的职责 */
/*
 *  定义后台的通用部分 
 */ 

import React, { Component, PropTypes } from 'react';
import pureRender from 'pure-render-decorator';
import { Histroy, Link } from 'react-router';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';

// layout 其他部件
// import { Lheader } from './lheader';
// import { Lmenu } from './lmenu';
// import { Lfooter } from './lfooter';

// 布局样式
// import './style/layout.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Main
 * @extends {Component}
 */

class Main extends Component {
 	constructor(props) {
 		super(props);
 		// 展开/收起
 		// 判断本地存储 COLLAPSED 字段是否为 YES
 		const collapsed = Config.localItem('COLLAPSED') == 'YES' ? true : false;
 		// Main组件的状态管理
 		this.state = {
 			collapsed: collapsed,
 			mode: collapsed ? 'vertical' : 'inline',
 		};
 	}
 	// 用于修改 Collapse的值
 	onCollapse = (collapsed) => {
 		if(collapsed) Config.localItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
 		this.setState({
 			collapsed,
 			mode: collapsed ? 'vertical' : 'inline'
 		})
 	}
	toggle = (collapsed) => {
		if(collapsed) Config.localItem('COLLAPSED', 'YES'); else Config.localItem('COLLAPSED', 'NO');
	    this.setState({
	      collapsed: collapsed,
	      mode: collapsed ? 'vertical' : 'inline'
	    });
  	}
  	// 当组件更新时
	shouldComponentUpdate(nextProps, nextState) {
		// 新能优化
     	return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  	}

  	render() {
  		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
  		return (
  			<Layout className="layout">
  				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
  					<div className="layout-logo">
  						<Link to="/home">
  							<img className="logo-img" src={Config.logoSrc}/>
  							<span className="logo-text">{Config.logoText}</span>
  						</Link>
  					</div>
  					<Lmenu mode={ this.state.mode } />
  				</Sider>
  				<Layout>
  					<Lheader collapsed={this.state.collapsed} toggle={ collapsed => this.toggle(collapsed) } />
  					<Content className="layout-content">
  						{this.props.children}
  					</Content>
  					<Lfooter/>
  				</Layout>
  			</Layout>
  		);
  	}
 }

 export default Main;