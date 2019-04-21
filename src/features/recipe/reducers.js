import { FETCH_RECIPES, FETCH_INGREDIENTS, RECOMMENDATIONS } from './actions'

//Flow type check for state
export type State = {
    +allRecipes: Array<{
        +title: string,
        +ingredients: Array<string>,
    }>,
    +ingredients: Object,
    +recommended: Array<{
        +title: string,
        +ingredients: Array<string>,
        +filterId: number,
    }>,
}

//Redux initial state
const initialState = {
    allRecipes: [],
    ingredients: {},
    recommended: [],
}

// Redux recipe for recipe
export default function recipeReducer(
    state: State = initialState,
    action: Object
): State {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                allRecipes: [...action['recipes']],
            }

        case FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: { ...action['ingredients'] },
            }

        case RECOMMENDATIONS:
            return {
                ...state,
                recommended: [...action['recommended']],
            }
        default:
            return state
    }
}
