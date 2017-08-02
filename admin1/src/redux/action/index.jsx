import { LOADING } from '../constants/dispatchTypes';

const loading = (loading) => {
	return {
		type: LOADING,
		loading
	}
}

export { loading }