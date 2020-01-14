import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import makeTitle from '../util/makeTitle'

import '../../style/main.scss'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>{makeTitle()}</title>
                </Head>
                <Component { ...pageProps } />
            </>
        )
    }
}

export default MyApp
