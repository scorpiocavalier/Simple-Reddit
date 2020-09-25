import { fork } from 'redux-saga/effects'
import { loadPostsWatcher } from './loadPostsSaga'
import { savePostsWatcher } from './savePostsSaga'

export function* rootSaga() {
  yield fork(loadPostsWatcher)
  yield fork(savePostsWatcher)
}
