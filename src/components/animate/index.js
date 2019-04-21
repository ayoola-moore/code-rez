import * as React from 'react' // Flow recommended this
import { Spring } from 'react-spring/renderprops'

type Props = {
    children: React.Node,
}

class Animate extends React.Component<Props> {
    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: 300 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {props => <div style={props}>{this.props.children}</div>}
            </Spring>
        )
    }
}

export default Animate
