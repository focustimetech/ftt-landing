import * as React from 'react'
import classNames from 'classnames'

import { Button } from '../Button'

const messages: string[] = [
    '...on empowering students.',
    '...on innovating.',
    '...on your school\'s needs'
]

class Hero extends React.Component {
    render() {
        return (
            <section id='hero' className={classNames('section', 'hero_section')}>
                <div className='section__inner'>
                    <div className='focus'>
                        <h1 className='focus__header'>Focus.</h1>
                        <h6 className='focus__subheader'>{messages[0]}</h6>
                    </div>
                    <h6>We create platforms where educators and students can share information and get smarter together.</h6>
                    <Button>Book a Demo</Button>
                </div>
            </section>
        )
    }
}

export default Hero
