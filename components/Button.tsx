import * as classNames from 'classnames'
import * as React from 'react'
import Link from 'next/link'

interface IProps {
    children: any
    type?: 'button' | 'submit' | 'reset'
    color?: string
    onPrimary?: boolean
    href?: string
    onClick?: () => void
}

const Button = (props: IProps) => {
    const ButtonContent = props.type ? (
        <button type={props.type} className={classNames('button', {'--on-primary': props.onPrimary})}>{props.children}</button>
    ) : (
        <a onClick={props.onClick} className={classNames('button', {'--on-primary': props.onPrimary})}>{props.children}</a>
    )

    return props.href ? <Link href={props.href}>{ButtonContent}</Link> : ButtonContent
}

export default Button
