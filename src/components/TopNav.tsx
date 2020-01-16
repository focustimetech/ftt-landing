import classNames from 'classnames'
import React from 'react'

import { Button } from '@material-ui/core'

import Link from './Link'
import MenuWidget from './MenuWidget'

interface IProps {
    onHero?: boolean
    fixed?: boolean
    visible: boolean
}

const TopNav = (props: IProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    return (
        <>
            <MenuWidget open={menuOpen} onClose={() => setMenuOpen(false)} />
            <nav id='topnav' className={classNames('topnav', {'--hero': props.onHero}, {'--visible': props.visible }, {'--fixed': props.fixed})}>
                <ul className='topnav__menu_list'>
                    <Link href='/'>
                        <div className='topnav__logo'><img src={`/images/${props.onHero ? 'ft-white.png' : 'ft-blue.png'}`} /></div>
                    </Link>
                    <Link href='our-story'><li>Our Story</li></Link>
                    <Link href='spotlight'><li>Spotlight</li></Link>
                    <Link href='contact'><li>Contact</li></Link>
                </ul>
                <ul className='topnav__menu_list'>
                    {/*
                    <li><a className='link' href='your-school'>Sign In</a></li>
                    */}
                    <li><Button variant='contained' color={props.onHero ? 'secondary' : 'primary'} href='contact'>Book a Demo</Button></li>
                </ul>
                <a onClick={() => setMenuOpen(true)} className='menu_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </a>
            </nav>
        </>
    )
}

export default TopNav
