import React from 'react'

interface IProps {
    children: any
}

const Icon = (props: IProps) => {
    return (
        <span className='material-icons'>{props.children}</span>
    )
}

export default Icon
