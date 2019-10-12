import * as React from 'react'
import '../assets/styles/main.scss'

// Sections
import Hero from './Sections/Hero'
import WhatWeDo from './Sections/WhatWeDo'
import OurStory from './Sections/OurStory'
import Testimonial from './Testimonial'

// Components
import TopNav from './TopNav'

class App extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <WhatWeDo />
                <OurStory />
                <Testimonial
                    name='Jeff Laird'
                    source='Teacher, Oak Bay Secondary School'
                    image='/src/assets/images/testimonials/jeff.jpg'
                    quote={`It's been called "the gift of time" at Oak Bay - to let kids do what they're excited about, what they're passionate about and to get the learning support that they need from teachers. Spotlight is a great accountability mechanism. It's great being able to see where kids are going and to help kids plan out their days and take responsibility for their learning.`}
                />
            </>
        )
    }
}

export default App
