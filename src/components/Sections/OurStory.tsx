import * as React from 'react'

const OurStory = () => {
    return (
        <section className='section our_story_section --fit-content'>
            <div className='section__inner'>
                <h1>Our Story</h1>
                <div className='flexbox'>
                    <div>
                        <img src='src/assets/images/focustime.jpg' />
                    </div>
                    <div>
                        <h2>We are Focustime.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur metus a elit dignissim, congue egestas ex convallis. Pellentesque eu elit et dui pulvinar ullamcorper sit amet semper eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut justo sit amet arcu dictum laoreet. Ut porttitor augue in orci mollis, sed accumsan eros scelerisque. Nulla et augue est. Nam malesuada urna tortor, eu imperdiet dui ornare ac. Vestibulum sit amet risus libero. Sed vulputate justo neque, venenatis viverra metus ornare ut. Suspendisse hendrerit cursus mauris sed porta. Duis fermentum bibendum magna, rutrum tristique nibh tincidunt in. Nunc molestie rutrum purus et mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                        <a className='link' href='our-story'>Read More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory
