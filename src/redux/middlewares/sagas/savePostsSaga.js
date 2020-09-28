import { put, takeLatest } from 'redux-saga/effects'

import { SAVE_POSTS } from '../../types'

export function* watchSavePosts () {
  yield takeLatest(SAVE_POSTS, savePosts)
}

export function* savePosts (posts) {
  yield put({ type: SAVE_POSTS, payload: posts })
}
