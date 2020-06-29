import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { motion } from 'framer-motion'

/**
 * Global grid wtih default style
 */
const Panel = motion.custom(styled(Grid)`
  margin: 10px !important;
`)

export default Panel
