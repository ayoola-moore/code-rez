import * as React from 'react'

type ErrorProps = {
    children: React.Node,
    render: (error: ?Error, errorInfo: ?Object) => React.Node,
}

type ErrorState = {
    hasError: boolean,
    error: ?Error,
    errorInfo: ?Object,
}

export default class ErrorBoundary extends React.Component<
    ErrorProps,
    ErrorState
> {
    state = {
        hasError: false,
        error: null,
        errorInfo: null,
    }

    componentDidCatch(error: Error, errorInfo: Object): void {
        this.setState({ hasError: true, error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            return this.props.render(this.state.error, this.state.errorInfo)
        }
        return this.props.children
    }
}
