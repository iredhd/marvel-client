import styled from 'styled-components'

/**
 * Default styled home container
 */
const HomeContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media(max-width: 960px) {
    flex-direction: column;
  }
`

export default HomeContainer
