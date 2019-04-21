import { takeLatest, call, put, all } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'
import axios from 'axios'
import api from '../../api/Api'
import { groupBy } from '../../utils/arrayToObj'
import { useBeforeFilter } from '../../utils/recipeFilters'
import * as actions from './actions'

export const callApi = (url: string): any => axios.get(url)

export function* fetchSaga(): Generator<any, any, any> {
    yield takeLatest(actions.MAKE_RECIPE, fetchRecipes)

    const recipes = yield fetchRecipes()
    const ingredients = yield fetchIngredients()

    yield all([
        put(actions.fetchRecipes(recipes)),
        put(actions.fetchIngredients(ingredients)),
    ])
    yield* updateRecipe(recipes, ingredients)
}

export function* fetchRecipes(): Saga<void> {
    try {
        const recipes = yield call(callApi, api.recipes)
        return recipes.data.recipes
    } catch (e) {
        console.log('error', e)
    }
}

export function* fetchIngredients(): Saga<void> {
    try {
        const ingredientArray = yield call(callApi, api.ingredient)
        const ingredients = groupBy(ingredientArray.data.ingredients, 'title')
        return ingredients
    } catch (e) {
        console.log('error', e)
    }
}

export function* updateRecipe(
    recipe: Array<Object>,
    ingredients: Object
): Saga<void> {
    try {
        const recommend = useBeforeFilter(recipe, ingredients)
        const sortedRecommendations = recommend.sort((a, b) => {
            return b.filterId - a.filterId
        })
        yield put(actions.recommendations(sortedRecommendations)) // to change
    } catch (e) {
        console.log('error', e)
    }
}
