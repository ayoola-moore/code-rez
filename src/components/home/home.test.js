import React from 'react'
import { shallow } from 'enzyme'
import Home from './home'

describe('Home', () => {
    it('should render Home Component as the landing view', () => {
        const component = shallow(<Home />)
        expect(component).toMatchSnapshot()
    })
})
