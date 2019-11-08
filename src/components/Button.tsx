import * as React from 'react'
import { Link } from 'react-router-dom'
import * as classNames from 'classnames'

interface IProps {
    children: any
    type?: 'button' | 'submit' | 'reset'
    color?: string
    onPrimary?: boolean
    to?: string
    onClick?: () => void
}

const Button = (props: IProps) => {
    const ButtonContent = props.type ? (
        <button type={props.type} className={classNames('button', {'--on-primary': props.onPrimary})}>{props.children}</button>
    ) : (
        <a onClick={props.onClick} className={classNames('button', {'--on-primary': props.onPrimary})}>{props.children}</a>
    )

    return props.to ? (
        <Link to={props.to}>{ButtonContent}</Link>
    ) : (
        ButtonContent
    )
}

export default Button
