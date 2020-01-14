import * as React from 'react'

import Button from '../Button'

const Contact = () => {
    return (
        <section className='section about_section --fit-content'>
            <div className='section__inner'>
                <div className='flexbox'>
                    <div className='--image'>
                        <img src='images/hero/undraw_contact_us_15o2.svg' />
                    </div>
                    <div>
                        <div className='section__inner'>
                            <h1>Contact</h1>
                            <h2>Want a demo? Let’s book a time.</h2>
                            <p>Got a question? Ask us!</p>
                            <Button to='contact'>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
