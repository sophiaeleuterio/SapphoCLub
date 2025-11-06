import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Movies from './pages/Movies'
import Series from './pages/Series'
import Animes from './pages/Animes'
import Shorts from './pages/Shorts'
import ContentDetails from './pages/ContentDetails'
import Profile from './pages/Profile'
import Community from './pages/Community'
import './styles/global.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/curtas" element={<Shorts />} />
        <Route path="/filme/:id" element={<ContentDetails />} />
        <Route path="/serie/:id" element={<ContentDetails />} />
        <Route path="/anime/:id" element={<ContentDetails />} />
        <Route path="/curta/:id" element={<ContentDetails />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/comunidade" element={<Community />} />
      </Routes>
    </Router>
  )
}

export default App

