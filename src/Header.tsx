import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { linkHeader } from './constants/link.const'
import { Link } from './models/common.model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    button: {
      margin: theme.spacing(1)
    },
    drawer: {
      color: '#616161'
    },
    drawerTitle: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      color: '#651fff',
      marginLeft: -12,
      marginRight: 20
    }
  })
)

export default function Header() {
  const classes = useStyles()
  const [drawer, setDrawer] = React.useState<boolean>(false)

  const handleDrawer = (open: boolean) => () => {
    setDrawer(open)
  }

  const renderDrawer = (
    <Drawer
      className={classes.drawer}
      open={drawer}
      onClose={handleDrawer(false)}
    >
      <Typography
        className={classes.drawerTitle}
        variant="h6"
        color="inherit"
        noWrap
      >
        Reference
      </Typography>
      <div
        tabIndex={0}
        role="button"
        onClick={handleDrawer(false)}
        onKeyDown={handleDrawer(false)}
      ></div>
    </Drawer>
  )

  const renderLink = linkHeader.reduce((output: any[], data: Link) => {
    output.push(
      <Button
        color="primary"
        className={classes.button}
        key={data.text}
        href={data.link}
      >
        {data.text}
      </Button>
    )
    return output
  }, [])

  return (
    <header>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        {renderDrawer}
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <b>プケプケ</b>
          </Typography>
          {renderLink}
        </Toolbar>
      </AppBar>
    </header>
  )
}
