import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducer from '../reducer/index';
import thunk from 'redux-thunk'; // 中间件，有了这个就可以支持异步action
import DevTools from '../../DevTools';
//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);

var store = createStore(
	combineReducers(reducer),
	enhancer
);

export default store;