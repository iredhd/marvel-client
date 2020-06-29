import React, { useState, useCallback, useEffect } from 'react'
import { Paper, useTheme, useMediaQuery, Divider, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, List, Link, CircularProgress } from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import moment from 'moment'
import i18n from 'i18n-js'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FlatList from 'flatlist-react'

import { Marvel } from '../../../services'
import { Panel } from '../../../components'
import { Animations } from '../../../utils'

const HomeComics = ({ comics }) => {
  const theme = useTheme()
  const upMd = useMediaQuery(theme.breakpoints.up('md'))

  const panelAnimation = {
    hidden: {
      x: 1000
    },
    visible: {
      x: 0,
      transition: {
        ...Animations.spring,
        delay: 0.5,
        staggerChildren: 0.075,
        delayChildren: 0.7
      }
    }
  }

  const totalPages = Math.ceil(comics.total / Marvel.ITEMS_PER_PAGE)
  const heroId = useSelector(({ user }) => user.heroId)

  const [comicsToShow, setComicsToShow] = useState(comics.results)
  const [isLoading, setIsLoading] = useState(false)

  const [page, setPage] = useState(1)
  const [cache, setCache] = useState({})

  const handlePaginate = useCallback(async (_, value) => {
    setPage(value)

    if (Object.keys(cache).includes(value.toString())) {
      return setComicsToShow(cache[value.toString()])
    } else {
      setIsLoading(true)
    }

    const { error, ...newCommics } = await Marvel.getComics(heroId, Marvel.ITEMS_PER_PAGE, (value - 1) * Marvel.ITEMS_PER_PAGE)

    setIsLoading(false)
    setComicsToShow(newCommics.results)
  })

  useEffect(() => {
    setCache({
      ...cache,
      [page]: [
        ...comicsToShow
      ]
    })
  }, [comicsToShow])

  const renderItem = (comic, index) => (
    <React.Fragment key={comic.id.toString()}>
      <ListItem
        alignItems='center'
      >
        <ListItemAvatar>
          <Avatar
            variant='rounded'
            alt={comic.title}
            src={Marvel.handleThumbnail(comic.thumbnail)}
          />
        </ListItemAvatar>
        <ListItemText
          primary={(
            <Typography
              component='p'
              variant='body1'
              color='textPrimary'
            >
              <Link
                href={Marvel.handleDetailsLink(comic.urls)}
                target='_blank'
              >
                {comic.title}
              </Link>
            </Typography>
          )}
          secondary={(
            <Typography
              component='span'
              variant='body2'
              color='textPrimary'
            >
              {moment(comic.modified).isValid() ? moment(comic.modified).locale(i18n.currentLocale()).format('LLLL') : ''}
            </Typography>
          )}
        />
      </ListItem>
      {index < comicsToShow.length - 1 && (
        <Divider variant='fullWidth' component='li' />
      )}
    </React.Fragment>
  )

  const renderWhenEmpty = () => (
    <EmptyContainer>
      <Typography
        component='span'
        variant='h6'
        color='textPrimary'
        align='center'
      >
        {i18n.t('noComicsFound')}
      </Typography>
    </EmptyContainer>
  )

  return (
    <Panel
      item
      xs={12}
      sm={4}
      initial='hidden'
      animate='visible'
      variants={panelAnimation}
    >
      <Paper
        elevation={3}
      >
        <List>
          {isLoading ? (
            <LoadingContainer>
              <CircularProgress />
            </LoadingContainer>
          ) : (
            <FlatList
              list={comicsToShow}
              renderItem={renderItem}
              renderWhenEmpty={renderWhenEmpty}
            />
          )}
          {totalPages && (
            <PaginationContainer>
              <Pagination
                siblingCount={upMd ? 1 : 0}
                boundaryCount={1}
                count={totalPages}
                color='primary'
                page={page}
                onChange={handlePaginate}
              />
            </PaginationContainer>
          )}
        </List>
      </Paper>
    </Panel>
  )
}

const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  width: inherit;
  justify-content: center;
  padding: 10px;
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

HomeComics.propTypes = {
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
}

export default HomeComics
