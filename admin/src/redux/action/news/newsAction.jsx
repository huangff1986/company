import { loading } from '../index'; // 加载状态action
import { goAddArtService } from '../../../services/newsService';
import { ADD_NEWS_LOADING } from '../../constants/addArtTypes';
/**
 * 文章新增成功
 */
const addArtSuccess = (res) => {
	return {
	}
}

// 文章加载中
const addNewsLoading = (isloading) => {
	return (
		type: ADD_NEWS_LOADING,
		isloading
	)
}

/**
 * 异步新增文章 action
 * 用于接受
 */

export const goAddArt = (params) => {
	// 异步 midden
	return dispatch => {
		dispatch(addNewsLoading(true)); // 发起请求时修改为加载状态
		// 通过 NewsService 发送异步请求
		goAddArtService(params, (res) => {
			console.log(res);
			dispatch(addNewsLoading(false)); // 获取请求数据后将加载状态取消;

			if(res.status === 1) {

			}
		})
	}
}