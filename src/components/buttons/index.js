import * as React from 'react' // Flow recommended this
import './buttons.scss'

type ButtonProps = {
    children: string,
    handleClick: Function,
    className?: string,
}

const Button = ({ children, handleClick, className }: ButtonProps) => {
    return (
        <button
            onClick={handleClick}
            className={`${className ? className : ''} animated-button thar-one`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: 'Button Text',
    className: 'dw',
}

export default Button
