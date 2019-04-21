import * as React from 'react' // Flow recommended this
import List from './'

describe('Should Find List component', () => {
    it('should find List', () => {
        const component = shallow(<List />)
        expect(component).toMatchSnapshot()
    })
})
