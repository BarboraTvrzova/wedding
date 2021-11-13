import './App.css'
import Home from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/:id?' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
