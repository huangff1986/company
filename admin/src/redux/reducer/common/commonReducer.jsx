import { fromJS } from 'immutable';
import { LOADING } from '../../constants/dispatchTypes';

// 初始化state数据
const initialState = {
    loading: false
};

/**
 * 公共reducer
 * @return
 */
const Common = ( state = initialState, action )  => {
    switch(action.type) {
        case LOADING: // 用于页面和区块的加载中状态
            return fromJS(state).merge({loading: action.loading}).toJS();
        default:
            return state;
    }
}

export default Common;