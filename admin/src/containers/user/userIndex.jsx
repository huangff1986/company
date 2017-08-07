import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';
import { Row, Col, Card, Table, Button } from 'antd';

// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

import styles from './style/user.less';

// 定义表格
const columns = [{
	title: 'ID',
	dataIndex: 'id'
}, {
	title: '账号',
	dataIndex: 'username',
}, {
	title: '用户名',
	dataIndex: 'name',
}, {
	title: '用户组',
	dataIndex: 'group'
}, {
	title: '操作',
	render: (text, record) => (
		<span>
			<Button type="primary">编辑</Button>
			<Button type="danger">删除</Button>
		</span>
	)
}];

const data = [{
	id: '1',
	username: 'admin',
	name: '啪嗒啪嗒',
	group: '超级管理员'
}]

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (	
		<div>
			<Bcrumb title="文章管理" icon="copy"/>
			<Row>
				<Col span={24}>
			        <Card title="文章管理">
			        	<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
			        </Card> 
			    </Col>
			</Row>
		</div>
		);
	}
}

Main.contextTypes = {
};

export default Main;

