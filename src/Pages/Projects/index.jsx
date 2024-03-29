import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Card from './components/Card'
import CovidTracker from '../../img/covid.png'
import FyloLanding from '../../img/FyloLand.png'
import Veure from '../../img/Veure.png'
import { BRIGHT_ORANGE } from '../../utils/theme'
import PageWrapper from '../../Components/PageWrapper/PageWrapper'

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      position: 'relative',
      marginTop: '10%',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }
    },
    textWrapper: {
      width: 450,
      height: 'fit-content',
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    }
  })
)

const Projects = () => {
  const classes = useStyles()

  return (
    <PageWrapper>
      <Grid
        container
        item
        xs={12}
        justifyContent='space-between'
        className={classes.container}
      >
        <Grid item xs={12}>
          <Typography
            variant='h5'
            style={{
              color: BRIGHT_ORANGE,
              marginBottom: 20
            }}
          >
            Projects
          </Typography>
        </Grid>
        <Card
          projectTitle='Covid-19 Tracker'
          usedTech='React, Chart.js'
          projectPhoto={CovidTracker}
          projectUrl='https://covid-19-tracker1.netlify.app/'
        />
        <Card
          projectTitle='Fylo Landing Page'
          usedTech='React, FlexBox, Scss'
          projectPhoto={FyloLanding}
          projectUrl='https://fylo-land.netlify.app/'
        />
        <Card
          projectTitle='Veure E-shop'
          usedTech='Javascript, Scss, LocalStorage'
          projectPhoto={Veure}
          projectUrl='https://veure-e-shop.vercel.app/'
        />
      </Grid>
    </PageWrapper>
  )
}

export default Projects
