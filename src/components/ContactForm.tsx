'use client';

import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

import { Snackbar, TextField } from '@mui/material'
import LoadingButton from './LoadingButton'

const ReCAPTCHA_SITEKEY: string = process.env.RECAPTCHA_SITEKEY || ''

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

const ContactForm = () => {
  const [state, setState] = useState<IState>({
    invalidEmail: false,
    formData: { name: '', email: '', schoolName: '', message: '' },
    uploading: false,
    snackbarOpen: false
  })

  const queueRef = useRef<ISnackbarMessage[]>([])

  const emailInvalid = (): boolean => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.formData.email)
  }

  const emptyFormField = (): boolean => {
    return Object.values(state.formData).includes('')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (emptyFormField()) {
      handleQueueSnackbar('Please complete the form before sending.')
      return
    } else if (emailInvalid()) {
      setState((state: IState) => ({ ...state, invalidEmail: true }))
      return
    }

    const data = {
      subject: state.formData.schoolName,
      senderEmail: state.formData.email,
      sender: state.formData.name,
      body: state.formData.message,
    }
    setState((state: IState) => ({ ...state, uploading: true, invalidEmail: false, error: null }))
    axios.post('/api/sendEmail', data).then(() => {
      handleQueueSnackbar("Thanks for reaching out! We'll be sure to keep in touch.")
      setState((state: IState) => ({
        ...state,
        uploading: false,
        formData: { ...state.formData, message: '' }
      }))
    }, () => {
      handleQueueSnackbar("That didn't work. Please try again")
      setState((state: IState) => ({ ...state, uploading: false }))
    })
  }

  const handleChange = (event: any) => {
    if (state.uploading) {
      return
    }
    const name: string = event.target.name
    const value: string = event.target.value
    setState((state: IState) => ({
      ...state,
      error: null,
      success: false,
      invalidEmail: false,
      formData: {
        ...state.formData,
        [name]: value
      }
    }))
  }

  const handleReCaptchaChange = (reCaptchaValue: string) => {
    setState((state: IState) => ({ ...state, reCaptchaValue }))
  }

  const handleQueueSnackbar = (message: string) => {
    queueRef.current.push({ message, key: String(new Date().getTime()) })

    if (state.snackbarOpen) {
      setState((state: IState) => ({ ...state, snackbarOpen: false }))
    } else {
      processSnackbarQueue()
    }
  }

  const handleCloseSnackbar = (event: React.SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setState((state: IState) => ({ ...state, snackbarOpen: false }))
  }

  const processSnackbarQueue = () => {
    if (queueRef.current.length > 0) {
      setState((state: IState) => ({
        ...state,
        snackbarMessage: queueRef.current.shift(),
        snackbarOpen: true
      }))
    }
  }

  useEffect(() => {
    queueRef.current = []
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} className='contact-form'>
        <TextField
          name='name'
          label='Your Name'
          value={state.formData.name}
          onChange={handleChange}
          variant='outlined'
          margin='normal'
          required
          fullWidth
        />
        <TextField
          name='email'
          label='Your Email'
          value={state.formData.email}
          onChange={handleChange}
          error={state.invalidEmail}
          helperText={state.invalidEmail ? 'Please enter a valid email.' : null}
          variant='outlined'
          margin='normal'
          required
          fullWidth
        />
        <TextField
          name='schoolName'
          label='Your School'
          value={state.formData.schoolName}
          onChange={handleChange}
          variant='outlined'
          margin='normal'
          required
          fullWidth
        />
        <TextField
          name='message'
          label='Your Message'
          value={state.formData.message}
          onChange={handleChange}
          variant='outlined'
          margin='normal'
          required
          multiline
          fullWidth
        />
        <LoadingButton
          loading={state.uploading}
          variant='contained'
          color='primary'
          type='submit'
        >Send</LoadingButton>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={state.snackbarOpen}
        autoHideDuration={6000}
        message={state.snackbarMessage ? state.snackbarMessage.message : undefined}
        onClose={handleCloseSnackbar}
      // onExited={this.processSnackbarQueue}
      />
    </>
  )
}

export default ContactForm;
