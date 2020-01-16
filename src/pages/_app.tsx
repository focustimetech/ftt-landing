import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from '@material-ui/styles'

import makeTitle from '../util/makeTitle'
import { theme } from '../theme'

import '../../style/main.scss'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <title>{makeTitle()}</title>
                </Head>
                <ThemeProvider theme={theme}>
                    <Component { ...pageProps } />
                </ThemeProvider>
            </>
        )
    }
}

export default MyApp
