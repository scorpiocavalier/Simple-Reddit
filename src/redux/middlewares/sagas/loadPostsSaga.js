import { put, takeLatest } from 'redux-saga/effects'
import { LOAD_POSTS } from '../../types'

export function* watchLoadPosts () {
  yield takeLatest(LOAD_POSTS, loadPosts)
}

export function* loadPosts () {
  yield put({ type: LOAD_POSTS })
}
