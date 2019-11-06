import * as React from 'react'

import TopNav from '../TopNav'
import TextField from '../TextField'
import Footer from '../Sections/Footer'

interface IFormData {
    name: string
    email: string
    schoolName: string
    message: string
}

const ContactPage = () => {
    const [formData, setFormData]: [IFormData, React.Dispatch<React.SetStateAction<IFormData>>]
        = React.useState({ name: '', email: '', schoolName: '', message: '' })

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className='site_page'>
            <div className='--maximize-footer'>
                <TopNav visible />
                <section className='section --fit-content'>
                    <div className='section__inner'>
                        <h1>Contact</h1>
                        <form className='contact-form'>
                            <TextField
                                name='name'
                                label='Your Name'
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </form>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default ContactPage
