import * as React from 'react'
import '../assets/styles/main.scss'

// Sections
import Hero from './Sections/Hero'

// Components
import TopNav from './TopNav'

export const distanceFromTop = (elementIDs: string[]): number => {
    let height: number = 0
    elementIDs.forEach((elementID: string) => {
        const el = document.querySelector(`#${elementID}`)
        if (el) {
            height += document.querySelector(`#${elementID}`).clientHeight
        }
    })
    return height - window.innerHeight - window.scrollY
}

class App extends React.Component {
    componentDidMount() {
        addEventListener('scroll', () => this.forceUpdate(), false)
    }

    render() {
        return (
            <>
                <TopNav data={`distanceFromTop(['hero']) = ${distanceFromTop(['hero'])}`} />
                <Hero />
            </>
        )
    }
}

export default App
