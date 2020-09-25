import { call, takeLatest } from 'redux-saga/effects'
import { postPosts } from '../../api'
import { SAVE_POSTS } from '../../types'

export function* savePostsWatcher () {
  yield takeLatest( SAVE_POSTS, savePostsFlow )
}

function* savePostsFlow (action) {
  yield call(postPosts, action.payload)
}
