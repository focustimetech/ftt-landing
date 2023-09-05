import App from 'next/app'
import Head from 'next/head'
import React from 'react'

import makeTitle from '../util/makeTitle'
import { theme } from '../theme'

import '../../style/main.scss'
import { ThemeProvider } from '@emotion/react'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>{makeTitle()}</title>
                    <meta charSet='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                </Head>
                <ThemeProvider theme={theme}>
                    <Component { ...pageProps } />
                </ThemeProvider>
            </>
        )
    }
}

export default MyApp
