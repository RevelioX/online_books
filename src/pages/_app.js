import '@/styles/globals.css'
import { CssVarsProvider } from '@mui/joy'
import Nav from '../components/nav.js'

export default function App({ Component, pageProps }) {
  return( <CssVarsProvider><Nav/> <Component {...pageProps} /></CssVarsProvider>)
}
