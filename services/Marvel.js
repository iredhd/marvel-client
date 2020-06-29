import axios from 'axios'
import i18n from 'i18n-js'

import Auth from './Auth'

const Marvel = {
  ITEMS_PER_PAGE: 5,
  getComics: async (heroId, limit = Marvel.ITEMS_PER_PAGE, offset = 0) => {
    try {
      const { data } = await axios.get(`characters/${heroId}/comics`, {
        params: {
          orderBy: '-modified',
          limit,
          offset
        }
      })

      return data.data
    } catch (code) {
      return {
        error: Marvel.handleErrors('marvel/fetch-error')
      }
    }
  },
  getHero: async (heroId) => {
    try {
      const { data } = await axios.get(`characters/${heroId}`)

      return data.data.results[0]
    } catch (code) {
      return {
        error: Marvel.handleErrors('marvel/fetch-error')
      }
    }
  },
  initialLoad: async (ctx) => {
    const { heroId } = Auth.decodeToken(ctx)

    const { error, ...comics } = await Marvel.getComics(heroId)
    const { error: errorHero, ...hero } = await Marvel.getHero(heroId)

    if (errorHero) {
      return {
        error
      }
    }

    return {
      hero,
      comics
    }
  },
  handleThumbnail: ({ path, extension }) => {
    return `${path}/standard_fantastic.${extension}`
  },
  handleDetailsLink: (urls) => {
    return urls.reduce((prev, current) => {
      if (!prev && current.type === 'detail') {
        return current.url
      }

      return prev
    }, null)
  },
  handleErrors: (code) => {
    switch (code) {
      case 'marvel/fetch-error':
        return i18n.t('marvelFetchError')
      default:
        return i18n.t('internalError')
    }
  }
}

export default Marvel
