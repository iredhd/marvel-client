import i18n from 'i18n-js';
import jwt from 'jsonwebtoken';
import { Cookies } from 'react-cookie';

import users from '../assets/users.json';

const Auth = {
  login: (userOrEmail, password) => {
    const user = users.reduce((prev, current) => {
      if (!prev && ([current.user, current.email].includes(userOrEmail))) {
        prev = current;
        return current;
      }

      return prev;
    }, null);

    if (!user) {
      return {
        error: Auth.handleErrors('auth/user-not-found')
      };
    }

    if (user.password.toString() !== password.toString()) {
      return {
        error: Auth.handleErrors('auth/wrong-password')
      };
    }

    Auth.registerToken(user);

    return {
      ...user
    };
  },
  registerToken: (user) => {
    const token = jwt.sign(user, process.env.REACT_APP_SECRET_KEY, { mutatePayload: true });

    const cookies = new Cookies();
    cookies.set('token', token);
  },
  clearToken: () => {
    const cookies = new Cookies();
    cookies.remove('token');
  },
  decodeToken: (ctx) => {
    const token = ctx.req.headers.cookie?.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    return jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
  },
  handleAuthSSR: async ctx => {
    // const cookies = new Cookies();
    // console.log(cookies.get('token'));
    // if (['/', '/login'].includes(ctx.req.url)) {
    //   return;
    // }

    // const token = ctx.req.headers.cookie?.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    // try {
    //   jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
    // } catch ({ message }) {
    //   ctx.res.writeHead(302, {
    //     Location: '/'
    //   });
    //   ctx.res.end();
    // }
  },
  handleErrors: (code) => {
    switch (code) {
      case 'auth/user-not-found':
        return i18n.t('userNotFound');
      case 'auth/wrong-password':
        return i18n.t('wrongPassword');
      default:
        return i18n.t('internalError');
    }
  }
};

export default Auth;