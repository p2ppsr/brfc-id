import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <App />
      <ToastContainer position='bottom-center' />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
