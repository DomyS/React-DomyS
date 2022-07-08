import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  SwipeableDrawer,
  // IconButton,
  AppBar
  // Toolbar
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import logo from '../../img/logo1.png'
// import MenuIcon from '@material-ui/icons/Menu'
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      background: '#3E4366',
      width: '180px'
    }
  })
)

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

const Drawer = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const drawer = (
    <div>
      <SwipeableDrawer
        id='mobileDrawer'
        variant='permanent'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true
        }}
        classes={{ paper: classes.paper }}
        // style={{ width: 180, background: '#3E4366' }}
      >
        <DrawerHeader style={{ justifyContent: 'center' }}>
          <img width='120px' className='logo' src={logo} alt='logo' />
        </DrawerHeader>
        {/* mobile menu content  */}
        {props.menu}
      </SwipeableDrawer>
    </div>
  )

  return (
    <Grid
      container
      // xs={8}
      justifyContent='center'
      style={{ width: 180, background: '#3E4366' }}
      // className={classes.container}
    >
      <AppBar position='fixed' color='default'>
        {drawer}
      </AppBar>
    </Grid>
  )
}

export default Drawer
