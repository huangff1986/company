import { loading } from '../index'; // 加载状态action
import { NewsService } from '../../../services/newsService'
/**
 * 文章新增成功
 */
const resAddArt = (res) => {
	return {
		type: ,
	}
}


/**
 * 异步新增文章 action
 * 用于接受
 */

export const goAddArt = (params) => {
	// 异步 midden
	return dispatch => {
		dispatch(loading(false)); // 将状态修改为加载结束;
		
	}
}