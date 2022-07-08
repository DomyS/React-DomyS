import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '10%', width: '100%' },
    experienceWrapper: {
      // width: 300,
      // height: 450,
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    },
    skillsWrapper: {
      // width: 300,
      // height: 450,
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    }
  })
)

const SkillsExperience = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container}>
      <Grid xs={12} container justifyContent='space-evenly'>
        <Grid xs={6} className={classes.experienceWrapper}>
          <Typography
            variant='h5'
            style={{
              color: '#FF6347',
              fontFamily: 'Montserrat',
              marginTop: '10'
            }}
          >
            Experience
          </Typography>
          <Grid>
            <Grid container xs={12} style={{ margin: '0px 15px' }}>
              <Grid item xs={3} style={{ borderBottom: '1px solid #FF6347' }}>
                <Typography
                  variant='body2'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    paddingTop: '10px'
                  }}
                >
                  2022 April - Currently
                </Typography>
              </Grid>
              <Grid
                item
                xs={7}
                style={{
                  borderLeft: '1px solid #FF6347',
                  borderBottom: '1px solid #FF6347',
                  padding: '0px 10px 10px 10px'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Factiverse
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Frontend Developer (part-time)
                </Typography>
                <Typography
                  variant='body2'
                  style={{
                    color: 'white',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ margin: '0px 15px' }}>
              <Grid item xs={3} style={{ borderBottom: '1px solid #FF6347' }}>
                <Typography
                  variant='body2'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    paddingTop: '10px'
                  }}
                >
                  2022 April - Currently
                </Typography>
              </Grid>
              <Grid
                item
                xs={7}
                style={{
                  borderLeft: '1px solid #FF6347',
                  borderBottom: '1px solid #FF6347',
                  padding: '0px 10px 10px 10px'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Factiverse
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Frontend Developer (part-time)
                </Typography>
                <Typography
                  variant='body2'
                  style={{
                    color: 'white',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} style={{ margin: '0px 15px' }}>
              <Grid item xs={3} style={{ borderBottom: '1px solid #FF6347' }}>
                <Typography
                  variant='body2'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    paddingTop: '10px'
                  }}
                >
                  2022 April - Currently
                </Typography>
              </Grid>
              <Grid
                item
                xs={7}
                style={{
                  borderLeft: '1px solid #FF6347',
                  borderBottom: '1px solid #FF6347',
                  padding: '0px 10px 10px 10px'
                }}
              >
                <Typography
                  variant='h6'
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Factiverse
                </Typography>
                <Typography
                  variant='body1'
                  gutterBottom
                  style={{
                    color: '#FFC65C',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Frontend Developer (part-time)
                </Typography>
                <Typography
                  variant='body2'
                  style={{
                    color: 'white',
                    fontFamily: 'Montserrat',
                    textAlign: 'left'
                  }}
                >
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                  reiciendis voluptatibus maiores alias consequatur aut
                  perferendis doloribus asperiores repellat
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={4} className={classes.skillsWrapper}>
          <Typography
            variant='h5'
            style={{ color: '#FF6347', fontFamily: 'Montserrat' }}
          >
            Skills
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SkillsExperience
