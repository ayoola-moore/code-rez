import { useBeforeFilter } from './recipeFilters'
import { groupBy } from './arrayToObj'

const mock = {
    recipes: {
        allRecipes: [
            {
                title: 'Ham and Cheese Toastie',
                ingredients: ['Ham', 'Cheese', 'Bread', 'Butter'],
            },
            {
                title: 'Fry-up',
                ingredients: [
                    'Bacon',
                    'Eggs',
                    'Baked Beans',
                    'Mushrooms',
                    'Sausage',
                    'Bread',
                ],
            },
            {
                title: 'Salad',
                ingredients: [
                    'Lettuce',
                    'Tomato',
                    'Cucumber',
                    'Beetroot',
                    'Salad Dressing',
                ],
            },
            {
                title: 'Hotdog',
                ingredients: ['Hotdog Bun', 'Sausage', 'Ketchup', 'Mustard'],
            },
            {
                title: 'Omelette',
                ingredients: [
                    'Eggs',
                    'Mushrooms',
                    'Milk',
                    'Salt',
                    'Pepper',
                    'Spinach',
                ],
            },
        ],
        ingredients: {
            Ham: {
                title: 'Ham',
                'best-before': '2018-04-27',
                'use-by': '2018-04-27',
            },
            Cheese: {
                title: 'Cheese',
                'best-before': '2018-04-22',
                'use-by': '2018-04-27',
            },
            Bread: {
                title: 'Bread',
                'best-before': '2018-04-22',
                'use-by': '2018-04-27',
            },
            Butter: {
                title: 'Butter',
                'best-before': '2018-04-22',
                'use-by': '2018-04-27',
            },
            Bacon: {
                title: 'Bacon',
                'best-before': '2018-04-17',
                'use-by': '2018-04-22',
            },
            Eggs: {
                title: 'Eggs',
                'best-before': '2018-04-17',
                'use-by': '2018-04-22',
            },
            'Baked Beans': {
                title: 'Eggs',
                'best-before': '2018-04-17',
                'use-by': '2018-04-22',
            },
            Mushrooms: {
                title: 'Mushrooms',
                'best-before': '2018-04-07',
                'use-by': '2018-04-10',
            },
            Sausage: {
                title: 'Sausage',
                'best-before': '2018-04-17',
                'use-by': '2018-04-22',
            },
            'Hotdog Bun': {
                title: 'Hotdog Bun',
                'best-before': '2019-04-07',
                'use-by': '2019-04-22',
            },
            Ketchup: {
                title: 'Ketchup',
                'best-before': '2019-04-22',
                'use-by': '2019-04-27',
            },
            Mustard: {
                title: 'Mustard',
                'best-before': '2019-04-22',
                'use-by': '2019-04-27',
            },
            Lettuce: {
                title: 'Lettuce',
                'best-before': '2019-04-17',
                'use-by': '2019-04-22',
            },
            Tomato: {
                title: 'Tomato',
                'best-before': '2019-04-17',
                'use-by': '2019-04-22',
            },
            Cucumber: {
                title: 'Cucumber',
                'best-before': '2019-04-17',
                'use-by': '2019-04-22',
            },
            Beetroot: {
                title: 'Beetroot',
                'best-before': '2019-04-17',
                'use-by': '2019-04-22',
            },
            'Salad Dressing': {
                title: 'Salad Dressing',
                'best-before': '2019-04-07',
                'use-by': '2019-04-10',
            },
        },
        recommended: [],
    },
}

const expectedResult = [
    {
        filterId: 1524787200000,
        ingredients: ['Ham', 'Cheese', 'Bread', 'Butter'],
        title: 'Ham and Cheese Toastie',
    },
    {
        filterId: 1524355200000,
        ingredients: [
            'Bacon',
            'Eggs',
            'Baked Beans',
            'Mushrooms',
            'Sausage',
            'Bread',
        ],
        title: 'Fry-up',
    },
]

describe('Business Logic test', () => {
    it('should filter recipe', () => {
        expect(
            useBeforeFilter(mock.recipes.allRecipes, mock.recipes.ingredients)
        ).toEqual(expectedResult)
    })
})

describe('Utility function for redux state', () => {
    it('should return an object given an array input', () => {
        expect(
            groupBy(
                [
                    {
                        title: 'Ham',
                        'best-before': '2019-04-22',
                        'use-by': '2019-04-27',
                    },
                ],
                'title'
            )
        ).toEqual({
            Ham: {
                'best-before': '2019-04-22',
                title: 'Ham',
                'use-by': '2019-04-27',
            },
        })
    })
})
