import { combineReducers } from 'redux'
import recipes from './features/recipe/reducers'

const reducers = {
    recipes,
}

export default combineReducers(reducers)
