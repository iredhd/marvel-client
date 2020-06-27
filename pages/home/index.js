import React from 'react';
import { Grid, Paper } from '@material-ui/core/';

import { Layout } from '../../components';
import { AppBar } from './components';
import { Auth } from '../../services';

const Home = () => (
  <Layout>
    <AppBar />
  </Layout>
);

// export const getServerSideProps = async (ctx) => {
//   // await Auth.handleAuthSSR(ctx);

//   return {
//     props: {}
//   };
// };

export default Home;
