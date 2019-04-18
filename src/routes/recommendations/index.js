import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import H1 from '../../components/headers/h1'
import H2 from '../../components/headers/h2'

import './recommendations.scss'

class View extends Component<{}> {
    componentDidMount() {}
    render() {
        return (
            <Spring
                from={{ transform: 'translate3d(0,-40px,0)' }}
                enter={{ transform: 'translate3d(0,0px,0)' }}
            >
                {() => (
                    <div className={'list'}>
                        <H1>HAM</H1>
                        <H2>HAMLES</H2>
                        view
                    </div>
                )}
            </Spring>
        )
    }
}

export default connect(
    null,
    {}
)(View)
