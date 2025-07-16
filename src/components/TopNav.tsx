'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { Button } from '@mui/material'

// import Link from './Link'
import MenuWidget from './MenuWidget'
import Link from 'next/link'

interface TopNavProps {
    onHero?: boolean;
    fixed?: boolean;
    static?: boolean;
}
    

const TopNav = (props: TopNavProps) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showTopNav, setShowTopNav] = useState(false)

    useEffect(() => {
        const onScroll = (event: any) => {
            if (window.pageYOffset > 500 /* && window.pageYOffset < 900*/ ) {
                setShowTopNav(true)
            } else {
                setShowTopNav(false)
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <>
            <MenuWidget open={menuOpen} onClose={() => setMenuOpen(false)} />
            <nav id='topnav' className={clsx('topnav', {'--hero': props.onHero}, {'--visible': showTopNav || props.static }, {'--fixed': props.fixed})}>
                <ul className='topnav__menu_list'>
                    <Link href='/'>
                        <div className='topnav__logo'><img src={`/images/${props.onHero ? 'ft-white.png' : 'ft-blue.png'}`} /></div>
                    </Link>
                    <Link href='/our-story'><li>Our Story</li></Link>
                    <Link href='/spotlight'><li>Spotlight</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
                <ul className='topnav__menu_list'>
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
