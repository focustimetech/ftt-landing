import '../assets/styles/main.scss'

// Sections
import Hero from './Sections/Hero'

// Components
import TopNav from './TopNav'

import * as React from 'react'

class App extends React.Component {
    render() {
        return (
            <>
                <TopNav />
                <Hero />
            </>
        )
    }
}

export default App
