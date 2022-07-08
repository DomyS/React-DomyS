import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Particles from './Particles'
import Drawer from './Components/Drawer'
import AboutMe from './Pages/AboutMe'
import SkillsExperience from './Pages/SkillsExperience'
import {
  // BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  Routes
  // useRouteMatch,
  // useParams
} from 'react-router-dom'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontFamily: 'Montserrat',
      textAlign: 'center',
      height: '100%',
      width: '100%',
      background: '#2D3047',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: '-1'
    },
    menuLink: {
      color: 'white',
      textDecoration: 'none',
      marginTop: '40px',
      '&:active, &:focus': {
        color: '#FFC65C'
      }
    }
  })
)

function Portfolio () {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      <Particles />
      <Drawer
        menu={
          <Grid
            container
            direction='column'
            justifyContent='center'
            style={{ marginTop: '40px' }}
          >
            <Link className={classes.menuLink} to='/'>
              About me
            </Link>
            <Link className={classes.menuLink} to='/skills-experience'>
              Skills &#38; Experience
            </Link>
            <Link className={classes.menuLink} to='/projects'>
              Projects
            </Link>
            <Link className={classes.menuLink} to='/contact'>
              Contact
            </Link>
          </Grid>
        }
      />
      <Grid container justifyContent='center' style={{ paddingLeft: '180px' }}>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/skills-experience' element={<SkillsExperience />} />
          <Route path='/projects' element={<AboutMe />} />
          <Route path='/contact' element={<AboutMe />} />
        </Routes>
      </Grid>
    </Grid>
  )
}

export default Portfolio
