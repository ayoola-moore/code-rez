import ErrorBoundary from './'
import RenderError from './renderError'

describe('ErrorBoundary', () => {
    const component = shallow(<ErrorBoundary render={() => <RenderError />} />)
    it('should render error', () => {
        expect(component).toMatchSnapshot()
    })
})
