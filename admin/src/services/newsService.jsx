import Xhr from './xhr/index';

export function goAddArtService(params, success, fail) {
	return Xhr.post('/news/addArt', params, success, fail)
}

