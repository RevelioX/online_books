import '@/styles/globals.css'
import Nav from '../components/nav.js'

export default function App({ Component, pageProps }) {
  return( <div><Nav/> <Component {...pageProps} /></div>)
}
