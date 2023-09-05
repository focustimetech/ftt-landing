import React from 'react'

import { Button } from '@mui/material'

const Contact = () => {
    return (
        <section className='section about_section --fit-content'>
            <div className='section__inner'>
                <div className='flexbox'>
                    <div className='--image'>
                        <img src='images/svg/contact.svg' />
                    </div>
                    <div>
                        <div className='section__inner'>
                            <h1>Contact</h1>
                            <h2>Want a demo? Let’s book a time.</h2>
                            <p>Got a question? Ask us!</p>
                            <Button variant='contained' color='primary' href='contact'>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
