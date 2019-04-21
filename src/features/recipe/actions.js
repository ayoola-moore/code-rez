export const MAKE_RECIPE: string = 'MAKE_RECIPE'
export const FETCH_RECIPES: string = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS: string = 'FETCH_INGREDIENTS'
export const RECOMMENDATIONS: string = 'RECOMMENDATIONS'

//Flow type check for actions
export type FetchRecipes = {
    type: typeof FETCH_RECIPES,
    recipes: Array<Object>,
}

export type FetchIngredients = {
    type: typeof FETCH_INGREDIENTS,
    ingredients: Object,
}

export type Recommendations = {
    type: typeof RECOMMENDATIONS,
    recommended: Array<Object>,
}

// Redux actions
export const fetchApi = () => ({
    type: MAKE_RECIPE,
})

export const fetchRecipes = (recipes: Array<Object>): FetchRecipes => ({
    type: FETCH_RECIPES,
    recipes,
})

export const fetchIngredients = (ingredients: Object): FetchIngredients => ({
    type: FETCH_INGREDIENTS,
    ingredients,
})

export const recommendations = (
    recommended: Array<Object>
): Recommendations => ({
    type: RECOMMENDATIONS,
    recommended,
})
