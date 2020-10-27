import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '60vh',
      background: 'linear-gradient(165deg, #9966ff 20%, #ff99ff 70%)'
    }
  })
)

export default function Footer() {
  const classes = useStyles()
  return <div className={classes.root}></div>
}
