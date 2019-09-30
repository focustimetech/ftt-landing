import * as React from 'react'

interface IProps {
    data: string
}

const TopNav = (props: IProps) => {
    return (
        <nav id='topnav' className='topnav'><h6>{props.data}</h6></nav>
    )
}

export default TopNav