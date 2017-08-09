import { fromJS } from 'immutable';
import { INITIAL_STATE, RES_LOGIN } from '../../constants/loginTypes';
import { ADD_NEWS_LOADING } from '../../constants/addArtTypes'
// 初始化state数据
const initialState = {
    login: false
};

/**
 * 登录界面reducer
 * @return
 */
const Login = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEWS_LOADING: // 初始化state数据
            return fromJS(state).merge({loading: action.loading}).toJS();
        default:
            return state;
    }
}

export default Login;