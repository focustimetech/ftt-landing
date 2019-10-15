import * as React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer__inner'>
                <ul>
                    <div className='footer__logo'>
                        <img src='/src/assets/images/ft-white.png' />
                        <span className='copyright'>© 2019</span>
                    </div>
                    <li>What We Do</li>
                    <li>Our Story</li>
                    <li>Spotlight</li>
                    <li>Contact</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
