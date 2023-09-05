import React from 'react'
import classNames from 'classnames'

import { Button } from '@mui/material'

import TopNav from '../TopNav'

interface IHeroProps {
    heroKeyword: string;
}

const Hero = (props: IHeroProps) => {
        return (
            <section id='hero' className='section hero_section --fit-content --topnav'>
                <TopNav onHero visible/>
                <div className='section__inner hero__container'>
                    <div className='hero_summary'>
                        <div className='focus'>
                            <h6>Focus on</h6>
                            <h6 className='loop'>
                                {props.heroKeyword}
                            </h6>
                        </div>
                        <h6 className='tagline'>We create platforms where educators and students can share information and get smarter together.</h6>
                        <Button variant='contained' color='secondary' href='contact'>Book a Demo</Button>
                    </div>   
                    <div className='hero_image'>
                        <img src='images/svg/hero.svg'/>
                    </div>
                </div>                               
            </section>
        )
}

export default Hero
