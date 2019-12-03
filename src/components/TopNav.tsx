import * as React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import * as classNames from 'classnames'

import Button from './Button'
import MenuWidget from './MenuWidget'

type IProps = Partial<RouteComponentProps> & {
    onHero?: boolean
    fixed?: boolean
    visible: boolean
}

const TopNav = (props: IProps) => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    // const atRoot: boolean = props.location && props.location.pathname === '/'
    return (
        <>
            <MenuWidget open={menuOpen} onClose={() => setMenuOpen(false)} />
            <nav id='topnav' className={classNames('topnav', {'--hero': props.onHero}, {'--visible': props.visible }, {'--fixed': props.fixed})}>
                <ul className='topnav__menu_list'>
                    <Link to='/'>
                        <div className='topnav__logo'><img src={`src/assets/images/${props.onHero ? 'ft-white.png' : 'ft-blue.png'}`} /></div>
                    </Link>
                    <Link to='our-story'><li>Our Story</li></Link>
                    <Link to='spotlight'><li>Spotlight</li></Link>
                    <Link to='contact'><li>Contact</li></Link>
                </ul>
                <ul className='topnav__menu_list'>
                    {/*
                    <li><a className='link' href='your-school'>Sign In</a></li>
                    */}
                    <li><Button onPrimary={props.onHero} to='contact'>Book a Demo</Button></li>
                </ul>
                <a onClick={() => setMenuOpen(true)} className='menu_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
                </a>
            </nav>
        </>
    )
}

export default TopNav
