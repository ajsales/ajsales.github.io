import { createStore } from 'redux';

const initialState = {
	imgSize: 0,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'imgSize/set':
			return {
				...state,
				imgSize: action.imgSize
			}

		default:
			return state;
	}
};

const store = createStore(reducer);
export default store;