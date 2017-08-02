import { fromJS } from 'immutable';
import { LOADING } from '../constants/dispatchTypes';
import Login from './login/loginReducer'; // 登录界面

// 初始化state数据
const initialState = {
	loading: false
};


const Common = { state = initialState, action } => {
	switch(action.type) {
		case LOADING:
			return fromJS(state).merge({loading: action.loading}).toJS();
		default:
			return state;
	}
}

export { Common, Login };