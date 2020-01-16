import React from 'react'
import classNames from 'classnames'
import TextLoop from 'react-text-loop'

import Button from '../Button'
import TopNav from '../TopNav'

const messages: string[] = [
    'empowering students.',
    'innovating.',
    "your school's needs.",
    'learning.',
    'teaching.',
    'what matters.',
    'administrating.'
]

const Loop = TextLoop as any

const Hero = () => {
        return (
            <section id='hero' className='section hero_section --fit-content --topnav'>
                <TopNav onHero visible/>
                <div className='section__inner hero__container'>
                    <div className='hero_summary'>
                        <div className='focus'>
                            <h6>Focus on</h6>
                            <h6 className='loop'>
                                <Loop interval={1500} noWrap={true} children={messages} />
                            </h6>
                        </div>
                        <h6 className='tagline'>We create platforms where educators and students can share information and get smarter together.</h6>
                        <Button onPrimary href='contact'>Book a Demo</Button>
                    </div>   
                    <div className='hero_image'>
                        <img src='images/svg/hero.svg'/>
                    </div>
                </div>                               
            </section>
        )
}

export default Hero
