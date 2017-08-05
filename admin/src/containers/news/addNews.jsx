import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Row, Col, Card } from 'antd';
// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

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
			<Bcrumb title="新增文章" icon="edit"/>
			<Row>
				<Col span={24}>
			        <Card title="新增文章页">
			            <p>正在开发中。。。。</p>
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