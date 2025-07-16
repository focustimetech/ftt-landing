
import { Button } from '@mui/material'

import Contact from '../../components/Sections/Contact'
import Footer from '../../components/Sections/Footer'

import TopNav from '../../components/TopNav'
import Icon from '../../components/Icon'
import Testimonial from '../../components/Testimonial'

import { makeTitle, makeDescription } from '../../util/document'

// Images
import JeffImage from '../../../public/images/testimonials/jeff.jpg';
import Screenshot1Image from '../../../public/images/demo/screenshot1.jpg';
import Screenshot2Image from '../../../public/images/demo/screenshot2.jpg';
import Screenshot3Image from '../../../public/images/demo/screenshot3.jpg';

import Image from 'next/image'

const disableContact = process.env.DISABLE_CONTACT === 'true'

const DOCUMENT_TITLE: string = 'Spotlight'

export const metadata = {
    title: makeTitle(DOCUMENT_TITLE),
    description: makeDescription(),
}

const SpotlightPage = async () => {
    return (
        <>
            <div className='site-page'>
                <div>
                    <TopNav static />
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <h1>Spotlight</h1>
                            <h2>Smart attendance for focus blocks.</h2>
                            <p>Spotlight is a digital interface that provides administrators, teachers and students with powerful tools for self-directed study blocks.</p>
                            <Button variant='contained' color='primary' href='contact'>Book a Demo</Button>
                        </div>
                    </section>
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <div className='flexbox'>
                                <div>
                                    <h2 className='icon_header'><Icon>cloud</Icon>Declutter</h2>
                                    <p>Transitioning from a paper-based ledger can be difficult. Spotlight enables the process of switching to a cloud-based system easy.</p>
                                    <h2 className='icon_header'><Icon>security</Icon>Security</h2>
                                    <p>Data security and integrity is our biggest priority. We work to comply with all school and district level regulations.</p>
                                    <h2 className='icon_header'><Icon>data_usage</Icon>Better Data</h2>
                                    <p>Spotlight allows for administrators to zoom in on the classroom, getting better data on how students and teachers are using their time during self-directed blocks.</p>
                                </div>
                                <div className='--image'>
                                    <Image className='screenshot' width={720} alt='Spotlight' src={Screenshot1Image} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <div className='flexbox'>
                                <div className='--image'>
                                    <Image className='screenshot' width={720} alt='Spotlight' src={Screenshot2Image} />
                                </div>
                                <div>
                                    <h2 className='icon_header'><Icon>double_arrow</Icon>Stay on Track</h2>
                                    <p>Spotlight allows teachers to schedule around self-directed blocks and streamline their weeks and months ahead — no planner necessary.</p>
                                    <h2 className='icon_header'><Icon>local_cafe</Icon>Peace of Mind</h2>
                                    <p>Both organizing and administrating students during self-directed blocks can be difficult for teachers. With Spotlight, students are notified on where they need to be in order to ensure seamless transitions between classes.</p>
                                    <h2 className='icon_header'><Icon>how_to_reg</Icon>Student Data</h2>
                                    <p>Spotlight enables teachers to reflect on student habits during self-directed blocks, allowing teachers to offer direction to students that need it most.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <div className='flexbox'>
                                <div>
                                    <h2 className='icon_header'><Icon>cached</Icon>Habit Building</h2>
                                    <p>Self-directed blocks give students a glimpse into post-secondary learning. With Spotlight, we help students stay on track to prepare them for future education.</p>
                                    <h2 className='icon_header'><Icon>today</Icon>Accountability</h2>
                                    <p>Spotlight offers a clear and concise look at missed and attended blocks.</p>
                                    <h2 className='icon_header'><Icon>thumb_up</Icon>Ease of Use</h2>
                                    <p>Spotlight is accessable and easy to access for students using a mobile phone or computer — at school or from home.</p>
                                </div>
                                <div className='--image'>
                                    <Image className='screenshot' width={720} alt='Spotlight' src={Screenshot3Image} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <Testimonial
                        name='Jeff Laird'
                        source='Teacher, School District 61'
                        image={JeffImage}
                        quote={
                            <>
                                It's been called "the gift of time" at Oak Bay &ndash; to let kids do what they're excited about, what they're passionate about and to get the learning support that they need from teachers. Spotlight is a great accountability mechanism. It's great being able to see where kids are going and to help kids plan out their days and take responsibility for their learning.
                            </>
                        }
                    />
                    {disableContact ? undefined : <Contact />}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default SpotlightPage
