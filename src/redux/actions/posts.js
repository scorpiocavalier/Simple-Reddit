import * as type from '../types'

export const getPosts = {
  type: type.GET_POSTS
}

export const setPosts = ( posts ) => {
  return {
    type: type.SET_POSTS,
    payload: posts
  }
}
