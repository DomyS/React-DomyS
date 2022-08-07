import React from 'react'
import { Grid, Link, Box } from '@material-ui/core'

const SocialButtons = () => {
  return (
    <Box my={8}>
      <Grid item xs={12} container justifyContent='center'>
        <Grid item xs={3}>
          <Link
            style={{ color: 'white', fontSize: '1.25rem' }}
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/domante-stirbyte-07789b92'
          >
            <i className='fa fa-linkedin'></i>
          </Link>
        </Grid>
        <Grid item xs={3} className='icon'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'white', fontSize: '1.25rem' }}
            href='https://github.com/DomyS'
          >
            <i className='fa fa-github'></i>
          </Link>
        </Grid>
        <Grid item xs={3} className='icon'>
          <Link
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'white', fontSize: '1.25rem' }}
            href='mailto:domante.stirbyte@gmail.com'
          >
            <i className='fa fa-envelope'></i>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SocialButtons
