import React from 'react'

import { Button } from '@mui/material'

const Mailer = () => {
    const [inputValue, setInputValue] = React.useState('')

    return (
        <section className='section mailer_section --fit-content'>
            <div className='section__inner'>
                <h2>Start using powerful tools that let your self directed study blocks succeed.</h2>
                <div className='textfield'>
                    <input
                        type='text'
                        placeholder='Your email'
                        value={inputValue}
                        onChange={(event: any) => setInputValue(event.target.value)}
                    />
                    <Button variant='contained' color='primary'>Keep Me Posted</Button>
                </div>
            </div>
        </section>
    )
}

export default Mailer
