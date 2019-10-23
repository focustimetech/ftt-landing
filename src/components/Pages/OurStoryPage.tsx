import * as React from 'react'

import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'

const OurStoryPage = () => {
    return (
        <div className='site_page'>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <h1>Our Story</h1>
                    <div className='flexbox'>
                        <div>
                            <p>We are a team of Victoria high school grads who are showcasing the value of our education. We’ve experienced first hand the challenges that educators have collecting data and making sense of it. Our technology fills the gap.  Not only do we create the platforms, but we also guide the analysis of the data for the benefit of both school and student.</p>
                        </div>
                        <div>
                            <img src='src/assets/images/focustime2.jpg' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <div className='profile'>
                        <div className='photo'>
                            <img src='src/assets/images/vlad.jpg' />
                        </div>
                        <div>
                            <p>Vlad is the CEO at Focustime. Having worked with students and teachers in the past through tutoring programs, Vlad understand the daily challenges in classrooms. His vision is to allow students, teachers, and administrators to work together with meaningful software to fill the gaps in the learning process. He co-founded Focustime with the goal of improving self-directed study blocks and giving all schools to tools to succeed.</p>
                        </div>
                    </div>
                    <div className='profile'>
                        <div className='photo'>
                            <img src='src/assets/images/curtis.jpg' />
                        </div>
                        <div>
                            <p>Curtis is the CTO at Focustime. He brings valuable experience in software development to a team that works together to achieve a common goal of improving education. His passion for programming shines through the friendly interfaces and well built features of the educational platforms. A strong believer that good software can improve productivity, Curtis makes sure that all features are optimized for ease of use.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </div>
    )
}

export default OurStoryPage
