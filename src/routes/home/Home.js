import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../../components/buttons'
import './home.scss'

class Home extends React.Component {
    handleClick = () => this.props.history.push('/view')
    render() {
        return (
            <div className={'home_wrapper'}>
                <Button handleClick={this.handleClick} className={'lunch'}>
                    What's for lunch
                </Button>
            </div>
        )
    }
}

export default withRouter(Home)
