import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__inner'>
                <div className='footer__logo'>
                    <img src='images/ft-white.png' />
                    <span className='copyright'>© 2019</span>
                </div>
                <ul className='footer__menu'>
                    <Link href='our-story'><li>Our Story</li></Link>
                    <Link href='spotlight'><li>Spotlight</li></Link>
                    <Link href='contact'><li>Contact</li></Link>
                </ul>
            </div>
        </section>
    )
}

export default Footer
