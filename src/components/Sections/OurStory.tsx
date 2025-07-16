import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import FocusTimeImage from '../../../public/images/focustime.jpg'

const OurStory = () => {
    return (
        <section className='section our_story_section --fit-content'>
            <div className='section__inner'>
                <h1>Our Story</h1>
                <div className='flexbox'>
                    <div className='--image'>
                        <Image width={720} src={FocusTimeImage} alt='Focustime' />
                    </div>
                    <div>
                        <h2>We are Focustime.</h2>
                        <p>We are a team of Victoria high school grads who are showcasing the value of our education. We’ve experienced first hand the challenges that educators have collecting data and making sense of it. Our technology fills the gap.  Not only do we create the platforms, but we also guide the analysis of the data for the benefit of both school and student.</p>
                        <Link href='/our-story' className='link'>Read More</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory
