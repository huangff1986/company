import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import moment from 'moment';
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

    // 添加验证
    componentDidMount() {
    }

    // 点击登录后
    handleSubmit = (e) => {
    	// 取消默认事件
    	e.preventDefault();
    	// 拿到表单 以及 redux action
    	const { form } = this.props;
    	// 异步验证操作
    	form.validateFieldsAndScroll((err, values) => {
    		// 如果不存在错误

    	})
    }

    // 验证逻辑

	render() {
		const {  getFieldsError, getFieldError, isFieldTouched, form } = this.props;
		const getFieldDecorator = form.getFieldDecorator;
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
				        	<Form onSubmit={this.handleSubmit}>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章分类"
				        			hasFeedback
				        		>	
				        			{
				        				getFieldDecorator(
				        					'artclass',
				        					{
				        						rules: [
				        							{ required: true, message: '请选择文章分类' }
				        						]
				        					}
				        				)(
					        				<Select placeholder="请选择文章分类">
					        					<Option value="Signed">签约公告</Option>
					        					<Option value="company">公司新闻</Option>
					        					<Option value="discuss">总裁论述</Option>
					        					<Option value="education">教育教学</Option>
					        					<Option value="industry">行业资讯</Option>
					        				</Select>
				        				)
				        			}
				        		</FormItem>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章标题"
				        			hasFeedback
				        		>
				        			{
				        				getFieldDecorator(
				        					'title',
				        					{
				        						rules: [
				        							{ required: true, message: '请输入文章标题' }
				        						]
				        					}
				        				)(<Input placeholder="请输入文章标题"/>)
				        			}
				        			
				        		</FormItem>
				        		<FormItem
				        			{...formItemLayoutS}
				        			label="文章日期"
				        		>	
				        			{
				        				getFieldDecorator(
				        					'date',
				        					{
				        						rules: [
				        							{ type: 'object', required: true, messge: '请输入文章日期' }
				        						]
				        					}
				        				)(<DatePicker />)
				        			}
				        		</FormItem>
			        			<FormItem
			        				{...formItemLayoutS}
			        				label="关键字"
			        			>
			        				{
			        					getFieldDecorator(
			        						'keyWord'
			        					)(<Input placeholder="请输入文章关键字"/>)
			        				}
			        			</FormItem>
			        			<FormItem
			        				{...formItemLayoutS}
			        				label="摘要"
			        			>
			        				{
			        					getFieldDecorator(
			        						'summary'
			        					)(<TextArea placeholder="请输入文章标题" rows={4}/>)
			        				}
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


// 初始化Form
const MainForm = Form.create()(Main);

export default MainForm;