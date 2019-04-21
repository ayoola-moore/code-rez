export const useBeforeFilter = (
    arr: Array<Object>,
    obj: Object
): Array<Object> => {
    const goodList = []
    let ingre, expiryDate
    let curDate = new Date().getTime()

    arr &&
        arr.map(recipe => {
            let maxDueDate = 0
            let dueDate
            ingre = recipe.ingredients
            const good =
                ingre &&
                ingre.every(x => {
                    let condition = null
                    if (obj[x]) {
                        let expire = obj[x]['use-by']
                        let due = obj[x]['best-before']
                        expiryDate = new Date(expire).getTime()
                        dueDate = new Date(due).getTime()
                        maxDueDate = Math.max(maxDueDate, dueDate)
                        condition = curDate > expiryDate
                    }
                    return condition
                })
            const modifiedRecipe = { ...recipe, filterId: maxDueDate }
            if (good) goodList.push(modifiedRecipe)
        })
    return goodList
}
