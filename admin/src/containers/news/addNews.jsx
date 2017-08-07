import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { 
	Row, 
	Col, 
	Card,
	Form,
	Input,
	Select,
	Button,
	DatePicker
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
// 公共面包屑
import Editor from '../../component/editor/editor'
import { Bcrumb } from '../../component/bcrumb/bcrumb';

/* 以类的方式创建一个组件 */
class Main extends Component {
    constructor(props) {
    	super(props);
    }
    // 优化组件更新速度
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }

    // 添加验证
    componentDidMount() {
    	this.props.form.validateFields();
    }

	render() {
		const formItemLayoutS = {
	    	labelCol: { span: 2 },
	    	wrapperCol: { span: 12 },
		};
		const formItemLayoutL = {
	    	labelCol: { span: 2 },
	    	wrapperCol: { span: 22 },
		};

		return (	
			<div>
				<Bcrumb title="新增文章" icon="edit"/>
				<Row>
					<Col span={24}>
				        <Card title="新增文章页">
				        	<Form>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章分类"
				        		>
				        			<Select placeholder="请选择文章分类">
				        				<Option value="Signed">签约公告</Option>
				        				<Option value="company">公司新闻</Option>
				        				<Option value="discuss">总裁论述</Option>
				        				<Option value="education">教育教学</Option>
				        				<Option value="industry">行业资讯</Option>
				        			</Select>
				        		</FormItem>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章标题"
				        		>
				        			<Input placeholder="请输入文章标题"/>
				        		</FormItem>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章日期"
				        		>
				        			<DatePicker />
				        		</FormItem>
			        			<FormItem
			        				{...formItemLayoutS}
			        				label="关键字"
			        			>
			        				<Input placeholder="请输入文章关键字"/>
			        			</FormItem>
			        			<FormItem
			        				{...formItemLayoutS}
			        				label="摘要"
			        			>
			        				<TextArea placeholder="请输入文章标题" rows={4}/>
			        			</FormItem>
			        			<FormItem
			        				wrapperCol= {{ span: 22, offset: 2 }}
			        			>
				        			<Editor />
			        			</FormItem>
			        			<FormItem
			        				wrapperCol= {{ span: 22, offset: 2 }}
			        			>
			        				<Button type="primary" htmlType="submit">
			        					提交
			        				</Button>
			        			</FormItem>
				        	</Form>
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