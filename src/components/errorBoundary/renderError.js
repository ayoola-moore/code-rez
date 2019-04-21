import * as React from 'react' // Flow recommended this
import H1 from '../headers/h1'
import H2 from '../headers/h2'

type ErrorProps = {
    error: Error,
    errorInfo: Object,
}

const RenderError = ({ error, errorInfo }: ErrorProps) => {
    console.log('Error: ', error, errorInfo)
    return (
        <div>
            <H1>An error just occured... Please contact admin</H1>
            <br />
            <br />
            <H2>We respond within 12 hours</H2>
        </div>
    )
}

export default RenderError
