2017/8/2
--------

新增 react-lz-editor 富文本编辑器。

完成新增文章页的页面以及定制提交接口。（包含 antd 表单提价 以及 富文本提交解决方案）


【解决】layout-content 超出部分会隐藏，将layout-content 修改为 overflow: scroll


【工作】添加 antd 表单

【问题】添加表单组件老是出错，原因在与忘记组件名大写

【经验】FormItem 作为一个条，可以在这条中添加 label 定义 input宽度等

【工作】解决表单验证问题

【经验】获取时间戳 var timestamp =Date.parse(new Date());