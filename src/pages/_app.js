import '@/styles/globals.css'
import { CssVarsProvider, extendTheme, StyledEngineProvider } from '@mui/joy'
import Nav from '../components/nav.js'

const theme = extendTheme({ cssVarPrefix: "dark" });

export default function App({ Component, pageProps }) {
  return( 
  <StyledEngineProvider injectFirst>
  <CssVarsProvider defaultMode='dark' theme={theme} colorSchemeSelector="#demo_dark-mode-by-default"
  ><Nav/> <div id="demo_dark-mode-by-default"><Component {...pageProps} /></div>
  </CssVarsProvider>
  </StyledEngineProvider>)
}
