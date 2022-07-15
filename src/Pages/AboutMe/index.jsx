import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Box, Fade } from '@material-ui/core'
import profilePhoto from '../../img/image.jpg'
import Button from '../../Components/Button'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../Components/PageWrapper/PageWrapper'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '30%' },
    textWrapper: {
      width: 450,
      // height: 450,
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    }
  })
)

const AboutMe = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <PageWrapper>
      <Grid className={classes.container}>
        <Fade
          in={setTimeout(() => true, 1500)}
          appear={setTimeout(() => false, 3000)}
        >
          <Grid container xs={12} className={classes.textWrapper}>
            <Grid xs={4} style={{ height: '135px' }}>
              <Fade
                appear={setTimeout(() => false, 3000)}
                in={setTimeout(() => false, 3000)}
              >
                <img
                  width='180px'
                  className='profilePhoto'
                  src={profilePhoto}
                  alt='profilePhoto'
                  style={{ position: 'relative', top: '-40px', right: '40px' }}
                />
              </Fade>
            </Grid>
            <Grid xs={8}>
              <Typography
                variant='h5'
                gutterBottom
                style={{
                  color: '#FF6347',
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
                  color: 'white'
                }}
              >
                I am passionate self-taugt frontend developer with a lot of
                energy for learning new things, open for cool new challenges and
                ideas.
              </Typography>
              <Typography
                variant='subtitle1'
                style={{
                  textAlign: 'left',
                  padding: '15px 20px',
                  color: 'white'
                }}
              >
                I consider myself hard-working, structured and a team player. In
                my free-time I enjoy playing volleyball, reading books and
                watching movies.
              </Typography>
              <Typography
                variant='subtitle1'
                style={{
                  textAlign: 'left',
                  padding: '15px 20px',
                  color: 'white'
                }}
              >
                Looking forward in working with passionate positive people.
              </Typography>
              <Box mb={8}>
                <Button onClick={() => navigate('/skills-experience')}>
                  Check out my skills &#38; experience
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Grid>
    </PageWrapper>
  )
}

export default AboutMe
