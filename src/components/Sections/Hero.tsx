import * as React from 'react'
import classNames from 'classnames'

const messages: string[] = [
    'on empowering students.',
    'on innovating.',
    'on your school\'s needs'
]

export const percentageFromTop = (): number => {
    let height: number = 0
    
    const el = document.querySelector('#hero')
    if (el)
        height = el.clientHeight

    const percentage: number = window.scrollY / (height - window.innerHeight) * 100
    return percentage >= 100 ? 100 : window.scrollY / (height - window.innerHeight) * 100
}

interface IState {
    messageIndex: number
}

class Hero extends React.Component<{}, IState> {
    state: IState = { messageIndex: 0 }

    componentDidMount() {
        addEventListener('scroll', () => this.forceUpdate(), false)
    }

    render() {
        const style = {
            display: 'inline-block',
            filter: `blur(${-percentageFromTop() / 2 + 50}px)`,
            backgroundSize: `${120 - (percentageFromTop() /  5)}%`
        }

        return (
            <section id='hero' className={classNames('section', 'hero_section')}>
                <div className='hero_image' style={style}/>
                <div className='section__inner'>
                    <h1 className='focus'>Focus</h1>
                    <h3 className='focus_subheader'>{messages[this.state.messageIndex]}</h3>
                    <h4>{`percentageFromTop(['hero']) = ${percentageFromTop()}`}</h4>
                </div>
            </section>
        )
    }
}

export default Hero
