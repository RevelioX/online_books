import '@/styles/globals.css'
import Nav from '../components/nav.js'

export default function App({ Nav, Component, pageProps }) {
  return( <Nav Component {...pageProps} />)
}
