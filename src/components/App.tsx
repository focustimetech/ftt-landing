import * as React from 'react'
import '../assets/styles/main.scss'

// Sections
import Hero from './Sections/Hero'
import WhatWeDo from './Sections/WhatWeDo'
import OurStory from './Sections/OurStory'
import Spotlight from './Sections/Spotlight'

// Components
import TopNav from './TopNav'
import Testimonial from './Testimonial'
import MenuWidget from './MenuWidget'

interface IState {
    menuOpen: boolean
    showTopNav: boolean
}

class App extends React.Component<{}, IState> {
    state: IState = {
        menuOpen: false,
        showTopNav: false
    }

    onScroll = (event: any) => {
        if (window.pageYOffset > 500 /* && window.pageYOffset < 900*/ )
            this.setState({ showTopNav: true });
        else
            this.setState({ showTopNav: false })
    }
    
    handleMenuOpen = () => {
        this.setState({ menuOpen: true })
    }

    handleMenuClose = () => {
        this.setState({ menuOpen: false })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {
        return (
            <>
                <MenuWidget open={this.state.menuOpen} onClose={this.handleMenuClose} />
                <TopNav visible={this.state.showTopNav} onMenuOpen={this.handleMenuOpen} />
                <Hero onMenuOpen={this.handleMenuOpen} />
                <WhatWeDo />
                <OurStory />
                <Testimonial
                    name='Jeff Laird'
                    source='Teacher, Oak Bay Secondary School'
                    image='/src/assets/images/testimonials/jeff.jpg'
                    quote={`It's been called "the gift of time" at Oak Bay - to let kids do what they're excited about, what they're passionate about and to get the learning support that they need from teachers. Spotlight is a great accountability mechanism. It's great being able to see where kids are going and to help kids plan out their days and take responsibility for their learning.`}
                />
                <Spotlight />
            </>
        )
    }
}

export default App
