import React from 'react'
import { storiesOf } from '@storybook/react'
import DesignTokens from './designTokens/index'
import { readMe } from './utils/storybook'
import '../styleGuide/styles/baseStyle.scss'

storiesOf(`${readMe} | Must Read`, module).add('Design tokens', () => (
    <DesignTokens />
))
