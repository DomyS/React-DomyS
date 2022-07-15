import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, LinearProgress, Fade } from '@material-ui/core'
import { YELLOW_COLOR, BRIGHT_ORANGE } from '../../utils/theme'
import logo from '../../img/logo1.png'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '10%' },
    colorPrimary: {
      backgroundColor: 'white'
    },
    barColorPrimary: {
      background: `linear-gradient(to right, ${YELLOW_COLOR}, ${BRIGHT_ORANGE})`
    }
  })
)

const PageWrapper = props => {
  const { children } = props
  const classes = useStyles()

  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          setLoading(false)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 180)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Grid>
      {loading && (
        <Grid
          container
          style={{
            position: 'absolute',
            left: 0,
            backgroundColor: 'rgba(45, 48, 71, 1)',
            height: '100%',
            width: '100%',
            zIndex: 1,
            paddingLeft: '180px'
          }}
        >
          <Grid
            style={{
              top: '45%',
              left: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%)',
              width: 700,
              paddingLeft: '180px'
            }}
          >
            <img width='120px' className='logo' src={logo} alt='logo' />
            <LinearProgress
              style={{ height: 10, borderRadius: 5 }}
              classes={{
                colorPrimary: classes.colorPrimary,
                barColorPrimary: classes.barColorPrimary
              }}
              variant='determinate'
              value={progress}
            />
          </Grid>
        </Grid>
      )}
      <Grid className={classes.container}>
        <Fade in={progress === 100}>{children}</Fade>
      </Grid>
    </Grid>
  )
}

export default PageWrapper
