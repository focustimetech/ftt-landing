import * as React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames'

interface IProps {
    children: any
    color?: string
    onPrimary?: boolean
    to?: string
}

export const Button = (props: IProps) => {
    const ButtonContent = (
        <a className={classNames('button', {'--on-primary': props.onPrimary})}>{props.children}</a>
    )

    return props.to ? (
        <Link to={props.to}>{ButtonContent}</Link>
    ) : (
        ButtonContent
    )
}
