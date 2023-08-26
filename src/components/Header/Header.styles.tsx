import { motion } from 'framer-motion'
import styled from 'styled-components/macro'

import queries from 'styles/breakpoints'

export const StyledHeader = styled(motion.header)`
  margin: 0 auto;
  max-width: var(--max-width);
  position: relative;
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-9);

  @media ${queries.laptopUp} {
    border-bottom: none;
  }
`

export const Navigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${queries.laptopUp} {
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      bottom: -3rem;
      left: 0;
      margin-bottom: 1.5rem;
      background-color: var(--color-grey-9);
    }
  }
`
