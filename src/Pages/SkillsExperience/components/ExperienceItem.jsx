import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { BRIGHT_ORANGE, YELLOW_COLOR } from '../../../utils/theme'

const useStyles = makeStyles(theme =>
  createStyles({
    dateText: {
      color: YELLOW_COLOR,
      paddingTop: '8px'
    },
    rightSide: {
      borderLeft: `1px solid ${BRIGHT_ORANGE}`,
      borderBottom: `1px solid ${BRIGHT_ORANGE}`,
      padding: '0px 10px 10px 10px'
    },
    companyName: {
      color: YELLOW_COLOR,
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem'
      }
    },
    jobTitle: {
      color: YELLOW_COLOR,
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem'
      }
    },
    aquiredSkills: {
      color: 'white',
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.75rem'
      }
    },
    leftSide: {
      borderBottom: `1px solid ${BRIGHT_ORANGE}`
    }
  })
)

const ExperienceItem = props => {
  const classes = useStyles()

  return (
    <Grid container xs={12} justifyContent='center'>
      <Grid item xs={3} className={classes.leftSide}>
        <Typography variant='body2' className={classes.dateText}>
          {props.date}
        </Typography>
      </Grid>
      <Grid item xs={8} className={classes.rightSide}>
        <Typography variant='h6' className={classes.companyName}>
          {props.company}
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.jobTitle}>
          {props.jobTitle}
        </Typography>
        <Typography variant='body2' className={classes.aquiredSkills}>
          {props.aquiredSkills}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ExperienceItem
