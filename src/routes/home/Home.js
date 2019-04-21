import * as React from 'react' // Flow recommended this
import { withRouter } from 'react-router-dom'
import Button from '../../components/buttons'
import './home.scss'

type HomeProps = {
    history: Object,
}

class Home extends React.Component<HomeProps> {
    handleClick = () => this.props.history.push('/recommendations')
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
