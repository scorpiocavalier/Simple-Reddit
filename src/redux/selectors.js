export const getResultState = store => store.results

export const getResultList = store =>
  getResultState(store) ? getResultState(store).results : []

