import * as React from 'react'

import Mailer from './Mailer'

const Spotlight = () => {
    return (
        <>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <h1>Spotlight</h1>
                    <h2>Smart attendance for focus blocks.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis. Pellentesque eu elit et dui pulvinar ullamcorper sit amet semper eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a className='link'>Book a Demo</a>
                </div>
            </section>
            <Mailer />
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                        </div>
                        <div>
                            <img className='screenshot' src='src/assets/images/demo/screenshot1.jpg' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <img className='screenshot' src='src/assets/images/demo/screenshot2.jpg' />
                        </div>
                        <div>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section --fit-content'>
                <div className='section__inner'>
                    <div className='flexbox'>
                        <div>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                            <h2>Pellentesque eu elit et dui pulvinar ullamcorper.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis.</p>
                        </div>
                        <div>
                            <img className='screenshot' src='src/assets/images/demo/screenshot3.jpg' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Spotlight
