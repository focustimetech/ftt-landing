import * as React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__inner'>
                <div className='footer__logo'>
                    <img src='src/assets/images/ft-white.png' />
                    <span className='copyright'>© 2019</span>
                </div>
                <ul className='footer__menu'>
                    <Link to='our-story'><li>Our Story</li></Link>
                    <Link to='spotlight'><li>Spotlight</li></Link>
                    <Link to='contact'><li>Contact</li></Link>
                </ul>
            </div>
        </section>
    )
}

export default Footer
