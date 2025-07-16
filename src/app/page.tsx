// Sections
import Contact from '../components/Sections/Contact'
import Footer from '../components/Sections/Footer'
import Hero from '../components/Sections/Hero'
import OurStory from '../components/Sections/OurStory'
import Spotlight from '../components/Sections/Spotlight'
import WhatWeDo from '../components/Sections/WhatWeDo'

// Components
import Testimonial from '../components/Testimonial'
import TopNav from '../components/TopNav'

import { getHeroText } from '../util/heroText'
import { makeTitle, makeDescription } from '../util/document'

export const metadata = {
    title: makeTitle(),
    description: makeDescription(),
}

const disableContact = process.env.DISABLE_CONTACT === 'true'

const LandingPage = async () => {
    const heroTexts = await getHeroText();

    return (
        <div className='site_page'>
            <div>
                <TopNav fixed />
                <Hero texts={heroTexts}/>
                <WhatWeDo />
                <Testimonial
                    name='Melanie Paas'
                    source={`Vice Principal, School District 61`}
                    image='images/testimonials/melanie.jpg'
                    quote={`The opportunity for students to have focus time that is their choice within their school day to actually get work done is such a gift. This is the perfect solution where they have responsibility and we are able to account for their time as we need to required by ministry but still gives them the flexibility of choice.`}
                />
                <OurStory />
                <Testimonial
                    name='Ciaran McLaverty'
                    source={`Vice Principal, Island Catholic Schools`}
                    image='images/testimonials/ciaran.jpg'
                    quote={`The great thing is that any teacher anywhere can check if a student has signed up for a block somewhere, and it's a great feature to have. Student accountability has been great; with some students missing these blocks, teachers being able to look a student up and generate a report fixes a lot of problems for us.`}
                />
                <Spotlight />
                <Testimonial
                    name='Mike Bobbit'
                    source={`Vice Principal, School District 62`}
                    image='images/testimonials/mike.jpg'
                    quote={`For us it's been amazing. We can run larger sessions where kids come in and it works like a charm. I like being able to schedule months in advance, and Spotlight allows me to do that. Our staff wanted to make sure they could hold kids accountable for where they were and what they were doing, and Spotlight manages that for us.`}
                />
                {disableContact ? undefined : <Contact />}
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage
