import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#424242',
      width: '100%'
    },
    textDiv: {
      paddingLeft: '40px',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    text: {
      color: '#BDBDBD',
      fontSize: '12px'
    }
  })
)

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <div className={classes.textDiv}>
        <Typography className={classes.text}>
          Copyright &copy; Panepo@Github 2020 All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}
