import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/errorBoundary'
import ErrorMessage from './components/errorBoundary/renderError'
import * as serviceWorker from './serviceWorker'
import Routes from './routes/routes'

import store from './configureStore'

const renderApp = () =>
    render(
        <Provider store={store}>
            <Router>
                <ErrorBoundary render={() => <ErrorMessage />}>
                    <App children={Routes} />
                </ErrorBoundary>
            </Router>
        </Provider>,
        document.getElementById('root')
    )

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}

renderApp()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
