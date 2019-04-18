export const FETCH_API = 'FETCH_API'
export const FETCH_RECIPES = 'FETCH_RECIPES'
export const FETCH_INGREDIENTS = 'FETCH_INGREDIENTS'

export const fetchApi = () => ({
    type: FETCH_API,
})

export const fetchRecipes = (recipes: Array<Object>) => ({
    type: FETCH_RECIPES,
    recipes,
})

export const fetchIngredients = (ingredients: Array<Object>) => ({
    type: FETCH_INGREDIENTS,
    ingredients,
})
