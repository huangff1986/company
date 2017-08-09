import { loading } from '../index'; // 加载状态action
import { NewsService } from '../../../services/newsService'
/**
 * 文章新增成功
 */
const AddArtSuccess = (res) => {
	return {
	}
}


/**
 * 异步新增文章 action
 * 用于接受
 */

export const goAddArt = (params) => {
	// 异步 midden
	return dispatch => {
		dispatch(loading(true)); // 发起请求时修改为加载状态
		// 通过 NewsService 发送异步请求
		NewsService.goAddArt(params, (res) => {
			console.log(res);
			dispatch(loading(false)); // 获取请求数据后将加载状态取消;
			dispatch(resAddArt(res)); // 

			if(res.status === 1) {

			}
		})
	}
}