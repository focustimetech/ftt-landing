'use client'

import React from 'react'

import { Button } from '@mui/material'

import TopNav from '../TopNav'
import { TextLoop } from '@pr0gramm/react-text-loop'

interface HeroProps {
    texts: string[]
}

const disableCta = process.env.NEXT_PUBLIC_DISABLE_CTA === 'true'

const Hero = (props: HeroProps) => {

    return (
        <section id='hero' className='section hero_section --fit-content --topnav'>
            <TopNav onHero static />
            <div className='section__inner hero__container'>
                <div className='hero_summary'>
                    <div className='focus'>
                        <h6>
                            <span>Focus on</span>
                            <br />
                            <TextLoop>
                                {props.texts.map((text, index) => (
                                    <span key={index} className='loop'>
                                        {text}
                                    </span>
                                ))}
                            </TextLoop>
                        </h6>
                    </div>
                    <h6 className='tagline'>We create platforms where educators and students can share information and get smarter together.</h6>
                    {!disableCta && (
                        <Button variant='contained' color='secondary' href='/contact'>Book a Demo</Button>
                    )}
                </div>
                <div className='hero_image'>
                    <img src='images/svg/hero.svg'/>
                </div>
            </div>                               
        </section>
    )
}

export default Hero
