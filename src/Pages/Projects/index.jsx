import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Fade } from '@material-ui/core'
import Card from './components/Card'
import CovidTracker from '../../img/covid.png'
import FyloLanding from '../../img/FyloLand.png'
import Veure from '../../img/Veure.png'
import { BRIGHT_ORANGE } from '../../utils/theme'
import PageWrapper from '../../Components/PageWrapper/PageWrapper'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '10%' },
    textWrapper: {
      width: 450,
      height: 'fit-content',
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    }
  })
)

const Projects = () => {
  const classes = useStyles()

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 170)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <PageWrapper>
      <Grid container xs={12} justifyContent='space-between'>
        <Grid xs={12}>
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
