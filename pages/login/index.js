import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

import { Layout } from '../../components';
import { PageLayout, LoginGrid, LoginForm } from './components';

const Home = () => {
  return (
    <>
      <PageLayout />
      <Layout>
        <LoginGrid container>
          <Grid item xs={6} xl={4} lg={4} md={4} sm={4}>
            <Paper elevation={3}>
              <LoginForm />
            </Paper>
          </Grid>
        </LoginGrid>
      </Layout>
    </>
  );
};

export default Home;
