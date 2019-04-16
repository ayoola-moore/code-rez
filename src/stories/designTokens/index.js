import React from 'react'
import MarkDown from 'react-markdown'
import token from './designToken.md'

const Index = () => {
    return <MarkDown source={token} />
}

export default Index
