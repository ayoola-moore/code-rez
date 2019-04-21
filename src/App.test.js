import * as React from 'react' // Flow recommended this
import { shallow } from 'enzyme'
import App from './App'

it('App renders without crashing', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
})
