import { createGlobalStyle } from 'styled-components';

import background from '../../../assets/spider-man-bg.jpg';

const PageLayout = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
  }

  #__next {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export default PageLayout;