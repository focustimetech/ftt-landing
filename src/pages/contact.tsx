import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'

import TopNav from '../components/TopNav'
import TextField from '../components/TextField'
import Footer from '../components/Sections/Footer'

import Button from '../components/Button'
import makeTitle from '../util/makeTitle'

const DOCUMENT_TITLE: string = 'Contact'

interface IFormData {
    name: string
    email: string
    schoolName: string
    message: string
}

interface IState {
    error: string
    formData: IFormData
    success: boolean
    uploading: boolean
}

class ContactPage extends React.Component {
    state: IState = {
        error: null,
        formData: { name: '', email: '', schoolName: '', message: '' },
        success: false,
        uploading: false
    }

    emailInvalid = (): boolean => {
        return 
    }
    
    emptyFormField = (): boolean => {
        return  
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        if (Object.values(this.state.formData).includes('')) {
            this.setState({ error: 'Please complete the form before sending.' })
            return
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.formData.email)) {
            this.setState({ error: 'Please use a valid email address.' })
            return
        }

        const data = {
            subject: this.state.formData.schoolName,
            senderEmail: this.state.formData.email,
            sender: this.state.formData.name,
            body: this.state.formData.message
        }
        this.setState({ uploading: true })
        axios.post('/api/sendEmail', data).then(() => {
            this.setState((state: IState) => ({
                success: true,
                uploading: false,
                formData: { ...state.formData, message: '' }
            }))
        }, () => {
            this.setState({ error: "That didn't work. Please try again", uploading: false })
        })
    }

    handleChange = (event: any) => {
        if (this.state.uploading) {
            return
        }
        const name: string = event.target.name
        const value: string = event.target.value
        this.setState((state: IState) => ({
            error: null,
            success: false,
            formData: {
                ...state.formData,
                [name]: value
            }
        }))
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>{makeTitle(DOCUMENT_TITLE)}</title>
                </Helmet>
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
                                    {this.state.error && (
                                        <p className='error'>{this.state.error}</p>
                                    )}
                                    {this.state.success && (
                                        <p className='success'>Thanks for reaching out! We'll be sure to keep in touch.</p>
                                    )}
                                    <Button type='submit'>Send</Button>
                                </form>
                            </div>
                        </section>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}

export default ContactPage
