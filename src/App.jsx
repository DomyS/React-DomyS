import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Portfolio from './Portfolio'
import { createTheme } from './utils/theme'

function App () {
  return (
    <ThemeProvider theme={createTheme({})}>
      <Router>{<Portfolio />}</Router>
    </ThemeProvider>
  )
}

export default App
