import axios from 'axios'
import React from 'react'

import TopNav from '../components/TopNav'
import TextField from '../components/TextField'
import Footer from '../components/Sections/Footer'

import Button from '../components/Button'
import { sendEmail } from '../util/email'

interface IFormData {
    name: string
    email: string
    schoolName: string
    message: string
}

interface IState {
    error: boolean
    formData: IFormData
    success: boolean
    uploading: boolean
}
class ContactPage extends React.Component {
    state: IState = {
        error: false,
        formData: { name: '', email: '', schoolName: '', message: '' },
        success: false,
        uploading: false
    }
    
    handleSubmit = (event: any) => {
        event.preventDefault()
        const { schoolName, email, name, message } = this.state.formData
        sendEmail(schoolName, message, name, email)
    }

    handleChange = (event: any) => {
        const name: string = event.target.name
        const value: string = event.target.value
        this.setState((state: IState) => ({
            formData: {
                ...state.formData,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <div className='site_page'>
                <div className='--maximize-footer'>
                    <TopNav visible />
                    <section className='section --fit-content'>
                        <div className='section__inner'>
                            <h1>Contact</h1>
                            <form onSubmit={this.handleSubmit} className='contact-form'>
                                <h3>Your Name</h3>
                                <input
                                    name='name'
                                    value={this.state.formData.name}
                                    onChange={this.handleChange}
                                />
                                <h3>Your Email</h3>
                                <input
                                    name='email'
                                    value={this.state.formData.email}
                                    onChange={this.handleChange}
                                />
                                <h3>Your School</h3>
                                <input
                                    name='schoolName'
                                    value={this.state.formData.schoolName}
                                    onChange={this.handleChange}
                                />
                                <h3>Your Message</h3>
                                <textarea
                                    name='message'
                                    value={this.state.formData.message}
                                    onChange={this.handleChange}
                                />
                                <br />
                                <Button type='submit'>Send</Button>
                            </form>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        )
        }
}

export default ContactPage
