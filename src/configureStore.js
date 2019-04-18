import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './rootReducer'
import { fetchSaga } from './features/recipe/saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
)

sagaMiddleware.run(fetchSaga)

export default store
