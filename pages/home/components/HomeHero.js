import React from 'react';
import { Paper,  Avatar, Typography, makeStyles, Link } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Marvel } from '../../../services';
import { Panel } from '../../../components';
import { Animations } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const HomeHero = ({ hero }) => {
  const classes = useStyles();

  const panelAnimation = {
    hidden: {
      x: -1000
    },
    visible: {
      x: 0,
      transition: {
        ...Animations.spring,
        delay: 0.5,
        staggerChildren: 0.075,
        delayChildren: 0.7,
      },
    },
  };

  return (
    <Panel
      item
      xs={10}
      sm={8}
      variants={panelAnimation}
      initial="hidden"
      animate="visible"
    >
      <StyledPaper
        elevation={3}
      >
        <StyledAvatar
          alt={hero.name}
          src={Marvel.handleThumbnail(hero.thumbnail)}
          className={classes.large}
        />
        <Link
          href={Marvel.handleDetailsLink(hero.urls)}
          target="_blank"
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            {hero.name}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          align="center"
          gutterBottom
        >
          {hero.description}
        </Typography>
      </StyledPaper>
    </Panel>
  );
};

const StyledPaper = styled(Paper)`
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledAvatar = styled(Avatar)`
  margin-bottom: 10px;
`;

HomeHero.propTypes = {
  hero: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    thumbnail: PropTypes.shape({
      extension: PropTypes.string,
      path: PropTypes.string
    }),
    urls: PropTypes.array
  }).isRequired
};

export default HomeHero;