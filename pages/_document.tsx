import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
// import AppHeader from '../components/AppHeader'
// import * as styles from '../components/AppHeader.css'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    {/* <div className={styles.header}>
                        <AppHeader />
                    </div> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument