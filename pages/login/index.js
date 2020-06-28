import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

import { Layout } from '../../components';
import LoginGrid from './components/LoginGrid';
import LoginForm from './components/LoginForm';
import { Auth } from '../../services';

const Home = () => (
  <Layout>
    <LoginGrid container>
      <Grid
        item
        xs={10}
        md={4}
      >
        <Paper
          elevation={3}
        >
          <LoginForm />
        </Paper>
      </Grid>
    </LoginGrid>
  </Layout>
);

export const getServerSideProps = async (ctx) => {
  await Auth.handleAuthSSR(ctx);

  return {
    props: {}
  };
};

export default Home;
