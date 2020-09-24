import * as type from '../types'

const initialState = {
  posts: [],
}

export default ( state = initialState, action ) => {
  switch ( action.type ) {
    case type.GET_POSTS:
      return { ...state }
    case type.SET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state
  }
}
