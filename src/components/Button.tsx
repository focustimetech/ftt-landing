import * as React from 'react'

interface IProps {
    children: any
    color?: string
    to?: string
}
export const Button = (props: IProps) => {
    return (
        <a className='button' href={props.to}>{props.children}</a>
    )
}
