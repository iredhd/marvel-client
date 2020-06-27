import i18n from 'i18n-js';
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

    return {
      ...user
    };
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