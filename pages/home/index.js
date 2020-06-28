import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Layout } from '../../components';
import HomeAppBar from './components/HomeAppBar';
import HomeComics from './components/HomeComics';
import HomeContainer from './components/HomeContainer';
import HomeHero from './components/HomeHero';
import { Marvel, Auth } from '../../services';

const Home = ({ comics, hero }) => {
  return (
    <Layout>
      <HomeAppBar />
      <HomeContainer>
        <Grid
          item
          xs={1}
        />
        <HomeHero hero={hero} />
        <Grid
          item
          xs={1}
        />
        <HomeComics comics={comics} />
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
