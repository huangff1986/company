import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
/**
 * 公共菜单
 *
 * @export
 * @class Lmenu
 * @extends {Component}
 */
export class Lmenu extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
		const openKeys = Config.localItem('OPENKEY') ? [Config.localItem('OPENKEY')] : [];
		this.state = {
			openKeys: openKeys
		};
	}
    onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    Config.localItem('OPENKEY', nextOpenKeys);
	    this.setState({ openKeys: nextOpenKeys });
	}
  	getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	}
	render() {
		const defaultSelectedKey = process.env.NODE_ENV !== 'production' ? [location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home'] : [location.hash.split('/')[location.hash.split('/').length - 1].split('?')[0] || 'home'];
		return (
			<Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode} defaultSelectedKeys={defaultSelectedKey}>
		        <Menu.Item key="home">
			        <Link to="/home">
		              <Icon type="laptop" />
		              {!this.props.collapsed && <span className="nav-text">首页</span>}
		            </Link>
	            </Menu.Item>
	            <SubMenu key="news" title={<span><Icon type="file-text" /><span>文章</span></span>}>
                    <Menu.Item key="addnews">
    			        <Link to="/news/add">
    		              {!this.props.collapsed && <span className="nav-text">新增文章</span>}
    		            </Link>
    	            </Menu.Item>
                    <Menu.Item key="managenews">
    			        <Link to="/news/manage">
    		              {!this.props.collapsed && <span className="nav-text">管理文章</span>}
    		            </Link>
    	            </Menu.Item>
	            </SubMenu>
                <Menu.Item key="user">
			        <Link to="/user">
		              <Icon type="user" />
		              {!this.props.collapsed && <span className="nav-text">用户管理</span>}
		            </Link>
	            </Menu.Item>
	        </Menu>
		)
	}
}