import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import Head from './Head'
import LanguageSwitcher from './LanguageSwitcher'

/**
 * Global page layout
 */
const PageLayout = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
  }

  #__next {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    background-image: url('/spider-man-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`

const Layout = ({ children }) => (
  <>
    <PageLayout />
    <Head />
    <StyledContainer>
      {children}
      <LanguageSwitcher />
    </StyledContainer>
  </>
)

Layout.propTypes = {
  /** Children to render inside of global layout */
  children: PropTypes.node.isRequired
}

export default Layout
