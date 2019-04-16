import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { compHeader } from '../../stories/utils/storybook'
import Button from './'

const buttons = storiesOf(`${compHeader} | Buttons`, module)

buttons.addDecorator(withKnobs)
buttons.addDecorator((story, context) =>
    withInfo(`Dynamic button component`)(story)(context)
)

buttons.add('Default', () => <Button>{text('Text', 'Button Text')}</Button>)
