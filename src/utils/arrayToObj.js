// Simple utility  that convert array to obj
export function groupBy(objectArray: Array<Object>, property: string): Object {
    return objectArray.reduce(function(acc, obj) {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = obj
        }
        return acc
    }, {})
}
