import React from 'react'

import { Route, Switch } from 'react-router-dom'

import NotFound from '../components/notFound/'
import Home from './home/'

import routeLinks from './routeLinks'

export default (
    <Switch>
        <Route exact path={routeLinks.home} component={Home} />

        {/*NotFound should always come last*/}
        <Route component={NotFound} />
    </Switch>
)
