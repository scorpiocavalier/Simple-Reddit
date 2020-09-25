import { call, put, takeLatest } from 'redux-saga/effects'
import { setPosts } from '../../actions/posts'
import { getPosts } from '../../api'
import { LOAD_POSTS } from '../../types'

export function* loadPostsWatcher () {
  yield takeLatest( LOAD_POSTS, loadPostsFlow )
}

function* loadPostsFlow () {
  const posts = yield call( getPosts )
  yield put( setPosts( posts ) )
}
