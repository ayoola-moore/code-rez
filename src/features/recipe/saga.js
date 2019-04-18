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

export function* fetchIngredients(): Generator<Object, void, any> {
    try {
        const ingredients = yield call(callApi, api.ingredient)
        yield put(actions.fetchIngredients(ingredients.data.ingredients))
    } catch (e) {
        console.log('error', e)
    }
}
