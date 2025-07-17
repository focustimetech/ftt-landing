import React from 'react'

import Mailer from './Mailer'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import Screenshot1Image from '../../../public/images/demo/screenshot1.jpg'
import { Cloud, DataUsage, Security } from '@mui/icons-material'

const Spotlight = () => {
    return (
        <>
            <section className='section spotlight_section --fit-content'>
                <div className='section__inner'>
                    <h1>Spotlight</h1>
                    <h2>Smart attendance for focus blocks.</h2>
                    <p>Spotlight is a digital interface that provides administrators, teachers and students with powerful tools for self-directed study blocks.</p>
                    <Link className={clsx('next-link link --on-primary')} href='/spotlight'>Read More</Link>
                </div>
            </section>
            <section className='section spotlight_section --fit-content'>
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <h2 className='icon_header'><Cloud />Declutter</h2>
                            <p>Transitioning from a paper-based ledger can be difficult. Spotlight enables the process of switching to a cloud-based system easy.</p>
                            <h2 className='icon_header'><Security />Security</h2>
                            <p>Data security and integrity is our biggest priority. We work to comply with all school and district level regulations.</p>
                            <h2 className='icon_header'><DataUsage />Better Data</h2>
                            <p>Spotlight allows for administrators to zoom in on the classroom, getting better data on how students and teachers are using their time during self-directed blocks.</p>
                        </div>
                        <div className='--image'>
                            <Image className='screenshot' width={720} src={Screenshot1Image} alt='Spotlight' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Spotlight
