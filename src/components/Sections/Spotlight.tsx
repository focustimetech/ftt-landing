import * as React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../Icon'
import Mailer from './Mailer'

const Spotlight = () => {
    return (
        <>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <h1>Spotlight</h1>
                    <h2>Smart attendance for focus blocks.</h2>
                    <p>Spotlight is a digital interface that provides administrators, teachers and students with powerful tools for self-directed study blocks.</p>
                    <Link to='spotlight' className='link'>Read More</Link>
                </div>
            </section>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <h2 className='icon_header'><Icon>cloud</Icon>Declutter</h2>
                            <p>Transitioning from a paper-based ledger can be difficult. Spotlight enables the process of switching to a cloud-based system easy.</p>
                            <h2 className='icon_header'><Icon>security</Icon>Security</h2>
                            <p>All the student data is stored in Focustime's Canada based encrypted servers, ensuring student data is safe under lock and key.</p>
                            <h2 className='icon_header'><Icon>data_usage</Icon>Better Data</h2>
                            <p>Spotlight allows for administrators to zoom in on the classroom, getting data on how students and teachers are using their time during self-directed blocks.</p>
                        </div>
                        <div>
                            <img className='screenshot' src='src/assets/images/demo/screenshot1.jpg' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Spotlight
