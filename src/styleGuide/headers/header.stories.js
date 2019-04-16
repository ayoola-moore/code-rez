import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { styleGuide } from '../../stories/utils/storybook'
import H1 from './h1'
import H2 from './h2'

const header = storiesOf(`${styleGuide} | Headers`, module)

header.addDecorator(withKnobs)

header.addDecorator((story, context) =>
    withInfo('Design atom for header :: src - styleGuide/headers')(story)(
        context
    )
)

header.add('h1', () => <H1>{text('H1', 'h1')}</H1>)
header.add('h2', () => <H2>{text('H2', 'h2')}</H2>)
