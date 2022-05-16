import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchGallery, fetchYoutube } from './api';
import * as types from './actionType';

export function* returnGallery(action) {
	try {
		const response = yield call(fetchGallery, action.opt);
		yield put({
			type: types.GALLERY.success,
			payload: response.data.photos.photo,
		});
	} catch (err) {
		// 해당 api 호출이 실패했을때 예외처리
		// 에러 내용을 reducer에 전달
		yield put({ type: types.GALLERY.err, payload: err });
	}
}
// 요청받은 액션 타입에 따라 함수호출
export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}

export function* returnYoutube(action) {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.err, payload: err });
	}
}
export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}

export default function* rootSaga() {
	yield all([fork(callGallery), fork(callYoutube)]);
}
