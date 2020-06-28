import React from 'react';
import { Paper,  Avatar, Typography, makeStyles, Link } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Marvel } from '../../../services';
import { Panel } from '../../../components';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const Hero = ({ hero }) => {
  const classes = useStyles();

  return (
    <Panel
      item
      xs={5}
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

Hero.propTypes = {
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

export default Hero;