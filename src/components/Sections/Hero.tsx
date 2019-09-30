import * as React from 'react'
import classNames from 'classnames'

const messages: string[] = [
    'on empowering students.',
    'on innovating.',
    'on your school\'s needs'
]

class Hero extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <section className={classNames('section', 'hero_section')}>
                <div className='section__inner'>
                    <h1 className='focus'>Focus</h1>
                    <h3 className='focus_subheader'></h3>
                </div>
            </section>
        )
    }
}

export default Hero
