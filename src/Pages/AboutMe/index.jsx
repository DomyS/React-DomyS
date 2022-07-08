import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import profilePhoto from '../../img/image.jpg'
import Button from '../../Components/Button'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '10%' },
    textWrapper: {
      width: 450,
      // height: 450,
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    }
  })
)

const AboutMe = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Grid container xs={12} className={classes.textWrapper}>
        <Grid xs={4} style={{ height: '135px' }}>
          <img
            width='180px'
            className='profilePhoto'
            src={profilePhoto}
            alt='logo'
            style={{ position: 'relative', top: '-40px', right: '40px' }}
          />
        </Grid>
        <Grid xs={8}>
          <Typography
            variant='h5'
            gutterBottom
            style={{
              color: '#FF6347',
              fontFamily: 'Montserrat',
              marginTop: '20px',
              textAlign: 'left'
            }}
          >
            Domante Stirbyte
          </Typography>
          <Typography
            variant='h6'
            textAlign='left'
            style={{
              color: '#FFC65C',
              fontFamily: 'Montserrat',
              textAlign: 'left'
            }}
          >
            Frontend Developer | Oslo
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant='subtitle1'
            style={{
              textAlign: 'left',
              padding: '15px 20px',
              color: 'white',
              fontFamily: 'Montserrat'
            }}
          >
            I am passionate self-taugt frontend developer with a lot of energy
            for learning new things, open for cool new challenges and ideas.
          </Typography>
          <Typography
            variant='subtitle1'
            style={{
              textAlign: 'left',
              padding: '15px 20px',
              color: 'white',
              fontFamily: 'Montserrat'
            }}
          >
            I consider myself hard-working, structured and a team player. In my
            free-time I enjoy playing volleyball, reading books and watching
            movies.
          </Typography>
          <Typography
            variant='subtitle1'
            style={{
              textAlign: 'left',
              padding: '15px 20px',
              color: 'white',
              fontFamily: 'Montserrat'
            }}
          >
            Looking forward in working with passionate positive people
          </Typography>
          <Button>Contact Me</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutMe
