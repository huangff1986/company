import Xhr from './xhr/index';

/**
 * 封装ajax请求
 * @param {any}
 */

class LoginService {

    /**
     * 登录界面	
     * @param {username} 用户名
     * @param {password} 密码
     * @return {登录信息}
     */
    goLogin(params, success, fail) {
    	console.log(params);
        return Xhr.post('/user/login', params, success, fail);
    }
}

class addArt() {
    /**
     * 新增文章
     * @param {artclass}  文章分类
     * @param {title}     文章标题
     * @param {date}      文章创建日期
     * @param {keyword}   文章关键字
     * @param {summary}   文章摘要
     */
}
// 实例化再导出
export default new LoginService();