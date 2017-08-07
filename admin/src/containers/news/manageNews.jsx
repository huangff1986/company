import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Row, Col, Card, Table, Button } from 'antd';
// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

const columns = [{
	title: 'ID',
	dataIndex: 'id',
}, {
	title: "所属分类",
	dataIndex: "artclass",
}, {
	title: "文章标题",
	dataIndex: "title"
},{
	title: "排序",
	dataIndex: "sort"
},{
	title: '操作',
	key: 'action',
	render: (text, record) => (
		<span>
			<Button type="primary">编辑</Button>

			<Button type="danger">删除</Button>
		</span>
	)
}]

const data = [{
	id: '1',
	artclass: '签约公告',
	title: '文章1',
	sort: '0'
},{
	id: '2',
	artclass: '公司新闻',
	title: '文章2',
	sort: '0'
},{
	id: '3',
	artclass: '总裁论述',
	title: '文章3',
	sort: '3'
},{
	id: '4',
	artclass: '教育教学',
	title: '文章4',
	sort: '0'
},{
	id: '5',
	artclass: '行业资讯',
	title: '文章5',
	sort: '2'
}];

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