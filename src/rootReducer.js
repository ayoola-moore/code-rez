import { combineReducers } from 'redux'
import { recipes } from './features/showRecipe/'

const reducers = {
    recipes,
}

export default combineReducers(reducers)
