import React from 'react'
import Header from 'next/head'

/**
 * General tag head for all pages
 */
const Head = () => {
  return (
    <Header>
      <title>Keezag</title>
      <link rel='icon' href='/favicon.ico' />
    </Header>
  )
}

export default Head
