<h1 align="center">
  <a href="http://keezag.iredhd.dev">
    <img alt="Trailspot" src="https://res.cloudinary.com/iredhd/image/upload/v1593402949/keezag/keezag_phqxq8.svg" width=300 />
  </a>
</h1>

<p align="center">
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Configuration">Configuration</a>
</p>

The content of this repository consists of a test of technical knowledge in front-end.

The application consists of a system with two screens, login and home. Where after logged in, the user will be able to see details about his Marvel hero and his comics.

To test the project already configured and running [click here.](http://keezag.iredhd.dev)

## Technologies
- [React](https://github.com/facebook/react)
- [NextJS](https://github.com/vercel/next.js)
- [Prop-Types](https://github.com/facebook/prop-types)
- [i18n-js](https://github.com/fnando/i18n-js)
- [Unform](https://github.com/Rocketseat/unform)
- [Yup](https://github.com/jquense/yup)
- [Material UI](https://github.com/mui-org/material-ui)
- [Axios](https://github.com/axios/axios)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [Framer Motion](https://github.com/framer/motion)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [StandardJS](https://github.com/standard/standard)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Persist Transform Encrypt](https://github.com/maxdeviant/redux-persist-transform-encrypt)

## Installation
```
git clone https://gitlab.com/iredhd/keezag.git
cd keezag
cp .env.example .env
yarn
yarn dev
```
Now access http://localhost:3000

## Configuration
Please, before executing `yarn dev`, fill in the environment variables inside the `.env` file.

| VARIABLE  |  DESCRIPTION  |
| ------------------- | ------------------- |
| REACT_APP_SECRET_KEY |  Secret key for REDUX and JWT encrypt |
| REACT_APP_MARVEL_API_KEY |  Marvel public API key |
| REACT_APP_MARVEL_PRIVATE_KEY |  Marvel private API key |