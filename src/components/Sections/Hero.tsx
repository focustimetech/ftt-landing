import * as React from 'react'
import classNames from 'classnames'

const messages: string[] = [
    'on empowering students.',
    'on innovating.',
    'on your school\'s needs'
]

interface IState {
    messageIndex: number
}

class Hero extends React.Component<{}, IState> {
    state: IState = { messageIndex: 0 }

    componentDidMount() {

    }

    render() {
        return (
            <section id='hero' className={classNames('section', 'hero_section')}>
                <div className='section__inner'>
                    <h1 className='focus'>Focus</h1>
                    <h3 className='focus_subheader'>{messages[this.state.messageIndex]}</h3>
                </div>
            </section>
        )
    }
}

export default Hero
