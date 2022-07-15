import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { YELLOW_COLOR } from '../../utils/theme'

const useStyles = makeStyles(() =>
  createStyles({
    yellowButton: {
      background: YELLOW_COLOR,
      fontFamily: 'Montserrat',
      fontWeight: 700,
      color: '#363A5B',
      '&:hover': {
        backgroundColor: YELLOW_COLOR
      }
    }
  })
)

const MainButton = props => {
  const classes = useStyles()

  return (
    <Button className={classes.yellowButton} variant='contained' {...props} />
  )
}

export default MainButton
