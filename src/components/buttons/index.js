import React from 'react'
import './buttons.scss'

type ButtonProps = {
    children: string,
    handleClick: Function,
    className?: string,
}

const Button = ({ children, handleClick, className }: ButtonProps) => {
    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    children: 'Button Text',
}

export default Button
