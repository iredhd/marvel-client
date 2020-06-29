import React from 'react'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
import { CircularProgress, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

const LoadingModal = ({ isVisible }) => {
  return (
    <StyledModal
      open={isVisible}
    >
      <StyledContainer>
        <StyledPaper>
          <CircularProgress />
        </StyledPaper>
      </StyledContainer>
    </StyledModal>
  )
}

const StyledContainer = styled.div`
  width: fit-content;
`

const StyledPaper = styled(Paper)`
  padding: 15px;
`

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

LoadingModal.defaultProps = {
  isVisible: false
}

LoadingModal.propTypes = {
  isVisible: PropTypes.bool
}

export default LoadingModal
