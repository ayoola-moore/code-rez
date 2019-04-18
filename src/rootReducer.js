import { combineReducers } from 'redux'
import { recipes } from './features/recipe/'

const reducers = {
    recipes,
}

export default combineReducers(reducers)
