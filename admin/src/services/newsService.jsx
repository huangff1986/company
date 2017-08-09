import Xhr from './xhr/index';

class NewsService {
    /**
     * 新增文章
     * @param {artclass}  文章分类
     * @param {title}     文章标题
     * @param {date}      文章创建日期
     * @param {keyword}   文章关键字
     * @param {summary}   文章摘要
     */

    goAddArt(params, success, fail) {
    	console.log(params);
    	return xhr.post('/news/addArt', params, success, fail)
    }
}

export default new NewsService();