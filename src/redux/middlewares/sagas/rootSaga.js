import { fork } from 'redux-saga/effects'
import { watchLoadPosts } from './loadPostsSaga'
import { watchSavePosts } from './savePostsSaga'

export function* rootSaga () {
  yield fork(watchLoadPosts)
  yield fork(watchSavePosts)
}
