import { GlobalStyles } from 'styles/GlobalStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Gallery from 'pages/Gallery'
import Header from 'components/Header'

function App(): JSX.Element {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  )
}

export default App
