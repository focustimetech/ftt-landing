import * as React from 'react'
import * as classNames from 'classnames'

interface IProps {
    children: any
    color?: string
    onPrimary?: boolean
    to?: string
}
export const Button = (props: IProps) => {
    return (
        <a className={classNames('button', {'--on-primary': props.onPrimary})} href={props.to}>{props.children}</a>
    )
}
