import { ADD_REDDIT_RESULTS } from './actionTypes'

export const addRedditResults = results => ({
  type: ADD_REDDIT_RESULTS,
  payload: {
    results
  }
})