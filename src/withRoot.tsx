import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import deepPurple from '@material-ui/core/colors/deepPurple'
import green from '@material-ui/core/colors/green'
import 'typeface-roboto'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto'
  },
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
      contrastText: '#fff'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
      contrastText: '#fff'
    }
  }
})

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
