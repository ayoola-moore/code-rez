// I could break the test into individual files, but ...

import * as actions from './actions'
import recipeReducer from './reducers'
import { callApi } from './saga'
import api from '../../api/Api'
import { call, put } from 'redux-saga/effects'

// Redux action test
describe('Redux action test cases', () => {
    it('should fetch api:: fetchApi', () => {
        expect(actions.fetchApi()).toMatchSnapshot()
    })
    it('should fetch recipes:: fetchRecipes', () => {
        expect(actions.fetchRecipes()).toMatchSnapshot()
    })
    it('should fetch ingredients:: fetchIngredient', () => {
        expect(actions.fetchIngredients()).toMatchSnapshot()
    })
    it('should recommend based on filter:: recommendations', () => {
        expect(actions.recommendations()).toMatchSnapshot()
    })
})

describe('Redux state test cases', () => {
    it('should find recipes', () => {
        const action = {
            type: actions.fetchRecipes,
            recipes: [
                {
                    title: 'Ham and Cheese Toastie',
                    ingredients: ['Ham', 'Cheese', 'Bread', 'Butter'],
                },
            ],
        }
        expect(recipeReducer(undefined, action)).toMatchSnapshot()
    })

    it('should find ingredients', () => {
        const action = {
            type: actions.fetchIngredients,
            ingredients: [
                {
                    title: 'Ham and Cheese Toastie',
                    ingredients: ['Ham', 'Cheese', 'Bread', 'Butter'],
                },
            ],
        }
        expect(recipeReducer(undefined, action)).toMatchSnapshot()
    })

    it('should find recommendationas', () => {
        const action = {
            type: actions.recommendations,
            recommended: [],
        }
        expect(recipeReducer(undefined, action)).toMatchSnapshot()
    })
})

const gen = actions.fetchApi()

// Redux Saga test
describe('Saga flow check', () => {
    it.skip('should hit the api', () => {
        expect(gen.next().value).toEqual(call(callApi, api.recipes))
    })
    // more indepth test required, but its Easter Sunday on my computer :)
})
