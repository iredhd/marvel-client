import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { motion } from 'framer-motion';

const Panel = motion.custom(styled(Grid)`
  overflow-y: auto;
  max-height: 75%;
  margin: 10px !important;
`);

export default Panel;