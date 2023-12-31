import styled from 'styled-components/macro'
import Macy from 'macy'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

import queries from 'styles/breakpoints'
import data from 'data/data.json'
import GalleryCard from 'components/GalleryCard'
import { pageAnimation, galleryAnimation } from 'utils/animations'

const Wrapper = styled(motion.main)`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: var(--max-width);
  @media ${queries.tabletUp} {
    padding-top: 2.5rem;
  }
`

const List = styled(motion.ul)`
  margin: 0;

  img {
    width: 100%;
  }
`

const macyOptions = {
  container: '#macy-grid',
  trueOrder: true,
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1000: 3,
    650: {
      margin: 40,
      columns: 2,
    },
  },
}

const Gallery = (): JSX.Element => {
  useEffect(() => {
    new Macy(macyOptions)
  }, [])

  return (
    <Wrapper exit="exit" variants={pageAnimation} initial="hide" animate="show">
      <h1 className="sr-only">Main Gallery</h1>
      <List
        id="macy-grid"
        initial="hide"
        animate="show"
        variants={galleryAnimation}
      >
        {data.map((message, index) => {
          return <GalleryCard {...message} key={index} />
        })}
      </List>
    </Wrapper>
  )
}

export default Gallery
