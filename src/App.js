import * as React from 'react'
import './styleGuide/styles/baseStyle.scss'

type appProps = {
    children: React.Node,
}

class App extends React.Component<appProps> {
    render() {
        return this.props.children
    }
}

export default App
