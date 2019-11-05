import * as React from 'react'

import TopNav from '../TopNav'
import Footer from '../Sections/Footer'

const ContactPage = () => {
    return (
        <div className='site_page'>
            <div>
                <TopNav visible />
                <section className='section'>
                    <div className='section__inner'>
                        <h1>Contact</h1>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default ContactPage
