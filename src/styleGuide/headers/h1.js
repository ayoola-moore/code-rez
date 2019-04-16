import React from 'react'
import colors from '../colors/colors.scss'
import fonts from '../fonts/fonts.scss'

type Props = {
    children: any,
}

const styles = {
    fontFamily: fonts.headerFont,
    fontSize: '3em',
    textTransform: 'uppercase',
    color: colors.textPrimary,
    width: '100%',
}

const H1 = (props: Props) => {
    return <h1 style={styles}>{props.children}</h1>
}

H1.defaultProps = {
    children: 'h1',
}

export default H1
