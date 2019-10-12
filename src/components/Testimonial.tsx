import * as React from 'react'

interface IProps {
    image: string
    quote: string
    name: string
    source: string
}

const Testimonial = (props: IProps) => {
    return (
        <section className='testimonial'>
            <div className='testimonial__inner'>
                <div className='testimonial__image'><img src={props.image} /></div>
                <div className='testimonial__content'>
                    <svg className='quotation_mark' xmlns="http://www.w3.org/2000/svg" width="161" height="104.75" viewBox="0 0 161 104.75"><path d="M.06,69c0,.41-.06.82-.06,1.24,0,.14,0,.27,0,.41s0,.55,0,.83l.06,0A34.48,34.48,0,1,0,39.4,36.13,33.51,33.51,0,0,1,71.49,12.32V0A71.44,71.44,0,0,0,.06,69Z"/><path d="M89.57,69c0,.41-.06.82-.06,1.24,0,.14,0,.27,0,.41s0,.55,0,.83l.06,0a34.48,34.48,0,1,0,39.34-35.31A33.51,33.51,0,0,1,161,12.32V0A71.44,71.44,0,0,0,89.57,69Z"/></svg>
                    <p className='testimonial__quote'>{props.quote}</p>
                    <p className='testimonial__name'>{props.name}</p>
                    <p className='testimonial__source'>{props.source}</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
