import * as React from 'react'
import classNames from 'classnames'
import TextLoop from 'react-text-loop'

import { Button } from '../Button'
import TopNav from '../TopNav'

const messages: string[] = [
    '...on empowering students.',
    '...on innovating.',
    "...on your school's needs."
]

const Loop = TextLoop as any

class Hero extends React.Component {
    render() {
        return (
            <section id='hero' className={classNames('section', 'hero_section')}>
                <TopNav onHero />
                <div className='section__inner'>
                    <div className='hero_container'>
                        <div>
                            <div className='focus'>
                                <h1 className='focus__header'>Focus.</h1>
                                <h6 className='focus__subheader'>
                                    <Loop noWrap={false} children={messages} />
                                </h6>
                            </div>
                            <h6>We create platforms where educators and students can share information and get smarter together.</h6>
                            <Button>Book a Demo</Button>
                        </div>
                        <div><img className='hero_image' src='/src/assets/images/hero/undraw_new_ideas_jdea (1).svg'/></div>
                    </div>
                    
                </div>
            </section>
        )
    }
}

export default Hero
