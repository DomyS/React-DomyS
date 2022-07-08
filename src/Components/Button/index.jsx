import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    yellowButton: {
      background: '#FFC65C',
      fontFamily: 'Montserrat',
      marginBottom: '30px',
      fontWeight: 700,
      color: '#363A5B'
    }
  })
)

const AboutMe = props => {
  const classes = useStyles()

  return (
    <Button className={classes.yellowButton} variant='contained' {...props} />
  )
}

export default AboutMe
