import React from 'react'

import TopNav from '../components/TopNav'
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'

const OurStoryPage = () => {
    return (
        <div className='site_page'>
            <div>
                <TopNav visible />
                <section className='section --fit-content'>
                    <div className='section__inner'>
                        <h1>Our Story</h1>
                        <div className='flexbox'>
                            <div>
                                <p>We are a team of Victoria high school grads who are showcasing the value of our education. We’ve experienced first hand the challenges that educators have collecting data and making sense of it. Our technology fills the gap.  Not only do we create the platforms, but we also guide the analysis of the data for the benefit of both school and student.</p>
                                <p>Our story started in 2016 when our high school adopted flex blocks into its schedule. Although the idea to use an app to manage this new schedule was suggested by teachers, no such app existed. Instead, teachers used agenda books and stamps to hold students accountable, which didn’t exactly work.</p>
                                <p>With the need for a new attendance solution we created the first version of Spotlight, which went on to be used by our school the following year. Since then, we have been continuously improving the platform and adding new tools for teachers, students and administrators.</p>
                            </div>
                            <div className='--image'>
                                <img src='images/focustime3.jpg' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section --fit-content'>
                    <div className='section__inner'>
                        <div className='profile'>
                            <div className='photo'>
                                <img src='images/vlad.jpg' />
                            </div>
                            <div>
                                <h2>
                                    <span>Vlad Lyesin</span>
                                    <a href='https://linkedin.com/in/lyesin' className='linked-in' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                </h2>
                                <h3>Chief Executive Officer</h3>
                                <p>Vlad is the CEO at Focustime. Having worked with students and teachers in the past through tutoring programs, Vlad understand the daily challenges in classrooms. His vision is to allow students, teachers, and administrators to work together with meaningful software to fill the gaps in the learning process. He co-founded Focustime with the goal of improving self-directed study blocks and giving all schools to tools to succeed.</p>
                            </div>
                        </div>
                        <div className='profile'>
                            <div className='photo'>
                                <img src='images/curtis.jpg' />
                            </div>
                            <div>
                                <h2>
                                    <span>Curtis Upshall</span>
                                    <a href='https://linkedin.com/in/upshall' className='linked-in' target='_blank'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    </a>
                                </h2>
                                <h3>Chief Technical Officer</h3>
                                <p>Curtis is the CTO at Focustime. He brings valuable experience in software development to a team that works together to achieve a common goal of improving education. His passion for programming shines through the friendly interfaces and well built features of the educational platforms. A strong believer that good software can improve productivity, Curtis makes sure that all features are optimized for ease of use.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default OurStoryPage
