import { combineReducers } from 'redux';
import * as types from './actionType';

// const youtubeReducer = (state = { youtube: [] }, action) => {
// 	switch (action.type) {
// 		case 'SET_YOUTUBE':
// 			return { ...state, youtube: action.payload };

// 		default:
// 			return state;
// 	}
// };

// const reducers = combineReducers({
// 	youtubeReducer,
// });

const galleryReducer = (state = { gallery: [] }, action) => {
	switch (action.type) {
		case types.GALLERY.start:
			return { ...state };

		case types.GALLERY.success:
			return { ...state, gallery: action.payload };

		case types.GALLERY.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const youtubeReducer = (state = { youtube: [] }, action) => {
	switch (action.type) {
		case types.YOUTUBE.start:
			return { ...state };

		case types.YOUTUBE.success:
			return { ...state, youtube: action.payload };

		case types.YOUTUBE.err:
			return { ...state, error: action.payload };

		default:
			return state;
	}
};

const reducers = combineReducers({
	youtubeReducer,
	galleryReducer,
});

export default reducers;
