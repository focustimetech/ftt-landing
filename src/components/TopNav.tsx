import * as React from 'react'
import * as classNames from 'classnames'

import { Button } from './Button'
import MenuWidget from './MenuWidget'

interface IProps {
    onHero?: boolean
    visible: boolean
    onMenuOpen: () => void
}

const TopNav = (props: IProps) => {
    return (
        <nav id='topnav' className={classNames('topnav', {'--hero': props.onHero}, {'--visible': props.visible})}>
            <ul className='topnav__menu_list'>
                <div className='topnav__logo'><img src={`/src/assets/images/${props.onHero ? 'ft-white.png' : 'ft-blue.png'}`} /></div>
                <li>What We Do</li>
                <li>Our Story</li>
                <li>Spotlight</li>
                <li>Contact</li>
            </ul>
            <ul className='topnav__menu_list'>
                <li><a className='link' href='your-school'>Sign In</a></li>
                <li><Button onPrimary={props.onHero}>Book a Demo</Button></li>
            </ul>
            <a onClick={() => props.onMenuOpen()} className='menu_button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            </a>
        </nav>
    )
}

export default TopNav
