import * as React from 'react' // Flow recommended this
import { storiesOf } from '@storybook/react'
import DesignTokens from './designTokens/index'
import { readMe } from './utils/storybook'
import '../styleGuide/styles/baseStyle.scss'

storiesOf(`${readMe} | Must Read`, module).add('Design tokens', () => (
    <DesignTokens />
))
