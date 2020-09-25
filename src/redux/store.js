import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './middlewares/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)