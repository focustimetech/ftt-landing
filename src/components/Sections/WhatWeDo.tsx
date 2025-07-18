import React from 'react'

const WhatWeDo = () => {
    return (
        <section className='section --fit-content'>
            <div className='section__inner'>
                <h1>What We Do</h1>
                <div className='flexbox'>
                    <div>
                        <h2>More than just software.</h2>
                        <p>We started Focustime for schools to harness data from self-directed study blocks to better develop the student-teacher relationship and to allow students to study more efficiently.</p>
                        <p>Since then, we've continued to build our attendance platform, Spotlight, with one goal in mind: to help students and teachers get smarter together.</p>
                    </div>
                    <div className='--image'>
                        <img src='images/svg/teacher.svg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo
