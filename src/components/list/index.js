import * as React from 'react' // Flow recommended this

const List = (props: any) => {
    return (
        <ul>
            <li>{props.children}</li>
        </ul>
    )
}

export default List
