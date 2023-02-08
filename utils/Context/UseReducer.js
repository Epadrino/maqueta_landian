import { GET_USER, GET_ID, GET_PROVIDER, SET_USER, GET_BALANCE } from './types';

export default (state, action) => {
	const { payload, type } = action;

	switch (type) {
		case SET_USER:
			return {
				...state,
				user: payload,
			};
		case GET_USER:
			return {
				...state,
				user: payload,
			};
		case GET_ID:
			return {
				...state,
				idParams: payload,
			};
		case GET_PROVIDER:
			return {
				...state,
				provi: payload,
			};
		case GET_BALANCE:
			return {
				...state,
				balance: payload,
			};
		default:
			return state;
	}
};
