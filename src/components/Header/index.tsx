import { Navigation, StyledHeader } from './Header.styles'
import { pageAnimation } from 'utils/animations'

const Header = (): JSX.Element => {
  return (
    <StyledHeader
      exit="exit"
      variants={pageAnimation}
      initial="hide"
      animate="show"
    >
      <Navigation>Happy Star Day, Mrs Lee!</Navigation>
    </StyledHeader>
  )
}

export default Header
