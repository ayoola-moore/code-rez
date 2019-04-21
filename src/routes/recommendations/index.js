import * as React from 'react' // Flow recommended this
import { connect } from 'react-redux'
import H1 from '../../components/headers/h1'
import H2 from '../../components/headers/h2'
import Animate from '../../components/animate'
import Loading from '../../components/loading'
import List from '../../components/list'
import { fetchApi } from '../../features/recipe/actions'
import { makeRecommendation } from '../../features/recipe/selectors'

import './recommendations.scss'

//Flow type check for recommendation
type FetchApi = {
    fetchApi: Object,
    recipes: any,
}

export class Recommendations extends React.Component<FetchApi> {
    componentDidMount() {
        this.props.fetchApi()
    }
    render() {
        const { recipes } = this.props

        if (recipes.length < 1) return <Loading />

        return (
            recipes &&
            recipes.map((recipe, i) => {
                return (
                    <Animate key={`${recipe.filterId}_${i}`}>
                        <div className={'recipeList'}>
                            <H1>{recipe.title}</H1>
                            <H2>What you will need</H2>
                            {recipe &&
                                recipe.ingredients.map((ing, i) => {
                                    return (
                                        <List key={`${ing}_${i}`}>{ing}</List>
                                    )
                                })}
                        </div>
                    </Animate>
                )
            })
        )
    }
}

const mapStp = (state: Array<Object>) => ({
    recipes: makeRecommendation(state),
})

export default connect(
    mapStp,
    { fetchApi }
)(Recommendations)
