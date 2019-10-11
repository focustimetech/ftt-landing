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
                    <p className='testimonial__quote'>{props.quote}</p>
                    <p className='testimonial__name'>{props.name}</p>
                    <p className='testimonial__source'>{props.source}</p>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
