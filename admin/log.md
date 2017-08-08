2017/8/7
--------

新增 react-lz-editor 富文本编辑器。

完成新增文章页的页面以及定制提交接口。（包含 antd 表单提价 以及 富文本提交解决方案）


【解决】layout-content 超出部分会隐藏，将layout-content 修改为 overflow: scroll


【工作】添加 antd 表单

【问题】添加表单组件老是出错，原因在与忘记组件名大写

【经验】FormItem 作为一个条，可以在这条中添加 label 定义 input宽度等

【工作】解决表单验证问题

【经验】获取时间戳 var timestamp =Date.parse(new Date());



2017/8/8
--------

【问题】给 antd Form 输入域 添加 getFieldDecorator 输入域不能输入了？？
【分析】
    1. 语法规则已经比对了很多遍应该不是书写问题。
    2. 更大的可能性时 onChange 部分， 双向数据绑定没有绑定上。但是新版本的onchange是不需要绑定的。
    
    我决定重新写
【解决】
    原因是 shouldComponentUpdate 与 Form管理的state有些冲突。
     // 优化组件更新速度
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }

    解决方案，删除这一段就可以了。


【解决文章日期问题】

【完成 表单提交 action】
