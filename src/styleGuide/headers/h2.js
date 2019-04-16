import React from 'react'
import colors from '../colors/colors.scss'
import fonts from '../fonts/fonts.scss'

type Props = {
    children: any,
}

const styles = {
    fontFamily: fonts.headerFont,
    fontSize: '2em',
    textTransform: 'uppercase',
    color: colors.textPrimary,
    width: '100%',
}

const H2 = (props: Props) => {
    return <h2 style={styles}>{props.children}</h2>
}

H2.defaultProps = {
    children: 'h1',
}

export default H2
