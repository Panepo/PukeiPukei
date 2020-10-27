import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import withRoot from './withRoot'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column'
    }
  })
)

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default withRoot(App)
