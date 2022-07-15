import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import ExperienceItem from './components/ExperienceItem'
import { BRIGHT_ORANGE } from '../../utils/theme'
import ReactIcon from '../../img/reactLogoWithName.png'
import TypescriptIcon from '../../img/typescript.png'
import HtmlLogo from '../../img/htmlLogo.png'
import CssLogo from '../../img/cssLogo.png'
import JavascriptIcon from '../../img/javascript.png'
import GitIcon from '../../img/gitLogo.png'
import WordpressIcon from '../../img/Wordpress_Blue_logo.png'
import Redux from '../../img/reduxWhite.png'
import Storybook from '../../img/storybookWhite.png'
import PageWrapper from '../../Components/PageWrapper/PageWrapper'

const useStyles = makeStyles(() =>
  createStyles({
    container: { position: 'relative', marginTop: '10%' },
    experienceWrapper: {
      backgroundColor: 'rgba(62, 67, 102, 0.3)',
      height: 'fit-content'
    },
    skillsWrapper: {
      backgroundColor: 'rgba(62, 67, 102, 0.3)'
    },
    experienceText: {
      color: BRIGHT_ORANGE,
      marginTop: '10px'
    },
    skillsText: {
      color: BRIGHT_ORANGE,
      marginTop: '10px'
    },
    experienceItemWrapper: {
      margin: '20px 0px 40px 0px'
    }
  })
)

const experienceData = [
  {
    date: '2022 April - currently',
    company: 'Factiverse',
    jobTitle: 'Frontend Developer (part-time)',
    aquiredSkills:
      'Component creation for Storybook with React, Material-UI, Typescript. Also some testing with React Testing Library'
  },
  {
    date: '2020 Aug - currently',
    company: 'D-Fetch',
    jobTitle: 'Frontend Developer',
    aquiredSkills:
      'Component creation with React, Material-UI, Typescript, React Hooks, D3.js.'
  },
  {
    date: '2019 May – 2019 Nov',
    company: 'Sci-Code',
    jobTitle: 'Frontend Developer (internship)',
    aquiredSkills:
      'React & Redux Course, Atomic Design course, Component creation, StorybookJs'
  }
]

const imagesData = [
  { width: '90px', url: HtmlLogo, alt: 'html' },
  { width: '65px', url: CssLogo, alt: 'css' },
  { width: '80px', url: JavascriptIcon, alt: 'javascript' },
  { width: '160px', url: ReactIcon, alt: 'react' },
  { width: '160px', url: TypescriptIcon, alt: 'typescript' },
  { width: '70px', height: '70px', url: WordpressIcon, alt: 'wordpress' },
  { width: '150px', height: '60px', url: Redux, alt: 'redux' },
  { width: '80px', height: '40px', url: GitIcon, alt: 'git' },
  { width: '130px', url: Storybook, alt: 'storybook' }
]

const SkillsExperience = () => {
  const classes = useStyles()

  return (
    <PageWrapper>
      <Grid
        container
        justifyContent='space-evenly'
        className={classes.container}
      >
        <Grid xs={6} className={classes.experienceWrapper}>
          <Typography variant='h5' className={classes.experienceText}>
            Experience
          </Typography>
          <Grid className={classes.experienceItemWrapper}>
            {experienceData.map(e => (
              <ExperienceItem
                date={e.date}
                company={e.company}
                jobTitle={e.jobTitle}
                aquiredSkills={e.aquiredSkills}
              />
            ))}
          </Grid>
        </Grid>
        <Grid xs={4} className={classes.skillsWrapper}>
          <Typography gutterBottom variant='h5' className={classes.skillsText}>
            Skills
          </Typography>
          <Grid container flexWrap='wrap'>
            {imagesData.map((image, i) => (
              <img
                key={i}
                width={image.width}
                height={image.height}
                src={image.url}
                alt={image.alt}
                style={{ padding: '15px' }}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  )
}

export default SkillsExperience
