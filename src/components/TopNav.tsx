import * as React from 'react'
import * as classNames from 'classnames'

import { Button } from './Button'

interface IProps {
    onHero?: boolean
    visible: boolean
}

const TopNav = (props: IProps) => {
    return (
        <nav id='topnav' className={classNames('topnav', {'--hero': props.onHero}, {'--visible': props.visible})}>
            <ul className='topnav__menu_list'>
                <div className='topnav__logo'><img src={`/src/assets/images/${props.onHero ? 'ft-white.png' : 'ft-blue.png'}`} /></div>
                <li>What We Do</li>
                <li>Our Story</li>
                <li>Spotlight</li>
            </ul>
            <ul className='topnav__menu_list'>
                <li><a className='link' href='your-school'>Sign In</a></li>
                <Button onPrimary>Book a Demo</Button>
            </ul>
        </nav>
    )
}

export default TopNav
