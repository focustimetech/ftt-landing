import * as React from 'react'

// Sections
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'
import Hero from '../Sections/Hero'
import OurStory from '../Sections/OurStory'
import Spotlight from '../Sections/Spotlight'
import WhatWeDo from '../Sections/WhatWeDo'

// Components
import Testimonial from '../Testimonial'
import TopNav from '../TopNav'
import MenuWidget from '../MenuWidget'

interface IProps {
    onMenuOpen: () => void
}

interface IState {
    //menuOpen: boolean
    showTopNav: boolean
}

class LandingPage extends React.Component<IProps> {
    state: IState = {
        showTopNav: false
    }

    onScroll = (event: any) => {
        if (window.pageYOffset > 500 /* && window.pageYOffset < 900*/ )
            this.setState({ showTopNav: true });
        else
            this.setState({ showTopNav: false })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false)
    }

    render() {
        return (
            <div className='site_page'>
                <div>
                    <TopNav fixed visible={this.state.showTopNav} />
                    <Hero />
                    <WhatWeDo />
                    <Testimonial
                        name='Melanie Paas'
                        source={`Vice Principal, School District 61`}
                        image='src/assets/images/testimonials/melanie.jpg'
                        quote={`The opportunity for students to have focus time that is their choice within their school day to actually get work done is such a gift. This is the perfect solution where they have responsibility and we are able to account for their time as we need to required by ministry but still gives them the flexibility of choice.`}
                    />
                    <OurStory />
                    <Testimonial
                        name='Ciaran McLaverty'
                        source={`Vice Principal, Island Catholic Schools`}
                        image='src/assets/images/testimonials/ciaran.jpg'
                        quote={`The great thing is that any teacher anywhere can check if a student has signed up for a block somewhere, and it's a great feature to have. Student accountability has been great; with some students missing these blocks, teachers being able to look a student up and generate a report fixes a lot of problems for us.`}
                    />
                    <Spotlight />
                    <Testimonial
                        name='Mike Bobbit'
                        source={`Vice Principal, School District 62`}
                        image='src/assets/images/testimonials/mike.jpg'
                        quote={`For us it's been amazing. We can run larger sessions where kids come in and it works like a charm. I like being able to schedule months in advance, and Spotlight allows me to do that. Our staff wanted to make sure they could hold kids accountable for where they were and what they were doing, and Spotlight manages that for us.`}
                    />
                    <Contact />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default LandingPage
