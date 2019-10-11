import * as React from 'react'
import '../assets/styles/main.scss'

// Sections
import About from './Sections/About'
import Hero from './Sections/Hero'

// Components
import TopNav from './TopNav'

class App extends React.Component {
    render() {
        return (
            <>
                <Hero />
                <About />
            </>
        )
    }
}

export default App
