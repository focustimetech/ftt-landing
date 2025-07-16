import Link from 'next/link'
import React from 'react'

// import Link from '../Link'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__inner'>
                <div className='footer__logo'>
                    <img src='images/ft-white.png' />
                    <span className='copyright'>© 2020 &ndash; {new Date().getFullYear()}</span>
                </div>
                <ul className='footer__menu'>
                    <Link className='next-link' href='our-story'><li>Our Story</li></Link>
                    <Link className='next-link' href='spotlight'><li>Spotlight</li></Link>
                    <Link className='next-link' href='contact'><li>Contact</li></Link>
                </ul>
            </div>
        </section>
    )
}

export default Footer
