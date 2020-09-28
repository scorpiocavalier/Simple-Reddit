import * as type from '../types'

const initialState = {
  posts: [],
  latestPosts: [],
}

export default (state = initialState, action) => {
  console.log('action.payload', action.payload)
  switch (action.type) {
    case type.GET_POSTS:
      return { ...state }
    case type.SET_POSTS:
      return { ...state, posts: action.payload }
    case type.LOAD_POSTS:
      return { ...state, posts: state.latestPosts }
    case type.SAVE_POSTS:
      return { ...state, latestPosts: action.payload }
    default:
      return state
  }
}
