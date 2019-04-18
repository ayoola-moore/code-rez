import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './rootReducer'
import { recipes } from './features/recipe'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
)

sagaMiddleware.run(recipes)

export default store
