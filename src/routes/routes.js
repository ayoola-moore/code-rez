import React from 'react'

import { Route, Switch } from 'react-router-dom'

import NotFound from '../components/notFound/'
import Home from './home/'
import Recommendations from './recommendations/'

import routeLinks from './routeLinks'

export default (
    <Switch>
        <Route exact path={routeLinks.home} component={Home} />
        <Route
            exact
            path={routeLinks.recommendations}
            component={Recommendations}
        />

        {/*NotFound should always come last*/}
        <Route component={NotFound} />
    </Switch>
)
