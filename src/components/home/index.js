import React from 'react'

import { Helmet } from 'react-helmet'
import Home from './Home'

const Index = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home:: Good for Seo</title>
            </Helmet>
            <Home />
        </div>
    )
}

export default Index
