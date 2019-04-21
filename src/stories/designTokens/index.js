import * as React from 'react' // Flow recommended this
import MarkDown from 'react-markdown'
import token from './designToken.md'

const Index = () => {
    return <MarkDown source={token} />
}

export default Index
