import React, { useEffect, useCallback } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import styled from 'styled-components'
import LanguageIcon from '@material-ui/icons/Language'
import i18n from 'i18n-js'
import moment from 'moment'
import { Cookies } from 'react-cookie'

import { Translations } from '../utils'

const cookie = new Cookies()
const actualLanguage = cookie.get('language')

i18n.locale = actualLanguage
moment.locale(actualLanguage)

/**
 * System language selector
 */
const LanguageSwitcher = () => {
  const navigatorLang = navigator.language.toLowerCase()

  const handleChange = (event) => {
    setLanguage(event.target.value)
  }

  const setLanguage = useCallback((lang) => {
    cookie.set('language', lang)
    window.location.href = window.location.pathname
  })

  const options = Object.keys(Translations)

  useEffect(() => {
    if (!actualLanguage) {
      setLanguage(options.includes(navigatorLang) ? navigatorLang : 'en')
    }
  }, [])

  return (
    <LanguageSwitcherContainer>
      <StyledLaguageIcon />
      <StyledSelect
        value={actualLanguage}
        onChange={handleChange}
      >
        {options.map(item => (
          <MenuItem
            key={item.toString()}
            value={item.toLowerCase()}
          >
            {item.toUpperCase()}
          </MenuItem>
        ))}
      </StyledSelect>
    </LanguageSwitcherContainer>
  )
}

const LanguageSwitcherContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  padding-top: 10px;   
  padding-left: 10px;   
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
`

const StyledLaguageIcon = styled(LanguageIcon)`
  margin-right: 10px;
  color: white;
`

const StyledSelect = styled(Select)`
  .MuiInput-input {
    color: white;
    border-color: white;
  }
  :before {
    border-bottom: 1px solid rgba(255,255,255, 0.4) !important;
  }
  .MuiSelect-icon {
    color: white;
  }
`

export default LanguageSwitcher
