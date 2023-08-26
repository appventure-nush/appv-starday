import { Message } from 'models/message'
import { motion } from 'framer-motion'

import { captionAnimation } from 'utils/animations'
import { cardAnimation } from 'utils/animations'
import { Caption, Figure } from './GalleryCard.styles'

const GalleryCard: React.FC<Message> = ({ text, image, from }): JSX.Element => {
  return (
    <motion.li variants={cardAnimation}>
      <Figure>
        <img src={image} alt="" />
        <Caption variants={captionAnimation}>
          <h2>{text}</h2>
          <p>{from ?? ''}</p>
        </Caption>
      </Figure>
    </motion.li>
  )
}

export default GalleryCard
