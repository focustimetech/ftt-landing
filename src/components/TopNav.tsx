import * as React from 'react'

interface IProps {
    onHero: boolean
}

const TopNav = (props: IProps) => {
    return (
        <nav id='topnav' className='topnav'>
            <div className='topnav__logo'><img src='/src/assets/images/ft-white.png' /></div>
            <ul className='topnav__menu_list'>
                <li>What We Do</li>
                <li>Our Story</li>
            </ul>
        </nav>
    )
}

export default TopNav