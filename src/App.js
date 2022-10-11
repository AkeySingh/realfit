// import logo from './logo.svg'
// import './App.css'
import Home from './home'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Home />
      </Router>
    </div>
  )
}

export default App
