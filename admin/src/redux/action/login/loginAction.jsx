/**
 * 登录界面action
 * @return
 */
import { Message } from 'antd';
import { browserHistory } from 'react-router';
import Config from '../../../config/index';
import { RES_LOGIN, INITIAL_STATE } from '../../constants/loginTypes';
import LoginService from '../../../services/loginService';
import { loading } from '../index';

/**
 * 登录成功
 * @return
 */
const resLogin = (res) => {
    return {
        type: RES_LOGIN,
        res
    }
}

/**
 * 初始化数据
 * @return
 */
export const initialState = () => {
    return {
        type: INITIAL_STATE
    }
}

/**
 * 登录界面	
 * @param {username} 用户名
 * @param {password} 密码
 * @return {登录信息}
 */


/**
 * 在这里
 *  1. 选择 services 下的异步处理函数
 *  2. 定义接受成功或者失败的回调函数。
 */
export const goLogin = (params) => {
    // 异步 midden
    return dispatch => {
        dispatch(loading(true));
        // 通过 LoginService 发送异步请求。
        LoginService.goLogin(params, (res) => {
            console.log(res)
            dispatch(loading(false));
            dispatch(resLogin(res));
            if(res.status === 1) { // 他的识别方法， 通过返回结果是否有值来判断是否登录成功。
                // 登录成功后 在本地存储部分 定义一个 userToken 标记登录成功，并且给有效期。
                Config.localItem(Config.localKey.userToken, (new Date()).getTime()); // 模拟登录成功返回的Token
                // 然后跳转到home页
                browserHistory.push('/home');
            } else {
                Message.error('用户名或密码错误');
            }
        })
    }
} 
