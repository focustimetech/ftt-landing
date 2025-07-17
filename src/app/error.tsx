'use client'

import { useEffect } from 'react'

import TopNav from '../components/TopNav'
import Footer from '../components/Sections/Footer'
import { Button } from '@mui/material'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div className='site_page'>
      <div className='--maximize-footer'>
        <TopNav static />
        <section className='section error_section --fit-content'>
          <div className='section__inner'>
            <h1>{`Error`}</h1>
            <p>Something went wrong...</p>
            <Button variant='contained' color='secondary' onClick={reset}>Reset</Button>
            <img src='/images/svg/studying.svg' />
          </div>
        </section>
        <Footer />
      </div>
    </div>
  )
}
