import React from 'react'
import Error, { ErrorProps } from 'next/error'
import { NextPageContext } from 'next'

import TopNav from '../components/TopNav'
import Footer from '../components/Sections/Footer'

class ErrorImpl extends Error {
    static getInitialProps({ res, err, }: NextPageContext): Promise<ErrorProps> | ErrorProps {
        const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404
        return { statusCode }
    }

    render() {
        return (
            <div className='site_page'>
                <div className='--maximize-footer'>
                    <TopNav visible />
                    <section className='section error_section --fit-content'>
                        <div className='section__inner'>
                            <h1>{`Error ${this.props.statusCode}`}</h1>
                            <p>Something went wrong...</p>
                            <img src='/images/svg/studying.svg' />
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default ErrorImpl
