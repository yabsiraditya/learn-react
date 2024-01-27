import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Components/NotFound'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
