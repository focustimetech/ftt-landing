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
                    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap' rel='stylesheet' />
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
