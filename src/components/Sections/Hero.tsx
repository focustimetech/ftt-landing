import * as React from 'react'
import classNames from 'classnames'
import TextLoop from 'react-text-loop'

import Button from '../Button'
import TopNav from '../TopNav'

const messages: string[] = [
    'On empowering students...',
    'On innovating...',
    "On your school's needs..."
]

const Loop = TextLoop as any

interface IProps {
    onMenuOpen: () => void
}

const Hero = (props: IProps) => {

        return (
            <section id='hero' className={classNames('section', 'hero_section')}>
                <TopNav onHero visible onMenuOpen={props.onMenuOpen} />
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <div className='focus'>
                                <h1 className='focus__header'>Focus.</h1>
                                <h6 className='focus__subheader'>
                                    <Loop noWrap={false} children={messages} />
                                </h6>
                            </div>
                            <h6>We create platforms where educators and students can share information and get smarter together.</h6>
                            <Button onPrimary>Book a Demo</Button>
                        </div>
                        <div><img className='hero_image' src='src/assets/images/hero/undraw_new_ideas_jdea (1).svg'/></div>
                    </div>
                    
                </div>
            </section>
        )

}

export default Hero
