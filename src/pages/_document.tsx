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
                    <meta charSet='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta name="google-site-verification" content="0DcKBYV4vWtx6YTcSxXTIHA05BODKtEnCuZc1BH7U2E" />
                    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
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
