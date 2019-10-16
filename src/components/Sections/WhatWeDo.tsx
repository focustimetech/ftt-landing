import * as React from 'react'

const WhatWeDo = () => {
    return (
        <section className='section --fit-content'>
            <div className='section__inner'>
                <h1>What We Do</h1>
                <div className='flexbox'>
                    <div>
                        <h2>More than just software.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis. Pellentesque eu elit et dui pulvinar ullamcorper sit amet semper eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut justo sit amet arcu dictum laoreet.</p>
                        <a className='link'>Read More</a>
                    </div>
                    <div>
                        <img src='src/assets/images/hero/undraw_teacher_35j2.svg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
