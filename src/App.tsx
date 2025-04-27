import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Navbar from './components/Navbar'
import RegistroDonante from './components/RegistroDonante'
import { AuthProvider } from './context/AuthContext'
import HomePage from './pages/HomePage'
import Perfil from './components/Perfil'
import Donaciones from './components/Donaciones'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<RegistroDonante />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/donaciones" element={<Donaciones />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
