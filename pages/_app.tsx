import type { AppProps } from 'next/app'
import AppLayout from '../components/AppLayout/AppLayout'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
