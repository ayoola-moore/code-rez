import { takeLatest, call, put, all } from 'redux-saga/effects'
import axios from 'axios'
import api from '../../Api'
import * as actions from './actions'

const callApi = url => axios.get(url)

export function* fetchSaga(): Generator<Object, void, any> {
    yield all([
        takeLatest(actions.FETCH_API, fetchRecipes),
        takeLatest(actions.FETCH_API, fetchIngredients),
    ])
}

export function* fetchRecipes(): Generator<Object, void, any> {
    try {
        const recipes = yield call(callApi, api.recipes)
        yield put(actions.fetchRecipes(recipes.data.recipes))
    } catch (e) {
        console.log('error', e)
    }
}

// Simple utility  that convert array to obj
function groupBy(objectArray, property) {
    return objectArray.reduce(function(acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}

export function* fetchIngredients(): Generator<Object, void, any> {
    try {
        const ingredientArray = yield call(callApi, api.ingredient)
        const ingredients = yield groupBy(
            ingredientArray.data.ingredients,
            'title'
        )
        // console.log('ingre', ingredients)
        yield put(actions.fetchIngredients(ingredients))
    } catch (e) {
        console.log('error', e)
    }
}
