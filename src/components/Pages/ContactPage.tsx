import axios from 'axios'
import * as React from 'react'

import TopNav from '../TopNav'
import TextField from '../TextField'
import Footer from '../Sections/Footer'

import Button from '../Button'

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
        axios.post('/contact.php', this.state.formData)
    }

    handleChange = (event: any) => {
        this.setState((state: IState) => ({
            formData: {
                ...state.formData,
                [event.target.name]: event.target.value
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
                            <form className='contact-form'>
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
                                <Button onClick={() => console.log('Submitted.')}>Send</Button>
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
