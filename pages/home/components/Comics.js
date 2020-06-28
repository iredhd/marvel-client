import React, { useState, useCallback } from 'react';
import { Paper, Divider, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, List, Link } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import moment from 'moment';
import i18n from 'i18n-js';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Marvel } from '../../../services';
import { Panel } from '../../../components';

const Comics = ({ comics }) => {
  const totalPages = Math.ceil(comics.total / Marvel.ITEMS_PER_PAGE);
  const heroId = useSelector(({ user }) => user.heroId);

  const [comicsToShow, setComicsToShow] = useState(comics.results);

  const [page, setPage] = useState(1);

  const handlePaginate = useCallback(async (_, value) => {
    setPage(value);

    const { error, ...newCommics } = await Marvel.getComics(heroId, Marvel.ITEMS_PER_PAGE, (value - 1) * Marvel.ITEMS_PER_PAGE);

    setComicsToShow(newCommics.results);
  });

  return (
    <Panel
      item
      xs={10}
      sm={6}
    >
      <Paper
        elevation={3}
      >
        <List>
          {comicsToShow.map((comic, index) => {
            return (
              <React.Fragment key={comic.id.toString()}>
                <ListItem
                  alignItems="center"
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="rounded"
                      alt={comic.title}
                      src={Marvel.handleThumbnail(comic.thumbnail)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={(
                      <Typography
                        component="p"
                        variant="body1"
                        color="textPrimary"
                      >
                        <Link
                          href={Marvel.handleDetailsLink(comic.urls)}
                          target="_blank"
                        >
                          {comic.title}
                        </Link>
                      </Typography>
                    )}
                    secondary={(
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {moment(comic.modified).isValid() ? moment(comic.modified).locale(i18n.currentLocale()).format('LLLL') : ''}
                      </Typography>
                  )}
                  />
                </ListItem>
                { index < comicsToShow.length - 1  && (
                  <Divider variant="fullWidth" component="li" />
                )}
              </React.Fragment>
            );
          })}
          <PaginationContainer>
            <Pagination
              siblingCount={0}
              boundaryCount={1}
              count={totalPages}
              color="primary"
              page={page}
              onChange={handlePaginate}
            />
          </PaginationContainer>
        </List>
      </Paper>
    </Panel>
  );
};

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
`;

Comics.propTypes = {
  comics: PropTypes.shape({
    total: PropTypes.number,
    limit: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      modified: PropTypes.string,
      thumbnail: PropTypes.shape({
        path: PropTypes.string,
        extension: PropTypes.string
      }),
      title: PropTypes.string
    }))
  }).isRequired
};

export default Comics;