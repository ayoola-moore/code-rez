import { addDecorator, configure } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import requireContext from 'require-context.macro'
import { setDefaults } from '@storybook/addon-info'

// Option defaults:
addDecorator(
    withOptions({
        name: 'Rezdy',
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/,
        sidebarAnimations: true,
    })
)

// where to find stories
const req = requireContext('../src', true, /.stories.js$/)
function loadStories() {
    req
        .keys()
        .sort()
        .forEach(filename => req(filename))
}

// addon-info
setDefaults({
    styles: {
        button: {
            base: {
                fontFamily: 'inherit',
                fontSize: '.6rem',
                background: '#AE242B',
                textTransform: 'uppercase',
                color: '#fff',
                padding: '8px 10px',
                cursor: 'pointer',
                width: 'auto',
                minWidth: '100px',
            },
        },
    },
})

configure(loadStories, module)
