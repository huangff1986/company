import { createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../reducer/index';
import thunk from 'redux-thunk'; // 中间件，有了这个就可以支持异步action

var store = createStore(
	combineReducers(reducer),
	applyMiddleware(thunk)
);

export default store;

