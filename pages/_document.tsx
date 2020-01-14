import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(context: any) {
        const initialProps = await Document.getInitialProps(context)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='stylesheet' href='/style/main.scss' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
