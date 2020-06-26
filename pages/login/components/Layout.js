import styled from 'styled-components';

import { Layout as SystemLayout } from '../../../components'
import background from '../../../assets/spider-man-bg.jpg'

const Layout = styled(SystemLayout)`
  background-image: url(${background})
`;

export default Layout;