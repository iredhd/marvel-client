import React, { useCallback, useState } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import i18n from 'i18n-js'

import { logout } from '../../../store/actions/User'
import { LoadingModal } from '../../../components'

const HomeAppBar = () => {
  const dispatch = useDispatch()
  const name = useSelector(({ user }) => user.name)

  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = useCallback(() => {
    setIsLoading(true)
    dispatch(logout())
    setTimeout(() => {
      window.location.href = '/login'
    }, 250)
  })

  return (
    <>
      <LoadingModal
        isVisible={isLoading}
      />
      <StyledAppBar
        position='absolute'
      >
        <Toolbar>
          <StyledTitle
            variant='h6'
          >
            {name ? `${i18n.t('wellcomeBack')}, ${name}` : ''}
          </StyledTitle>
          <Button
            color='inherit'
            onClick={handleLogout}
          >
            {i18n.t('logout')}
          </Button>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  position: 'absolute';
  top: 0;
`

const StyledTitle = styled(Typography)`
  flex-grow: 1
`

export default HomeAppBar
