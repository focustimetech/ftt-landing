import * as React from 'react'
import '../assets/styles/main.scss'

// Sections
import Hero from './Sections/Hero'
import WhatWeDo from './Sections/WhatWeDo'
import OurStory from './Sections/OurStory'

// Components
import TopNav from './TopNav'

class App extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <WhatWeDo />
                <OurStory />
            </>
        )
    }
}

export default App
