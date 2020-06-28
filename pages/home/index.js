import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Layout } from '../../components';
import AppBar from './components/AppBar';
import Comics from './components/Comics';
import HomeContainer from './components/HomeContainer';
import Hero from './components/Hero';
import { Marvel, Auth } from '../../services';

const Home = ({ comics, hero }) => {
  return (
    <Layout>
      <AppBar />
      <HomeContainer>
        <Grid
          item
          xs={1}
        />
        <Hero hero={hero} />
        <Grid
          item
          xs={1}
        />
        <Comics comics={comics} />
        <Grid
          item
          xs={1}
        />
      </HomeContainer>
    </Layout>
  );
};

export const getServerSideProps = async ctx => {
  const v = await Auth.handleAuthSSR(ctx);

  if (!v) {
    return {
      props: {}
    };
  }

  const { comics, hero } = await Marvel.initialLoad(ctx);

  return {
    props: {
      comics,
      hero
    }
  };
};

Home.propTypes = {
  comics: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired
};

export default Home;
