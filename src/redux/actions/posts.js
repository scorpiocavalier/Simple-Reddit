import * as type from '../types'

export const getPosts = {
  type: type.GET_POSTS
}

export const setPosts = (posts) => {
  return {
    type: type.SET_POSTS,
    payload: posts
  }
}

export const loadPosts = () => {
  return {
    type: type.LOAD_POSTS
  }
}

export const savePosts = (posts) => {
  return {
    type: type.SAVE_POSTS,
    payload: posts
  }
}