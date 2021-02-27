import Layout from '../components/layout'
import '../styles/globals.css'
import "../styles/prism.css"
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
