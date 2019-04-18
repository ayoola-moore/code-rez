import { FETCH_RECIPES, FETCH_INGREDIENTS } from './actions'

//Redux initial state
const initialState = {
    allRecipes: [],
    ingredients: [],
    recommended: [],
}

//Flow type check for state
type State = {
    +allRecipes: Array<Object>,
    +ingredients: Array<Object>,
    +recommended: Array<Object>,
}

//Flow type check for actions
type FetchRecipes = {
    type: typeof FETCH_RECIPES,
    recipes: Array<Object>,
}

type FetchIngredient = {
    type: typeof FETCH_INGREDIENTS,
    ingredients: Array<Object>,
}

type Action = FetchRecipes | FetchIngredient

export default function recipeReducer(
    state: State = initialState,
    action: Action
) {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                allRecipes: [...action.recipes],
            }

        case FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: [...action.ingredients],
            }

        default:
            return state
    }
}
