2017/8/7
--------

新增 react-lz-editor 富文本编辑器。

完成新增文章页的页面以及定制提交接口。（包含 antd 表单提价 以及 富文本提交解决方案）


【解决】layout-content 超出部分会隐藏，将layout-content 修改为 overflow: scroll


【工作】添加 antd 表单

【问题】添加表单组件老是出错，原因在与忘记组件名大写

【经验】FormItem 作为一个条，可以在这条中添加 label 定义 input宽度等

【工作】解决表单验证问题

【经验】获取时间戳 var timestamp = Date.parse(new Date());



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


2017/8/9
--------
【工作】 解决 react 异步流程

异步action的组成

1 由异步action 接受需要发送的参数。定义请求成功后的回调逻辑
2 由services 调用异步发送模块，以及配置发送路径 
3 同步action 更具请求成功后的成功或失败指定对应的action。

异步action 的组织流程
  redux/action/newsActions.jsx  用于定义异步逻辑
  services/newsService.jsx 用于配置异步接口
    1.api的地址
    2.请求方式 (POST, GET等)

【经验】通用的组件于状态管理。
  页面上会有许多通用的组件，例如 显示正在登陆状态的窗口，提示框等。

  这些组件的控制可以通过 action进行控制，组件的状态放置在store/common。
  然后在通过action进行控制。
  （想简单了）

【想法】 文章是否通过 redux 进行管理。
  通过redux 进行文章的管理有个最大的好处，能保证整个站点状态统一。
  例如，当提交一个新文章成功后。会触发一个更新文章action。 这样就可以保证
  文章列表数据一直保持最新状态。

  如果是用传统的方式，那么我们就需要先要获取文章列表组件，然后调用对应的更新文章列表接口。 这样会增加站点的耦合度。 

  行为交由 action 进行触发，有reducer进行管理。

【任务】 完成操作成功提示框和操作失败提示框,，制定 文章reducer。

【想法】 状态组件
  状态组件还是需要交由 页面组件来管理。 那么我们就需要在store中建立整个站点状态的UI树。
  UI状态树应该与containers进行关联。

【问题】 如何去建立对应的reducer
  重新架构一下reducer
  
  reducer 大致分为两部分 UI 和 Data 部分

  具体数据的拆分见 reducer

【想法】 文章列表的reducer

  在reducer中建立一个存放20条文章条数的数据列表容器。
  任何操作都是更新都是更新 文章列表的中的数据