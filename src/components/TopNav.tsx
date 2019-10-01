import * as React from 'react'

interface IProps {
    onHero: boolean
}

const TopNav = (props: IProps) => {
    return (
        <nav id='topnav' className='topnav'></nav>
    )
}

export default TopNav