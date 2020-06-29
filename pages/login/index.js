import React from 'react'
import { Grid, Paper } from '@material-ui/core/'
import { motion } from 'framer-motion'

import { Layout } from '../../components'
import LoginGrid from './components/LoginGrid'
import LoginForm from './components/LoginForm'
import { Auth } from '../../services'
import { Animations } from '../../utils'

const Login = () => {
  const panelAnimation = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        ...Animations.spring,
        delay: 0.5,
        staggerChildren: 0.075,
        delayChildren: 0.7
      }
    }
  }

  return (
    <Layout>
      <LoginGrid container>
        <Grid
          item
          xs={10}
          sm={8}
          md={5}
          lg={4}
        >
          <AnimatedPaper
            elevation={3}
            initial='hidden'
            animate='visible'
            variants={panelAnimation}
          >
            <LoginForm />
          </AnimatedPaper>
        </Grid>
      </LoginGrid>
    </Layout>
  )
}

const AnimatedPaper = motion.custom(Paper)

export const getServerSideProps = async (ctx) => {
  await Auth.handleAuthSSR(ctx)

  return {
    props: {}
  }
}

export default Login
