import axios from 'axios'
import React from 'react'

import { Snackbar, TextField } from '@mui/material'

import makeTitle from '../util/makeTitle'

import LoadingButton from '../components/LoadingButton'
import TopNav from '../components/TopNav'
import Footer from '../components/Sections/Footer'

const DOCUMENT_TITLE: string = 'Contact'

const ReCAPTCHA_SITEKEY: string = '6LfMuiYTAAAAAK_X3hkGwy6KNlxahC9_5PySJeqm'

interface ISnackbarMessage {
    message: string
    key: string
}

interface IFormData {
    name: string
    email: string
    schoolName: string
    message: string
}

interface IState {
    invalidEmail: boolean
    formData: IFormData
    uploading: boolean
    snackbarOpen: boolean
    snackbarMessage?: ISnackbarMessage
}

class ContactPage extends React.Component {
    state: IState = {
        invalidEmail: false,
        formData: { name: '', email: '', schoolName: '', message: '' },
        uploading: false,
        snackbarOpen: false
    }

    queueRef: React.MutableRefObject<ISnackbarMessage[]> = React.createRef<ISnackbarMessage[]>()

    emailInvalid = (): boolean => {
        return 
    }
    
    emptyFormField = (): boolean => {
        return  
    }

    handleSubmit = (event: any) => {
        event.preventDefault()
        if (Object.values(this.state.formData).includes('')) {
            this.handleQueueSnackbar('Please complete the form before sending.')
            return
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.formData.email)) {
            this.setState({ invalidEmail: true })
            return
        }

        const data = {
            subject: this.state.formData.schoolName,
            senderEmail: this.state.formData.email,
            sender: this.state.formData.name,
            body: this.state.formData.message,
        }
        this.setState({ uploading: true, invalidEmail: false, error: null })
        axios.post('/api/sendEmail', data).then(() => {
            this.handleQueueSnackbar("Thanks for reaching out! We'll be sure to keep in touch.")
            this.setState((state: IState) => ({
                uploading: false,
                formData: { ...state.formData, message: '' }
            }))
        }, () => {
            this.handleQueueSnackbar("That didn't work. Please try again")
            this.setState({ uploading: false })
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
            invalidEmail: false,
            formData: {
                ...state.formData,
                [name]: value
            }
        }))
    }

    handleReCaptchaChange = (reCaptchaValue: string) => {
        this.setState({ reCaptchaValue })
    }
    
    handleQueueSnackbar = (message: string) => {
        this.queueRef.current.push({ message, key: String(new Date().getTime()) })

        if (this.state.snackbarOpen) {
            this.setState({ snackbarOpen: false })
        } else {
            this.processSnackbarQueue()
        }
    }

    handleCloseSnackbar = (event: React.SyntheticEvent | MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        this.setState({ snackbarOpen: false })
    }

    processSnackbarQueue = () => {
        if (this.queueRef.current.length > 0) {
            this.setState({
                snackbarMessage: this.queueRef.current.shift(),
                snackbarOpen: true
            })
        }
    }

    componentDidMount() {
        this.queueRef.current = []
    }

    render() {
        return (
            <>
                <div className='site_page'>
                    <div className='--maximize-footer'>
                        <TopNav visible />
                        <section className='section --fit-content'>
                            <div className='section__inner'>
                                <h1>Contact</h1>
                                <p>Drop us a line! We'll be sure to get back to you as soon as possible.</p>
                                <form onSubmit={this.handleSubmit} className='contact-form'>
                                    <TextField
                                        name='name'
                                        label='Your Name'
                                        value={this.state.formData.name}
                                        onChange={this.handleChange}
                                        variant='outlined'
                                        margin='normal'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        name='email'
                                        label='Your Email'
                                        value={this.state.formData.email}
                                        onChange={this.handleChange}
                                        error={this.state.invalidEmail}
                                        helperText={this.state.invalidEmail ? 'Please enter a valid email.' : null}
                                        variant='outlined'
                                        margin='normal'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        name='schoolName'
                                        label='Your School'
                                        value={this.state.formData.schoolName}
                                        onChange={this.handleChange}
                                        variant='outlined'
                                        margin='normal'
                                        required
                                        fullWidth
                                    />
                                    <TextField
                                        name='message'
                                        label='Your Message'
                                        value={this.state.formData.message}
                                        onChange={this.handleChange}
                                        variant='outlined'
                                        margin='normal'
                                        required
                                        multiline
                                        fullWidth
                                    />
                                    <LoadingButton
                                        loading={this.state.uploading}
                                        variant='contained'
                                        color='primary'
                                        type='submit'
                                    >Send</LoadingButton>
                                </form>
                            </div>
                            <Snackbar
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                open={this.state.snackbarOpen}
                                autoHideDuration={6000}
                                message={this.state.snackbarMessage ? this.state.snackbarMessage.message : undefined}
                                onClose={this.handleCloseSnackbar}
                                // onExited={this.processSnackbarQueue}
                            />
                        </section>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}

export default ContactPage
