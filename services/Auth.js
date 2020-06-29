import i18n from 'i18n-js'
import jwt from 'jsonwebtoken'
import { Cookies } from 'react-cookie'

import users from '../assets/users.json'

const cookies = new Cookies()

const Auth = {
  login: (userOrEmail, password) => {
    const user = users.reduce((prev, current) => {
      if (!prev && ([current.user, current.email].includes(userOrEmail))) {
        prev = current
        return current
      }

      return prev
    }, null)

    if (!user) {
      return {
        error: Auth.handleErrors('auth/user-not-found')
      }
    }

    if (user.password.toString() !== password.toString()) {
      return {
        error: Auth.handleErrors('auth/wrong-password')
      }
    }

    Auth.registerToken(user)

    return {
      ...user
    }
  },
  registerToken: (user) => {
    const token = jwt.sign(user, process.env.REACT_APP_SECRET_KEY, { mutatePayload: true })

    cookies.set('token', token)
  },
  clearToken: () => {
    cookies.remove('token')
  },
  decodeToken: (ctx) => {
    const token = ctx.req.headers.cookie?.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

    return jwt.verify(token, process.env.REACT_APP_SECRET_KEY)
  },
  handleAuthSSR: async ctx => {
    const token = ctx.req?.headers?.cookie?.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')

    if (!token && ctx?.req?.url !== '/login') {
      await Auth.redirectTo(ctx.res, '/login')
      return false
    }

    if (!token && ctx?.req?.url === '/login') {
      return true
    }

    try {
      jwt.verify(token, process.env.REACT_APP_SECRET_KEY)

      if (ctx?.req?.url === '/login') {
        await Auth.redirectTo(ctx.res, '/home')
        return false
      }
      return true
    } catch ({ message }) {
      await Auth.redirectTo(ctx.res, '/login')
      return false
    }
  },
  redirectTo: async (res, Location) => {
    await res.writeHead(302, {
      Location
    })
    return res.end()
  },
  handleErrors: (code) => {
    switch (code) {
      case 'auth/user-not-found':
        return i18n.t('userNotFound')
      case 'auth/wrong-password':
        return i18n.t('wrongPassword')
      default:
        return i18n.t('internalError')
    }
  }
}

export default Auth
