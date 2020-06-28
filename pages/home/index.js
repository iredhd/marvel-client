import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Layout } from '../../components';
import { AppBar, Comics, Hero } from './components';
import { Marvel } from '../../services';

const Home = ({ comics, hero }) => {
  return (
    <Layout>
      <AppBar />
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
    </Layout>
  );
};

export const getServerSideProps = async ctx => {
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
